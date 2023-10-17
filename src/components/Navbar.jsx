const Navbar = () => {
  return (
    <div className='flex flex-row bg-gray-950 text-gray-50 justify-between py-3.5 border-b-2 border-b-slate-50 font-libre-basker items-center text-base'>
            <a href="#"><p className="mx-2">L.M.</p></a>
            <nav className="flex flex-row mx-10">

                <ul className="flex flex-row mx-2 list-disc list-outside items-center">
                    <a className="mx-2 hover:text-warhouse-red" href="#about"><li>About</li></a>
                    <a className="mx-2 ml-4 hover:text-warhouse-red" href="#location"><li>Gear</li></a>
                    <a className="mx-2 ml-4 hover:text-warhouse-red" href="#portfolio"><li>Clients</li></a>
                </ul>
                    <button className="hover:bg-warhouse-red hover:border-warhouse-red border-2 border-gray-50 p-1 px-6 mx-2">Contact</button>
            </nav>
        </div>
  )
}

export default Navbar;