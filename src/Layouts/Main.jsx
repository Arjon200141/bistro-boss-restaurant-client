import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
    const location = useLocation();
    const noheaderFooter = location.pathname.includes('login');
    const noheaderFooter1 = location.pathname.includes('register');
    return (
        <div>
            {noheaderFooter || noheaderFooter1 || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noheaderFooter || noheaderFooter1 || <Footer></Footer>}
        </div>
    );
};

export default Main;