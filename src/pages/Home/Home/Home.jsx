import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import DetailsRestaurant from "../DetailsREstaurant.jsx/DetailsRestaurant";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <DetailsRestaurant></DetailsRestaurant>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;