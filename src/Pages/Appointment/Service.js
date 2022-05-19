import React from 'react';


const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;

    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl text-center">
                <div className="card-body">
                    <h2 className="text-3xl text-secondary text-center">{name}</h2>
                    <p>{slots?.length > 0 ?
                        <span>{slots[0]}</span> :
                        <span className='text-red-500'>Please try another date.</span>}
                    </p>
                    <p>{slots?.length} <span>{(slots?.length > 1) ? 'spaces' : 'space'} available</span> </p>
                    <div className="justify-center">
                        <label
                            htmlFor="booking-modal"
                            disabled={slots?.length === 0}
                            onClick={() => setTreatment(service)}
                            className="btn btn-secondary text-white uppercase">Book Appointment</label>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Service;