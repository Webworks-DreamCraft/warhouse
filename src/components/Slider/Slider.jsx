import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "./Slider.css";

import "swiper/css";
import "swiper/css/bundle";

SwiperCore.use([Navigation, Pagination]);

const Slider = ({ records }) => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function watchWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", watchWidth);

    // Cleanup
    return () => {
      window.removeEventListener("resize", watchWidth);
    };
  }, []);

  const slides = windowWidth >= 768 ? 3.3 : 3;
  const space = windowWidth >= 1024 ? 45 : 10;

  return (
    <div className="slider-container">
      <Swiper
        spaceBetween={space}
        slidesPerView={slides}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        pagination={{ clickable: true, el: ".swiper-pagination" }}
      >
        {records.map((record) => (
          <SwiperSlide key={record.image}>
            <div className="swiper-slide-content">
              <a target="_blank" href={record.spotify}>
                <img
                  src={`/albums/${record.image}`}
                  alt={`${record.album} by ${record.artist}`}
                />
              </a>
              <p className="record--artist">{record.artist}</p>
              <p className="record--album">{record.album}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-functions">
        {/* Pagination section */}
        <div className="swiper-pagination" />

        {/* Custom navigation buttons section */}
        <div className="custom-swiper-navigation">
          <button className="custom-swiper-button-prev">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M20.25 12a.75.75 0 01-.75.75H6.31l5.47 5.47a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 111.06 1.06l-5.47 5.47H19.5a.75.75 0 01.75.75z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button className="custom-swiper-button-next">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
