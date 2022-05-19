import React from 'react';
import appointment from '../../assets/images/appointment.png';

const ContactHome = () => {
    return (
        <div className=' ' style={{
            background: `url(${appointment})`
        }}>
            <div className='  grid justify-items-center content-center py-12 '>
                <h1 className='text-secondary text-xl font-bold'>Contact Us</h1>
                <h1 className='text-white text-3xl pb-2'>Stay Connected With Us</h1>

                <input type="email" placeholder="Email" className="input input-bordered input-sm w-full max-w-xs mb-2" />
                <input type="text" placeholder="Subject" className="input input-bordered input-sm w-full max-w-xs mb-2" />
                <textarea type="text" placeholder="Message" className="input input-bordered input-sm w-full max-w-xs mb-4" />
                <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary ">Submit</button>

            </div>
        </div>
    );
};

export default ContactHome;