import { FaCalendar, FaCartPlus, FaHome, FaList } from "react-icons/fa";
import { MdEmail, MdRateReview, MdShoppingBag, MdWorkHistory } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="flex cinzel-font">
            <div className="w-64 min-h-screen bg-orange-300">
                <h2 className="text-3xl font-semibold pt-8 pl-6">BISTRO BOSS</h2>
                <h2 className="text-xl font-medium pl-6">RESTAURANT</h2>
                <ul className="space-y-3 py-8 pl-6 text-lg">
                    <li className="flex items-center gap-2">
                        <FaHome />
                        <NavLink to="/dashboard/userhome">USER HOME</NavLink>
                    </li>
                    <li className="flex items-center gap-2">
                        <FaCalendar />
                        <NavLink to="/dashboard/reserve">RESERVATION</NavLink>
                    </li>
                    <li className="flex items-center gap-2">
                        <MdWorkHistory />
                        <NavLink to="/dashboard/payment">PAYMENT HISTORY</NavLink>
                    </li>
                    <li className="flex items-center gap-2">
                        <FaCartPlus />
                        <NavLink to="/dashboard/cart">MY CART ({cart.length})</NavLink>
                    </li>
                    <li className="flex items-center gap-2">
                        <MdRateReview />
                        <NavLink to="/dashboard/review">ADD REVIEW</NavLink>
                    </li>
                    <li className="flex items-center gap-2">
                        <FaList />
                        <NavLink to="/dashboard/booking">MY BOOKING</NavLink>
                    </li>

                    <div className="divider pr-6"></div>

                    <li className="flex items-center gap-2">
                        <FaHome />
                        <NavLink to="/">HOME</NavLink>
                    </li>
                    <li className="flex items-center gap-2">
                        <TiThMenu />
                        <NavLink to="/menu">MENU</NavLink>
                    </li>
                    <li className="flex items-center gap-2">
                        <MdShoppingBag />
                        <NavLink to="/shop">SHOP</NavLink>
                    </li>
                    <li className="flex items-center gap-2">
                        <MdEmail />
                        <NavLink to="/contact">CONTACT</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;