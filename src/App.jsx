import Bio from "./components/Bio";
import { useState } from 'react';
import { Transition } from "@headlessui/react";
import Navbar from './components/Navbar';
import NavModal from './components/NavModal';

const App = () => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <section className='bg-gray-950'>
      <Navbar isShowing={isShowing} setIsShowing={setIsShowing}/>
      <NavModal isShowing={isShowing} setIsShowing={setIsShowing}/>
      <div className="bg-gray-950">
        <div className="container mx-auto">
          <Bio />
        </div>
      </div>
    </section>
  );
};

export default App;
