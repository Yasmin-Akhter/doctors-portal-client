import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../Loading';



const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    //google signIn:
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    //sign in with email/pass:
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    //reset password:
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
    );

    const [email, setEmail] = useState('');

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
        setEmail(data.email);

    }
    // handle reset
    const handleResetPass = async email => {
        console.log(email);
        await sendPasswordResetEmail(email);

        // alert('Sent email');
    }
    if (loading || gLoading) {
        return <Loading></Loading>
    }
    let from = location.state?.from?.pathname || "/";

    if (user || gUser) {
        navigate(from, { replace: true });
        console.log(user);;
    }
    let signInError;
    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>;

    }

    return (

        <div className="card bg-base-100 shadow-xl flex justify-center items-center h-screen">
            <div className="card-body">
                <h1 className='text-4xl my-4 text-primary'>Please Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>

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
                            <button
                                onClick={() => navigate('/password-reset')}
                            >
                                Reset password
                            </button>

                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                        </label>
                    </div>



                    {signInError}
                    <input className='btn w-full max-w-xs' type="submit" value='Login' />
                </form>

                <p className='text-sm'>New to Doctors Portal? <Link to="/signUp" className='text-primary'>Create new account</Link></p>
                <div className="divider">OR</div>
                <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-primary w-full max-w-xs">Continue with Google</button>

            </div>
        </div>




    );
};

export default Login;