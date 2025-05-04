import React from 'react';
import PizzaCard from './PizzaCard';
import './MenuSection.css';

const MenuSection = () => {
    const pizzas = [
        {
            id: 1,
            name: 'Маргарита',
            description: 'Томатный соус, моцарелла, базилик',
            price: 450,
            image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBpenphfGVufDB8fDB8fHwy'
        },
        {
            id: 2,
            name: 'Пепперони',
            description: 'Томатный соус, моцарелла, пепперони',
            price: 550,
            image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBpenphfGVufDB8fDB8fHwy'
        },
        {
            id: 3,
            name: 'Четыре сыра',
            description: 'Томатный соус, моцарелла, пармезан, горгонзола, фета',
            price: 600,
            image: 'https://images.unsplash.com/photo-1576458088443-04a19bb13da6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHBpenphfGVufDB8fDB8fHwy'
        },
        {
            id: 4,
            name: 'Гавайская',
            description: 'Томатный соус, моцарелла, ветчина, ананас',
            price: 580,
            image: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBpenphfGVufDB8fDB8fHwy'
        },
        {
            id: 5,
            name: 'Карбонара',
            description: 'Сливки, моцарелла, бекон, яйцо, пармезан',
            price: 620,
            image: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBpenphfGVufDB8fDB8fHwy'
        },
        {
            id: 6,
            name: 'Вегетарианская',
            description: 'Томатный соус, моцарелла, перец, лук, грибы, оливки',
            price: 520,
            image: 'https://images.unsplash.com/photo-1600628421066-f6bda6a7b976?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBpenphfGVufDB8fDB8fHwy'
        }
    ];

    return (
        <section id="menu" className="menu-section">
            <div className="container">
                <h2 className="section-title">Наше меню</h2>
                <p className="section-subtitle">Выберите свою любимую пиццу</p>

                <div className="menu-filters">
                    <button className="filter-btn active">Все</button>
                    <button className="filter-btn">Классические</button>
                    <button className="filter-btn">Острые</button>
                    <button className="filter-btn">Вегетарианские</button>
                </div>

                <div className="pizza-grid">
                    {pizzas.map(pizza => (
                        <PizzaCard key={pizza.id} pizza={pizza} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MenuSection;