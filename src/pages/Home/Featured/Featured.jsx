import SectionTitle from "../../../Components/SectionTitle";
import img1 from "../../../assets/home/featured.jpg"
import "./featured.css";

const Featured = () => {
    return (
        <section className="featured-item bg-black my-16 pt-6">
            <SectionTitle
                subHeading="---Check it out---"
                heading="FROM OUR MENU"
            ></SectionTitle>
            <div className="flex items-center gap-20 mx-16 py-16 px-20 bg-fixed  ">
                <div>
                    <img src={img1} alt="" />
                </div>
                <div className="text-white pt-4">
                    <p className="text-xl ">March 20, 2023</p>
                    <p className="text-xl ">WHERE CAN I GET SOME?</p>
                    <p className="text-lg ">The Bistro Boss Restaurant features a dynamic interface with online ordering capabilities, allowing users to browse the menu, add items to their cart, and place orders directly through the site. The site also supports secure online payments via Stripe, making transactions easy and safe.</p>

                    <button className="btn btn-outline bg-white/20 my-4 border-b-4 rounded-xl shadow-2xl border-0 text-white">Read More</button>
                </div>
            </div>
            
        </section>
    );
};

export default Featured;