import React from 'react';
import ServiceCard from './ServiceCard/ServiceCard';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import treatment from '../../../assets/images/treatment.png';
import './Services.css';
import ServicesBody from './ServicesBody/ServicesBody';

const Services = () => {
    return (
        <div className='my-14'>
            <h3 className='text-xl text-secondary text-center font-bold'>Our Services</h3>
            <h1 className='text-4xl text-center mb-4'>Services We Provide</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                <ServiceCard img={fluoride} cardTitle="Fluoride Treatment"></ServiceCard>
                <ServiceCard img={cavity} cardTitle="Cavity Filling"></ServiceCard>
                <ServiceCard img={whitening} cardTitle="Teeth whitening"></ServiceCard>

            </div>
            <ServicesBody img={treatment}></ServicesBody>
        </div>
    );
};

export default Services;