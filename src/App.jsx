import Bio from "./components/Bio";
import Header from "./components/Header";
import { useState } from "react";
import Navbar from "./components/Navbar";
import NavModal from "./components/NavModal";

const App = () => {

  const [isModalShowing, setIsModalShowing] = useState(false);
  
  const openModal = () => {
    setIsModalShowing(!isModalShowing);
    document.body.classList.add('overflow-hidden');
  }

  const closeModal = () => {
    setIsModalShowing(!isModalShowing);
    document.body.classList.remove('overflow-hidden');
  }
  
  return (
    <>
      <Navbar openModal={openModal} />
      <NavModal isModalShowing={isModalShowing} closeModal={closeModal} />
      <div className="">
        <div className="container mx-auto bg-gray-950">
          <Header />
          <Bio />
        </div>
      </div>
    </>
  );
};

export default App;
