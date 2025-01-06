import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Places.css';

function Places() {
    const places = [
        {
            name: 'Penang Hill',
            images: ['/ph.jpg', '/pnp.jpg', '/escape.jpg'],  // Add more images if available
            description: 'Penang Hill offers breathtaking views of George Town and a cool climate. Click to learn more!',
            route: 'https://www.penanghill.gov.my/index.php/en/'
        },
        {
            name: 'Penang National Park',
            images: ['/pnp.jpg', '/pnp.jpg', '/pnp.jpg'],  // Add more images if available
            description: 'Explore pristine beaches, rainforest trails, and unique attractions. Click to learn more!',
            route: 'https://www.wildlife.gov.my/index.php/en/11-info/154-penang-national-park'
        },
        {
            name: 'Escape Theme Park',
            images: ['/escape.jpg', '/escape.jpg', '/escape.jpg'],  // Add more images if available
            description: 'An adventure destination with thrilling rides, zip-lining, and water slides. Click to learn more!',
            route: 'https://www.escape.my/pg'
        }
    ];

    // State to handle the image index for each place
    const [currentIndex, setCurrentIndex] = useState(
        places.map(() => 0) // Initialize the index for each place as 0
    );

    // Function to move to the next image for a specific place
    const nextImage = (index) => {
        setCurrentIndex((prevIndex) => {
            const updatedIndex = [...prevIndex];
            const place = places[index];
            updatedIndex[index] = (updatedIndex[index] + 1) % place.images.length;
            return updatedIndex;
        });
    };

    // Function to move to the previous image for a specific place
    const prevImage = (index) => {
        setCurrentIndex((prevIndex) => {
            const updatedIndex = [...prevIndex];
            const place = places[index];
            updatedIndex[index] =
                updatedIndex[index] === 0 ? place.images.length - 1 : updatedIndex[index] - 1;
            return updatedIndex;
        });
    };

    // Auto-slide functionality for each place
    useEffect(() => {
        const intervals = places.map((place, index) =>
            setInterval(() => {
                setCurrentIndex((prevIndex) => {
                    const updatedIndex = [...prevIndex];
                    updatedIndex[index] = (updatedIndex[index] + 1) % place.images.length;
                    return updatedIndex;
                });
            }, 3000) // Change image every 3 seconds for each place
        );

        return () => intervals.forEach((interval) => clearInterval(interval));
    }, []);

    return (
        <div className="places-container">
            <h2>Explore Penang</h2>
            <div className="places-list">
                {places.map((place, index) => (
                    <div className="place-item" key={index}>
                        <div className="place-slider">
                            {/* Image Slider */}
                            <img
                                src={place.images[currentIndex[index]]}
                                alt={place.name}
                                className="place-image"
                            />

                            {/* Navigation buttons */}
                            <div className="slider-controls">
                                <button
                                    onClick={() => prevImage(index)}
                                    className="prev-btn"
                                >
                                    &lt;
                                </button>
                                <button
                                    onClick={() => nextImage(index)}
                                    className="next-btn"
                                >
                                    &gt;
                                </button>
                            </div>
                        </div>

                        {/* Place Details */}
                        <div className="place-details">
                            <h3>{place.name}</h3>
                            <p>{place.description}</p>
                            <Link to={place.route} className="place-link">Read More</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Places;
