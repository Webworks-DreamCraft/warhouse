import { useState } from 'react';
import Navbar from './components/Navbar';

const App = () => {
  const [modal, setModal] = useState(false);
  return (
    <section className='bg-gray-950'>
      <Navbar />
      <h1 className="bg-gray-950 text-gray-50">webworks</h1>
    </section>
  )
}

export default App
