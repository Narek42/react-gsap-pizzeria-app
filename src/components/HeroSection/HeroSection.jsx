import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section id="home" className="hero-section">
            <div className="container">
                <div className="hero-content">
                    <h1>Лучшая пицца в городе</h1>
                    <p>Настоящая итальянская пицца по традиционным рецептам</p>
                    <div className="hero-buttons">
                        <a href="#menu" className="btn-primary">Посмотреть меню</a>
                        <a href="#contacts" className="btn-secondary">Заказать сейчас</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;