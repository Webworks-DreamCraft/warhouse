import { useState, useEffect } from "react";
import Bio from "./components/Bio";
import Header from "./components/Header";
import Spotify from "./components/Spotify";
import Navbar from "./components/Navbar";
import NavModal from "./components/NavModal";
import Equipment from "./components/Equipment";
import Carousel from "./components/Slider/Carousel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {

  const [instruments, setInstruments] = useState();
  const [ampsCabinets, setAmpsCabinets] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [isModalShowing, setIsModalShowing] = useState(false);

  const API_URL = `https://sheets.googleapis.com/v4/spreadsheets/${
    import.meta.env.VITE_WARHOUND_SHEETS_ID
  }/values/Sheet1?valueRenderOption=FORMATTED_VALUE&majorDimension=COLUMNS&key=${
    import.meta.env.VITE_WARHOUND_SHEETS_KEY
  }`;

  useEffect(() => {
    const fetchGear = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        if (response.ok) {
          setInstruments(data.values[0]);
          setAmpsCabinets(data.values[1]);
          setErrorMessage(null);
        } else {
        setErrorMessage("Something went wrong retrieving the list");
        }
      } catch (err) {
        setErrorMessage("Something went wrong retrieving the list");
      }
    };
    fetchGear();
  }, []);

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
          <Equipment instruments={instruments} ampsCabinets={ampsCabinets} errorMessage={errorMessage}/>
          <Bio />
        </div>
        <div>
          <Contact />
        </div>
        <div className="md:container mx-auto bg-gray-950">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
