import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ title, items, img, description }) => {

    return (
        <div>
            {title && <Cover img={img} title={title.toUpperCase()} description={description}> </Cover>}
            <div className="grid grid-cols-2 gap-10 mx-32 my-16">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <Link to={`/shop/${title}`}>
                <div className='flex justify-center'>
                    <button className='py-2 px-6 mb-16 border-0 border-b-4 border-black rounded-xl'>ORDER YOUR FAVOURITE FOOD</button>
                </div>
            </Link>
        </div>
    );
};

export default MenuCategory;