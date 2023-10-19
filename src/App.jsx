import { useState } from 'react';
import Navbar from './components/Navbar';
import NavModal from './components/NavModal';

const App = () => {
  const [modal, setModal] = useState(false);
  return (
    <section className='bg-gray-950'>
      <Navbar modal={modal} setModal={setModal}/>
      {modal ? <NavModal /> : null}
      <h1 className="bg-gray-950 text-gray-50">webworks</h1>
    </section>
  )
}

export default App
