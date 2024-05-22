import PopularMenu from "../PopularMenu/PopularMenu";
import Banner from "../Banner/Banner";
import Call from "../Call/Call";
import Category from "../Category/Category";
import DetailsRestaurant from "../DetailsREstaurant.jsx/DetailsRestaurant";
import ChefRecommend from "../ChefREcommend/ChefRecommend";
import Featured from "../Featured/Featured";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <DetailsRestaurant></DetailsRestaurant>
            <PopularMenu></PopularMenu>
            <Call></Call>
            <ChefRecommend></ChefRecommend>
            <Featured></Featured>
        </div>
    );
};

export default Home;