import { Link, useNavigate } from 'react-router-dom';
import authentication from '../../assets/others/authentication2.png'
import { FaFacebookF, FaGithub } from 'react-icons/fa';
import { AiOutlineGoogle } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';



const Register = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();



    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        console.log("User Updated Successfully!");
                        reset();
                        Swal.fire({
                            title: "Account Registered!",
                            text: "User Created Successfully!!!",
                            icon: "success"
                        });
                        navigate('/');
                    })
                    .catch(error => console.error(error));
            })
            .catch(error => console.error(error));
    }


    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/b50vt8C/authentication.png)' }}>
            <Helmet>
                <title>Bistro Boss | Register </title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row gap-40 mx-20 shadow-2xl my-16" style={{ backgroundImage: 'url(https://i.ibb.co/b50vt8C/authentication.png)' }}>
                <div className="text-center md:w-1/2 lg:text-left">
                    <img src={authentication} alt="" />
                </div>
                <div className="card md:w-1/2 max-w-sm">
                    <h2 className='text-3xl font-bold text-center'>Register Now !</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                            {errors.name && <span className='ml-4 text-lg font-medium text-orange-400'>Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" {...register("photo", { required: true })} name="photo" placeholder="Photo URL" className="input input-bordered" />
                            {errors.photo && <span className='ml-4 text-lg font-medium text-orange-400'>Photo is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <span className='ml-4 text-lg font-medium text-orange-400'>E-Mail is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true })} name="password" placeholder="password" className="input input-bordered" />
                            {errors.password && <span className='ml-4 text-lg font-medium text-orange-400'>Password is required</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Sign In" className="btn bg-[#D1A054] text-white text-2xl font-semibold h-10" />
                        </div>
                    </form>
                    <p className="text-xl font-semibold text-center mb-6 text-[#D1A054]">Already registered?  <Link to="/login" className="font-bold">Go to log in</Link></p>

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

export default Register;