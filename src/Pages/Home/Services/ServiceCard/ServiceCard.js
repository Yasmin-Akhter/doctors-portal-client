import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ img, cardTitle }) => {
    return (

        <div className="card bg-base-100 shadow-xl serviceCard">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{cardTitle}</h2>
                <p>If a dog chews shoes whose ?</p>
            </div>
        </div>

    );
};

export default ServiceCard;