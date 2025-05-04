import React, { useState } from 'react';
import './MenuSection.css';

const PizzaCard = ({ pizza }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`pizza-card ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="pizza-image">
                <img src={pizza.image} alt={pizza.name} />
            </div>
            <div className="pizza-info">
                <h3>{pizza.name}</h3>
                <p>{pizza.description}</p>
                <div className="pizza-footer">
                    <span className="price">{pizza.price} ₽</span>
                    <button className="add-to-cart">+</button>
                </div>
            </div>
        </div>
    );
};

export default PizzaCard;