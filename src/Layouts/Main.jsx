import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
    const location = useLocation();
    const noheaderFooter = location.pathname.includes('login') || location.pathname.includes('register');
    return (
        <div>
            {noheaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noheaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;