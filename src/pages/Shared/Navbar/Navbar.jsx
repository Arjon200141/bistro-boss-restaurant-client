import { Link } from "react-router-dom";

const Navbar = () => {
    const navOPtions = <>
        <li><Link to="/"><a>Home</a></Link></li>
        <li><Link to="contact"><a>CONTACT us</a></Link></li>
        <li><a>DASHBOARD</a></li>
        <li><Link to="menu"><a>Our Menu</a></Link></li>
        <li><Link to="shop"><a>Our Shop</a></Link></li>
        <li><a><img src="https://i.ibb.co/kHcKFLQ/shopping-cart.png" alt="" className="w-6 h-6"/></a></li>
    </>
    return (
        <>
            <div className="navbar bg-opacity-30 fixed z-10 max-w-screen-xl bg-[#15151580] text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="inter-font menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOPtions}
                        </ul>
                    </div>
                    <a className=" font-bold text-2xl cinzel-font"><span className="font-black text-3xl cinzel-font">BISTRO BOSS </span><br /> Restaurant</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 inter-font">
                        {navOPtions}
                    </ul>
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;