import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <h2 className="section-title">О нашей пиццерии</h2>
                        <p>
                            Наша пиццерия была основана в 2010 году с любовью к настоящей итальянской пицце.
                            Мы используем только свежие ингредиенты и традиционные рецепты, передаваемые из поколения в поколение.
                        </p>
                        <p>
                            Наше тесто готовится ежедневно вручную, а соусы делаются по уникальным рецептам наших шеф-поваров.
                        </p>
                        <ul className="about-features">
                            <li>Свежие ингредиенты</li>
                            <li>Дровяная печь</li>
                            <li>Собственные рецепты</li>
                            <li>Быстрая доставка</li>
                        </ul>
                    </div>
                    <div className="about-image">
                        <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hlZnxlbnwwfHwwfHx8Mg%3D%3D" alt="Шеф-повар" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;