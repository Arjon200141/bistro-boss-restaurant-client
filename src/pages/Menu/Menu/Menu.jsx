import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';


const Menu = () => {
    
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div className='cinzel-font'>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img="https://i.ibb.co/ChbvhKX/banner3.jpg"
                title="OUR MENU"
                description="Would you like to try a dish?"
            ></Cover>
            <SectionTitle
                subHeading="---Don't miss---"
                heading="TODAY'S OFFER"
            ></SectionTitle>

            <MenuCategory items={offered}></MenuCategory>

            {/*  Desserts */}
            <MenuCategory items={dessert}
                img="https://i.ibb.co/QXs3m7r/dessert-bg.jpg"
                title="dessert"
                description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            ></MenuCategory>


            {/* Pizza */}
            <MenuCategory items={pizza}
                img={pizzaImg}
                title="pizza"
                description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            ></MenuCategory>


            {/* Salad */}
            <MenuCategory items={salad}
                img={saladImg}
                title="salad"
                description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            ></MenuCategory>

            {/* Soups */}
            <MenuCategory items={soup}
                img={soupImg} title="soup"
                description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            ></MenuCategory>

        </div>
    );
};

export default Menu;