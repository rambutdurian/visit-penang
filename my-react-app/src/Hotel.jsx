// Hotel.jsx
function Hotel() {
    const hotels = [
        { name: 'Eastern & Oriental Hotel', description: 'A luxurious heritage hotel with stunning sea views.' },
        { name: 'The Prestige Hotel', description: 'A modern boutique hotel in George Town.' },
        { name: 'Shangri-La Rasa Sayang', description: 'A beachfront resort surrounded by lush greenery.' }
    ];

    return (
        <div>
            <h2>Top Hotels in Penang</h2>
            <ul>
                {hotels.map((hotel, index) => (
                    <li key={index}>
                        <h3>{hotel.name}</h3>
                        <p>{hotel.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Hotel;
