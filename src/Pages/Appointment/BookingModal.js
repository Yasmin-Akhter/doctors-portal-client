import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment;
    const [user, loading, error] = useAuthState(auth);

    const formattedDate = format(date, 'PP');

    const handleModal = e => {
        e.preventDefault();
        const slot = e.target.slot.value;
        const booking = {
            treatmentId: _id,
            treatmentName: name,
            date: formattedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: e.target.phone.value
        }
        //to close the modal


        fetch('http://localhost:5000/booking', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(booking),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                if (data.success) {
                    toast(`Appointment set on ${formattedDate} ${slot}`);


                }
                else {
                    toast.error(`Already have an appointment on ${formattedDate} ${slot}`);


                }

                setTreatment(null);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-xl text-secondary">Booking for:{name}!</h3>
                    <form onSubmit={handleModal} className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input type="text" name='date' disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />

                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots?.map((slot, index) => <option key={index} value={slot}>{slot} </option>)
                            }


                        </select>
                        <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;