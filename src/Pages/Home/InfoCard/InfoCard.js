import React from 'react';

const InfoCard = (props) => {
    const { img, bgClass, cardTitle } = props;
    return (
        <div className={`card lg:card-side ${bgClass} shadow-xl pl-6 pt-2`}>
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>

            </div>
        </div>
    );
};

export default InfoCard;