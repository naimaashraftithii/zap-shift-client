import React from 'react';
import Banner from '../Banner/Banner';
import HowWork from '../HowWork/HowWork';
import OurServices from '../OurServices/OurServices';
import LogoCarousel from '../LogoCarousel/LogoCarousel';




const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <HowWork/>
        <OurServices></OurServices>
        <LogoCarousel></LogoCarousel>
             
        </div>
    );
};

export default Home;