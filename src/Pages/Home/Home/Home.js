import React from 'react';
import Footer from '../../Footer';
import AppointmentHome from '../AppointmentHome';
import Banner from '../Banner/Banner';
import ContactHome from '../ContactHome';
import Info from '../Info/Info';
import Services from '../Services/Services';
import Testimonial from './Testimonial';


const Home = () => {
    return (
        <div className='px-12' >
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <AppointmentHome></AppointmentHome>
            <Testimonial></Testimonial>
            <ContactHome></ContactHome>
            <Footer></Footer>
        </div >
    );
};

export default Home;