import Cover from "../Shared/Cover/Cover";
import shopCover from "../../assets/shop/banner2.jpg"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useState } from "react";
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../Hooks/useMenu";
import FoodCard from "../../Components/FoodCard";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';


const Shop = () => {
    // const pagination = {
    //     clickable: true,
    //     renderBullet: function (index, className) {
    //         return '<span class="' + className + '">' + (index + 1) + '</span>';
    //     },
    // };
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const [menu] = useMenu();
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div className="mb-16">
            <Helmet>
                <title>Bistro Boss | Shop</title>
            </Helmet>

            <Cover
                img={shopCover}
                title="OUR SHOP"
                description="Would you like to try a dish?"
            ></Cover>

            <Tabs className="m-16" defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <div className="flex justify-center">
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>
                </div>
                <TabPanel>
                    <div className="grid grid-cols-3 gap-6 my-16">
                        {
                            salad.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-3 gap-6 my-16">
                        {
                            pizza.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-3 gap-6 my-16">
                        {
                            soup.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-3 gap-6 my-16">
                        {
                            dessert.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-3 gap-6 my-16">
                        {
                            drinks.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>



            {/* <>
                <Swiper
                    pagination={pagination}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                    <div className="grid grid-cols-3 gap-6 my-16">
                        {
                            salad.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                        }
                    </div>
                    </SwiperSlide>
                </Swiper>
            </> */}
        </div>
    );
};

export default Shop;