import React from 'react';

const TestimonialCard = ({ card }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl my-12">
            <div className="card-body">

                <p className='text-sm text-left'>{card.text}</p>
            </div>
            <div className='flex'>
                <figure><img className='w-1/2' src={card.img} alt="Shoes" /></figure>
                <div className='pb-2 text-left'>
                    <h2 className="card-title text-lg">{card.name}</h2>
                    <p className='text-sm'>California</p>
                </div>

            </div>
        </div>
    );
};

export default TestimonialCard;