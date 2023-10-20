import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import SwiperCore from "swiper";

import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Pagination]);

const Slider = ({ records }) => {
  const [swiper, setSwiper] = useState(null);

  return (
    <div>
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {records.map((record) => (
          <SwiperSlide key={record.image}>
            <img
              src={`../../public/albums/${record.image}`}
              alt={`${record.album} by ${record.artist}`}
            />
            <p>{record.artist}</p>
            <p>{record.album}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
