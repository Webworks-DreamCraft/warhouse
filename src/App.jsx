import Bio from "./components/Bio";
import { useState } from "react";
import Navbar from "./components/Navbar";
import NavModal from "./components/NavModal";

const App = () => {

  const [isModalShowing, setIsModalShowing] = useState(false);
  
  return (
    <>
      <Navbar isModalShowing={isModalShowing} setIsModalShowing={setIsModalShowing} />
      <NavModal isModalShowing={isModalShowing} setIsModalShowing={setIsModalShowing} />
      <div className="">
        <div className="container mx-auto bg-gray-950">
          <Bio />
        </div>
      </div>
    </>
  );
};

export default App;
