import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import authentication from '../../assets/others/authentication2.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineGoogle } from 'react-icons/ai';
import { FaFacebookF, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProviders';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const LogIn = () => {

    const [disabled, setDisabled] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const { signIn } = useContext(AuthContext);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleValidateCaptcha = e => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }

    }

    const handleLogIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: "Logged In !",
                    text: "You have Logged In Successfully!!!",
                    icon: "success"
                });
                navigate(from , {replace: true});
                
            })
    }

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/b50vt8C/authentication.png)' }}>
            <Helmet>
                <title>Bistro Boss | Log In </title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row gap-40 px-16 shadow-2xl my-8" style={{ backgroundImage: 'url(https://i.ibb.co/b50vt8C/authentication.png)' }}>
                <div className="text-center md:w-1/2 lg:text-left">
                    <img src={authentication} alt="" />
                </div>
                <div className="card md:w-1/2 max-w-sm">
                    <h2 className='text-3xl font-bold text-center'>Login Here !</h2>
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="Type The Text Above" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disabled} type="submit" value="Log In" className="btn bg-[#D1A054] h-10 text-white text-2xl font-semibold" />
                        </div>
                    </form>
                    <p className="text-xl font-semibold text-center mb-6 text-[#D1A054]">New here? <Link to="/register" className="font-bold">Create a New Account</Link></p>
                    <p className='text-lg font-semibold text-center mb-4'>Or sign in with</p>
                    <div className='ml-16 flex gap-20 mb-4'>
                        <p className='border-2 rounded-full border-black p-1 font-bold text-xl'><FaFacebookF /></p>
                        <p className='border-2 rounded-full border-black p-1 font-bold text-xl'><AiOutlineGoogle /></p>
                        <p className='border-2 rounded-full border-black p-1 font-bold text-xl'><FaGithub /></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;