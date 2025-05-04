import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <div className="logo">Pizza<span>Mania</span></div>
                        <p>Настоящая итальянская пицца с 2010 года</p>
                    </div>

                    <div className="footer-links">
                        <h3>Меню</h3>
                        <ul>
                            <li><a href="#home">Главная</a></li>
                            <li><a href="#menu">Меню</a></li>
                            <li><a href="#about">О нас</a></li>
                            <li><a href="#gallery">Галерея</a></li>
                            <li><a href="#contacts">Контакты</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h3>Контакты</h3>
                        <p>ул. Пиццерийная, 123</p>
                        <p>+7 (123) 456-78-90</p>
                        <p>info@pizzamania.ru</p>
                    </div>

                    <div className="footer-subscribe">
                        <h3>Подписка</h3>
                        <p>Подпишитесь на наши новости и акции</p>
                        <form>
                            <input type="email" placeholder="Ваш email" />
                            <button type="submit">Подписаться</button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2023 PizzaMania. Все права защищены.</p>
                    <div className="payment-methods">
                        <span>Мы принимаем:</span>
                        <div className="payment-icons">
                            <span>Visa</span>
                            <span>MasterCard</span>
                            <span>МИР</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;