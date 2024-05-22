import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../assets/assets/home/01.jpg'
import banner2 from '../assets/assets/home/02.jpg'
import banner3 from '../assets/assets/home/03.png'
const Banner = () => {
    return (
        <div >
             <Carousel
             className="text-center"
             autoPlay={true}
             infiniteLoop={true}
            //  centerMode={true}
             >
               
            
                <div className="w-full h-[640px] text-center">
                    <img src={banner1} />
                </div>
                <div className="w-full h-[640px] text-center">
                    <img src={banner2} />
                </div>
                <div className="w-full h-[640px] text-center">
                    <img src={banner3}/>
                </div>
               
            </Carousel>
        </div>
    );
};

export default Banner;