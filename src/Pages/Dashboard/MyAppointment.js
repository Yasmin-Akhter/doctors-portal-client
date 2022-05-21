import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Loading';

const MyAppointment = () => {
    const [appointments, setAppointments] = useState([]);
    const [user, loading] = useAuthState(auth);
    // const { data: bookings, isLoading, refetch } = useQuery(['available', user], () => fetch(`http://localhost:5000/booking?patient=${user.email}`)
    //     .then(res => res.json()))


    // if (isLoading) {
    //     return <Loading></Loading>
    // }

    useEffect(() => {

        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`)
                .then(res => res.json())
                .then(data => setAppointments(data))

        }
    }
        , [user]
    )
    return (
        <div>
            <h1>My appointment:{appointments.length}</h1>
        </div>
    );
};

export default MyAppointment;