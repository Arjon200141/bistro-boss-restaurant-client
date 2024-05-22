import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src="https://i.ibb.co/bvn3bfW/02.jpg"/>             
            </div>
            <div>
                <img src="https://i.ibb.co/6sxJmGR/04.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/4pWXjWz/01.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/RpMcjnH/03.png" />             
            </div>
            <div>
                <img src="https://i.ibb.co/CtBwhNW/06.png" />
            </div>
            <div>
                <img src="https://i.ibb.co/8x7rzM2/05.png" />
            </div>
        </Carousel>
    );
};

export default Banner;