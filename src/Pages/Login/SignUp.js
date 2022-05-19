import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading';
import { useForm } from 'react-hook-form';


const SignUp = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword, sError,
        user,
        loading
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true },);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password,);
        await updateProfile({ displayName: data.name });
        alert('user updated');


    }
    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        navigate('/appointment');
        console.log(user);;
    }
    let signInError;
    if (sError || updateError) {
        signInError = <p className='text-red-500'><small>{sError?.message || updateError?.message}</small></p>;

    }

    return (

        <div className="card bg-base-100 shadow-xl flex justify-center items-center h-screen">
            <div className="card-body">
                <h1 className='text-4xl my-4 text-primary'>Sign Up</h1>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Please enter your name'

                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Enter your email</span>
                        </label>
                        <input type="email" name='email' placeholder="Your Email" className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Please enter your email'

                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Please enter a valid email'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Password" className="input input-bordered w-full max-w-xs"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Please enter your password'

                                },
                                minLength: {
                                    value: 6,
                                    message: 'Password must be more then 6 characters'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                        </label>
                    </div>



                    {signInError}
                    <input className='btn w-full max-w-xs' type="submit" value='Sign Up' />
                </form>

                <p className='text-sm'>Already have an account? <Link to="/login" className='text-primary'>Please Login</Link></p>



            </div>
        </div>
    );
};

export default SignUp;