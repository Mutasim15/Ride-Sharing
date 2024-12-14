import React from 'react';
import Hero from '../Hero/Hero';
// import heroImage from '../../../assets/bg.jpg';
const HomeContainer = () => {
    return (
        <div>
             <div className="hero-section">
                   {/* <img src={heroImage} alt="Hero" className="hero-image" /> */}
                   <Hero></Hero>
             </div>
         
        </div>
    );
};

export default HomeContainer;