import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/treatment')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    console.log(services);
    return (
        <div>
            <p className='text-secondary text-center my-12'>Available appointment on {format(date, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }

                {
                    treatment && <BookingModal treatment={treatment} setTreatment={setTreatment} date={date}></BookingModal>
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;