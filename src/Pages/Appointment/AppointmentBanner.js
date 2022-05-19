import React from 'react';
import { DayPicker } from 'react-day-picker';
import bg from '../../assets/images/bg.png';
import chair from '../../assets/images/chair.png';

const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div>
            <div className="hero min-h-screen" style={{
                background: `url(${bg})`
            }}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <DayPicker mode="single"
                            selected={date}
                            onSelect={setDate} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;