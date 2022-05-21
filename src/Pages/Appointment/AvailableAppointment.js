import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    // const [services, setServices] = useState([]);
    // const [counter, setCounter] = useState(0);
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, 'PP');


    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json()))


    if (isLoading) {
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formattedDate, counter]);

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
                    treatment && <BookingModal
                        treatment={treatment}
                        setTreatment={setTreatment}
                        date={date}
                        refetch={refetch}
                    ></BookingModal>
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;