import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import MenuSection from './components/MenuSection/MenuSection';
import AboutSection from './components/AboutSection/AboutSection';
import GallerySection from './components/GallerySection/GallerySection';
import Testimonials from './components/Testimonials/Testimonials';
import ContactsSection from './components/ContactsSection/ContactsSection';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="app">
            <Header />
            <main>
                <HeroSection />
                <MenuSection />
                <AboutSection />
                <GallerySection />
                <Testimonials />
                <ContactsSection />
            </main>
            <Footer />
        </div>
    );
}

export default App;