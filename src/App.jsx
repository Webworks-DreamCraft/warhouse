import Bio from "./components/Bio";
import { useState } from "react";
import Navbar from "./components/Navbar";
import NavModal from "./components/NavModal";

const App = () => {

  const [isShowing, setIsShowing] = useState(false);
  
  return (
    <>
      <Navbar isShowing={isShowing} setIsShowing={setIsShowing} />
      <NavModal isShowing={isShowing} setIsShowing={setIsShowing} />
      <div className="">
        <div className="container mx-auto bg-gray-950">
          <Bio />
        </div>
      </div>
    </>
  );
};

export default App;
