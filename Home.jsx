import { useNavigate } from 'react-router-dom';
import './Home.css';


function Home() {
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    };

    return (
        <div className="main-container">
            <h2 className="home-title">Welcome to Visit Penang</h2>
            <p className="home-description">Discover the charm of Penang, a cultural and natural paradise with endless attractions.</p>

            <div className="card-container">
                <div className="card" onClick={() => navigateTo('/hotel')}>
                    <img src="/ph.jpg" alt="Hotels" className="card-image" />
                    <h3>Hotels</h3>
                    <p>Discover the best places to stay in Penang.</p>
                </div>
                <div className="card" onClick={() => navigateTo('/food')}>
                    <img src="pnp.jpg" alt="Food" className="card-image" />
                    <h3>Food</h3>
                    <p>Explore the top local cuisines and restaurants.</p>
                </div>
                <div className="card" onClick={() => navigateTo('/places')}>
                    <img src="/escape.jpg" alt="Attractions" className="card-image" />
                    <h3>Attractions</h3>
                    <p>Visit the must-see attractions in Penang.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
