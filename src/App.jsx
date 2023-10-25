import Bio from "./components/Bio";
import Header from "./components/Header";
import Spotify from "./components/Spotify";
import { useState } from "react";
import Navbar from "./components/Navbar";
import NavModal from "./components/NavModal";
import Equipment from "./components/Equipment";
import Carousel from "./components/Slider/Carousel";

const App = () => {
  const [isModalShowing, setIsModalShowing] = useState(false);

  const openModal = () => {
    setIsModalShowing(!isModalShowing);
    document.body.classList.add("overflow-hidden");
  };

  const closeModal = () => {
    setIsModalShowing(!isModalShowing);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <>
      <Navbar openModal={openModal} />
      <NavModal isModalShowing={isModalShowing} closeModal={closeModal} />
      <div className="">
        <div className="md:container mx-auto bg-gray-950">
          <Header />
          <Carousel />
          <Spotify />
          <Equipment />
          <Bio />
        </div>
      </div>
    </>
  );
};

export default App;
