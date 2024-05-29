import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Contact</title>
            </Helmet>
            <Cover img="https://i.ibb.co/sVqfgSL/banner.jpg"
                title="CONTACT US"
                description="Would you like to try a dish?"
            ></Cover>
        </div>
    );
};

export default Contact;