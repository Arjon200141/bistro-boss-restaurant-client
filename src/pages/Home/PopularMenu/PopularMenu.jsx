import SectionTitle from "../../../Components/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    return (
        <section className="my-20">
            <SectionTitle
            subHeading={"---Check it out---"}
            heading={"FROM OUR MENU"}
            ></SectionTitle>
            <div className="grid grid-cols-2 gap-10 mx-32">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="flex justify-center mt-8">
            <button className="text-[#1F2937] btn btn-ghost border-b-4 border-black shadow-2xl">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;