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
      <h1 className="bg-gray-950 text-gray-50">webworks</h1>
    </section>
  )
}

export default App
