import React from 'react';
import { Container } from 'react-bootstrap';
import Star from './Star';
import '../css/StarsHero.css';

const generateStars = (count) => {
    return Array.from({ length: count }, (_, i) => {
        const style = {
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `scale(${Math.random()})`,
            animationDuration: `${Math.random() * 2 + 1}s`, // Duration between 1s and 3s
            animationDelay: `${Math.random() * 2}s`
        };
        return <Star classname = "star" key={i} style={style} />;
    });
};

const StarsHero = ({data}) => {
    const stars = generateStars(300); // Adjust the count as needed

    return (
        <Container fluid className="hero-section">


            {stars}

            {/* Your content here */}
        </Container>
    );
};

export default StarsHero;