import PopularMenu from "../PopularMenu/PopularMenu";
import Banner from "../Banner/Banner";
import Call from "../Call/Call";
import Category from "../Category/Category";
import DetailsRestaurant from "../DetailsREstaurant.jsx/DetailsRestaurant";
import ChefRecommend from "../ChefREcommend/ChefRecommend";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <DetailsRestaurant></DetailsRestaurant>
            <PopularMenu></PopularMenu>
            <Call></Call>
            <ChefRecommend></ChefRecommend>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;