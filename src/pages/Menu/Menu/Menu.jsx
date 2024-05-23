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

            <Cover
                img="https://i.ibb.co/QXs3m7r/dessert-bg.jpg"
                title="DESSERTS"
                description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            ></Cover>
            <MenuCategory items={dessert}></MenuCategory>


            {/* Pizza */}
            <Cover
                img={pizzaImg}
                title="PIZZA"
                description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            ></Cover>
            <MenuCategory items={pizza}></MenuCategory>


            {/* Salad */}
            <Cover
                img={saladImg}
                title="SALADS"
                description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            ></Cover>
            <MenuCategory items={salad}></MenuCategory>

            {/* Soups */}
            <Cover
                img={soupImg}
                title="SOUPS"
                description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            ></Cover>
            <MenuCategory items={soup}></MenuCategory>

        </div>
    );
};

export default Menu;