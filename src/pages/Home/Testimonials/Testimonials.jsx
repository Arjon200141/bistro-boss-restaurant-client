import SectionTitle from "../../../Components/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])
    return (
        <section className="my-20 mx-24">
            <SectionTitle
                subHeading="---What Our Clients Say---"
                heading="TESTIMONIALS"
            >
            </SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
                <div>
                    {
                        reviews.map(review => <SwiperSlide key={review._id} >
                            <div className="mx-32 my-10 flex flex-col items-center gap-6">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <div className="flex gap-2">
                                    <svg width="47.000000" height="85.000000" viewBox="0 0 47 85" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <desc>
                                            Created with Pixso.
                                        </desc>
                                        <defs />
                                        <path id="Vector" d="M34.61 38.15L21.15 38.15C19.55 38.15 18.18 37.59 17.06 36.47C15.94 35.34 15.38 33.98 15.38 32.38L15.38 30.46C15.38 26.21 16.88 22.58 19.89 19.58C22.89 16.58 26.52 15.07 30.76 15.07L34.61 15.07C35.65 15.07 36.55 14.69 37.31 13.93C38.08 13.17 38.46 12.27 38.46 11.23L38.46 3.53C38.46 2.49 38.08 1.59 37.31 0.83C36.55 0.07 35.65 -0.31 34.61 -0.31L30.76 -0.31C26.6 -0.31 22.62 0.5 18.84 2.12C15.05 3.74 11.77 5.94 9.01 8.7C6.24 11.47 4.05 14.74 2.43 18.53C0.81 22.31 -0.01 26.29 -0.01 30.46L-0.01 72.76C-0.01 75.97 1.12 78.69 3.36 80.94C5.6 83.18 8.33 84.3 11.53 84.3L34.61 84.3C37.82 84.3 40.54 83.18 42.78 80.94C45.03 78.69 46.15 75.97 46.15 72.76L46.15 49.69C46.15 46.48 45.03 43.76 42.78 41.51C40.54 39.27 37.81 38.15 34.61 38.15Z" fill="#151515" fillOpacity="1.000000" fillRule="nonzero" />
                                    </svg>
                                    <svg width="47.000000" height="85.000000" viewBox="0 0 47 85" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <desc>
                                            Created with Pixso.
                                        </desc>
                                        <defs />
                                        <path id="Vector" d="M34.61 38.15L21.15 38.15C19.55 38.15 18.18 37.59 17.06 36.47C15.94 35.34 15.38 33.98 15.38 32.38L15.38 30.46C15.38 26.21 16.88 22.58 19.89 19.58C22.89 16.58 26.52 15.07 30.76 15.07L34.61 15.07C35.65 15.07 36.55 14.69 37.31 13.93C38.08 13.17 38.46 12.27 38.46 11.23L38.46 3.53C38.46 2.49 38.08 1.59 37.31 0.83C36.55 0.07 35.65 -0.31 34.61 -0.31L30.76 -0.31C26.6 -0.31 22.62 0.5 18.84 2.12C15.05 3.74 11.77 5.94 9.01 8.7C6.24 11.47 4.05 14.74 2.43 18.53C0.81 22.31 -0.01 26.29 -0.01 30.46L-0.01 72.76C-0.01 75.97 1.12 78.69 3.36 80.94C5.6 83.18 8.33 84.3 11.53 84.3L34.61 84.3C37.82 84.3 40.54 83.18 42.78 80.94C45.03 78.69 46.15 75.97 46.15 72.76L46.15 49.69C46.15 46.48 45.03 43.76 42.78 41.51C40.54 39.27 37.81 38.15 34.61 38.15Z" fill="#151515" fillOpacity="1.000000" fillRule="nonzero" />
                                    </svg>

                                </div>
                                <p className="text-xl text-[#444444]">{review.details}</p>
                                <p className="text-3xl font-medium text-[#CD9003]">{review.name}</p>
                            </div>
                        </SwiperSlide>)
                    }
                </div>
            </Swiper>

        </section>
    );
};

export default Testimonials;