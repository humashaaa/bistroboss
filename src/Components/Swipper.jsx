import img1 from '../assets/assets/home/slide1.jpg'
import img2 from '../assets/assets/home/slide2.jpg'
import img3 from '../assets/assets/home/slide3.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const Swipper = () => {
    return (
        <div>
                <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
     
      </Swiper>
        </div>
    );
};

export default Swipper;