import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "./Slider.css";
import SwiperButtons from "./SwiperButtons";

import "swiper/css";
import "swiper/css/bundle";

SwiperCore.use([Pagination, Navigation]);

const Slider = ({ records }) => {
  return (
    <div>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        pagination={{ clickable: true, el: ".swiper-pagination" }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {records.map((record) => (
          <SwiperSlide key={record.image}>
            <div>
              <img
                src={`../../public/albums/${record.image}`}
                alt={`${record.album} by ${record.artist}`}
              />
              <p>{record.artist}</p>
              <p>{record.album}</p>
            </div>
          </SwiperSlide>
        ))}
        {/* <SwiperButtons /> */}
      </Swiper>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default Slider;
