import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Анна',
            text: 'Лучшая пицца в городе! Всегда свежая и вкусная. Особенно люблю Маргариту.',
            rating: 5
        },
        {
            id: 2,
            name: 'Иван',
            text: 'Быстрая доставка и отличное качество. Заказываем здесь каждую пятницу.',
            rating: 4
        },
        {
            id: 3,
            name: 'Мария',
            text: 'Очень вкусное тесто и свежие ингредиенты. Рекомендую всем!',
            rating: 5
        }
    ];

    return (
        <section className="testimonials-section">
            <div className="container">
                <h2 className="section-title">Отзывы</h2>
                <p className="section-subtitle">Что говорят наши клиенты</p>

                <div className="testimonials-grid">
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} className="testimonial-card">
                            <div className="rating">
                                {'★'.repeat(testimonial.rating)}
                                {'☆'.repeat(5 - testimonial.rating)}
                            </div>
                            <p className="testimonial-text">"{testimonial.text}"</p>
                            <p className="testimonial-author">- {testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;