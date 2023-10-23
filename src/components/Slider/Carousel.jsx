import Slider from "./Slider";
import Target from "../../../public/target2.svg";
import data from "./swiper_data";

const Carousel = () => {
  return (
    <section
      id="clients"
      className="text-gray-50 text-center p-5 sm:text-left lg:pt-10 lg:pb-10 lg:pr-10 lg:pl-10"
    >
      <h2 className="relative px-7 pt-5 mb-5 mt-5 inline-block font-libre-franklin text-2xl font-bold xxs:text-4xl sm:text-5xl sm:pl-0 sm:pr-10 sm:pt-8 lg:text-7xl lg:pr-14 lg:pt-12">
        <img
          src={Target}
          className="absolute top-0 right-0 max-w-[45px] sm:max-w-[60px] lg:max-w-[90px]"
        />
        RECORDINGS
      </h2>
      <p className="text-center mb-8 text-sm font-libre-basker sm:text-left sm:mb-14">
        Recorded, Mixed, or Mastered
      </p>
      <Slider records={data} />
    </section>
  );
};

export default Carousel;
