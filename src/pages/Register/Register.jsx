import { Link } from 'react-router-dom';
import authentication from '../../assets/others/authentication2.png'
import { FaFacebookF, FaGithub } from 'react-icons/fa';
import { AiOutlineGoogle } from 'react-icons/ai';
const Register = () => {
    const handleLogIn = () => {

    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/b50vt8C/authentication.png)' }}>
            <div className="hero-content flex-col lg:flex-row gap-40 mx-20 shadow-2xl my-16" style={{ backgroundImage: 'url(https://i.ibb.co/b50vt8C/authentication.png)' }}>
                <div className="text-center md:w-1/2 lg:text-left">
                    <img src={authentication} alt=""/>
                </div>
                <div className="card md:w-1/2 max-w-sm">
                    <h2 className='text-3xl font-bold text-center'>Login</h2>
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
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