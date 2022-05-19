import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'

const AppointmentHome = () => {
    return (
        <section className='flex justify-center items-center my-12 flex-col lg:flex-row' style={{
            background: `url(${appointment})`
        }}>
            <div className='flex-1'>
                <img className='mt-[-120px] hidden lg:block' src={doctor} alt="" />
            </div>
            <div className='flex-1 pl-2'>
                <h3 className='text-primary text-2xl text-left'>Appointment</h3>
                <h1 className='text-white text-4xl text-left  py-2'>Make an appointment today</h1>
                <p className='text-white text-left mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quod, commodi tempora quidem reiciendis fugit saepe architecto nostrum repudiandae autem molestiae aperiam. Nisi adipisci repellat ut, error dolores tempora a?</p>
                <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary ">Get Started</button>
            </div>
        </section>
    );
};

export default AppointmentHome;