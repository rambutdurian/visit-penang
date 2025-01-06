function Food() {
    const foods = [
        { name: 'Penang Laksa', description: 'A tangy and spicy noodle soup.' },
        { name: 'Char Kway Teow', description: 'Stir-fried flat noodles with prawns and egg.' },
        { name: 'Nasi Kandar', description: 'A flavorful rice dish served with various curries.' }
    ];

    return (
        <div>
            <h2>Top Foods in Penang</h2>
            <ul>
                {foods.map((food, index) => (
                    <li key={index}>
                        <h3>{food.name}</h3>
                        <p>{food.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Food;
