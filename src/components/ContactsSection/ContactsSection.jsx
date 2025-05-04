import React from 'react';
import './ContactsSection.css';

const ContactsSection = () => {
    return (
        <section id="contacts" className="contacts-section">
            <div className="container">
                <div className="contacts-content">
                    <div className="contacts-info">
                        <h2 className="section-title">Контакты</h2>

                        <div className="contact-item">
                            <h3>Адрес</h3>
                            <p>ул. Пиццерийная, 123, г. Москва</p>
                        </div>

                        <div className="contact-item">
                            <h3>Телефон</h3>
                            <p>+7 (123) 456-78-90</p>
                        </div>

                        <div className="contact-item">
                            <h3>Часы работы</h3>
                            <p>Пн-Пт: 10:00 - 22:00</p>
                            <p>Сб-Вс: 11:00 - 23:00</p>
                        </div>

                        <div className="social-links">
                            <a href="#" className="social-icon">Instagram</a>
                            <a href="#" className="social-icon">Facebook</a>
                            <a href="#" className="social-icon">Telegram</a>
                        </div>
                    </div>

                    <div className="contact-form">
                        <h3>Оставьте заявку</h3>
                        <form>
                            <input type="text" placeholder="Ваше имя" required />
                            <input type="tel" placeholder="Телефон" required />
                            <textarea placeholder="Ваше сообщение"></textarea>
                            <button type="submit" className="btn-primary">Отправить</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactsSection;