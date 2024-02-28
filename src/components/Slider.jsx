import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';

const Slider = () => {
    return (
        <Swiper
            slidesPerView={1}
            pagination={true}
            modules={[Pagination]}
            className="slider max-w-[380px]"
        >
            <SwiperSlide>
                <div className="text-white">
                    <h1 className="text-4xl font-semibold mb-6">Building the Future...</h1>
                    <p className="leading-7 font-extralight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="text-white">
                    <h1 className="text-4xl font-semibold mb-6">Building the Future...</h1>
                    <p className="leading-7 font-extralight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="text-white">
                    <h1 className="text-4xl font-semibold mb-6">Building the Future...</h1>
                    <p className="leading-7 font-extralight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}
export default Slider
