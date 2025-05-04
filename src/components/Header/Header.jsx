import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="logo">Pizza<span>Mania</span></div>

                <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                    <a href="#home">Главная</a>
                    <a href="#menu">Меню</a>
                    <a href="#about">О нас</a>
                    <a href="#gallery">Галерея</a>
                    <a href="#contacts">Контакты</a>
                </nav>

                <div className="header-actions">
                    <button className="order-btn">Заказать</button>
                    <div className="hamburger" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;