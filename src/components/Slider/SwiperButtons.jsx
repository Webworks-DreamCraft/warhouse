import { React } from "react";

import { useSwiper } from "swiper/react";

const SwiperButtons = () => {
  const swiper = useSwiper();

  return (
    <div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6 fill-gray-50"
        >
          <path d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" />
        </svg>
      </div>
      <div onClick={() => swiper.slideNext()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6 fill-gray-50"
        >
          <path d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" />
        </svg>
      </div>
      <button onClick={() => swiper.slidePrev()}>Previous</button>
      <button onClick={() => swiper.slideNext()}>Next</button>
    </div>
  );
};

export default SwiperButtons;
