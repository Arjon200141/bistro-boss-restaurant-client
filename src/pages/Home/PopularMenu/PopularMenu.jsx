import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu , setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularData = data.filter(item => item.category === 'popular')
            setMenu(popularData);
        })
    },[])
    return (
        <section className="my-20">
            <SectionTitle
            subHeading={"---Check it out---"}
            heading={"FROM OUR MENU"}
            ></SectionTitle>
            <div className="grid grid-cols-2 gap-10 mx-32">
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="flex justify-center mt-8">
            <button className="text-[#1F2937] btn btn-ghost border-b-4 border-black shadow-2xl">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;