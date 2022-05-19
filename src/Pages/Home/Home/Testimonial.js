import React from 'react';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import quote from '../../../assets/icons/quote.svg';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
    const testimonial = [
        { _id: 1, name: 'Wilson Harry', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quo facilis molestias illo eos atque asperiores voluptate porro', img: people1 },
        { _id: 2, name: 'Wilson Harry', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quo facilis molestias illo eos atque asperiores voluptate porro', img: people2 },
        { _id: 1, name: 'Wilson Harry', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quo facilis molestias illo eos atque asperiores voluptate porro', img: people3 }
    ]

    return (
        <section>
            <div className='flex justify-between justify-center items-center'>
                <div>
                    <h3 className='text-xl text-secondary'>Testimonial</h3>
                    <h1 className='text-4xl mb-12'>What Our Patients Say's</h1>
                </div>
                <div>
                    <img style={{ width: '192px', height: '156px' }} src={quote} alt="" />
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 px-12'>

                {
                    testimonial.map(card => <TestimonialCard key={card._id}
                        card={card}
                    ></TestimonialCard>)
                }
            </div>
        </section>
    );
};

export default Testimonial;