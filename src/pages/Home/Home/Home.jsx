import React from 'react';
import Banner from '../Banner/Banner';
import HowWork from '../HowWork/HowWork';
import OurServices from '../OurServices/OurServices';
import LogoCarousel from '../LogoCarousel/LogoCarousel';
import LogoCarousel1 from '../LogoCarousel/LogoCarousel1';
import DeliveryHighlights from '../DeliveryHighlights/DeliveryHighlights';
import MerchantCta from '../MerchantCta/MerchantCta';
import TestimonialSlider from '../TestimonialSlider/TestimonialSlider';
import TestimonialSlider1 from '../TestimonialSlider/TestimonialSlider1';
import FAQ from '../FAQ/FAQ';

const testimonialPromise = fetch('/reviews.json').then(res => res.json());


const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <HowWork/>
        <OurServices></OurServices>
        <LogoCarousel></LogoCarousel>
        <LogoCarousel1></LogoCarousel1>
        <DeliveryHighlights></DeliveryHighlights>
        <MerchantCta></MerchantCta>
        <TestimonialSlider  ></TestimonialSlider>
        <TestimonialSlider1 testimonialPromise={testimonialPromise}></TestimonialSlider1>
        <FAQ></FAQ>
             
        </div>
    );
};

export default Home;