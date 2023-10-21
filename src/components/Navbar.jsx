import WarhouseLogo from "./WarhouseLogo";

const Navbar = ({ isModalShowing, setIsModalShowing }) => {

  const openModal = () => {
    setIsModalShowing(!isModalShowing);
    document.body.classList.add('overflow-hidden');
  }

  return (
    <section className="flex flex-row sticky top-0 bg-gray-950 text-gray-50 justify-between py-2 border-b-2 border-b-slate-50 antialiased font-libre-basker items-center text-base z-10">
      <a href="#">
        <WarhouseLogo width="57" height="52" classes="ml-10 hover:fill-warhouse-red fill-slate-50"/> 
      </a>
      <nav className="flex sm:flex-row mx-10 items-center">
        {/* Hamburger */}
        <svg
          onClick={openModal}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="sm:hidden fill-gray-50 hover:fill-warhouse-red w-7"
        >
          <path
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
          />
        </svg>

        <ul className="hidden sm:flex sm:flex-row mx-10 list-outside items-center">
          <a className="mx-2 hover:marker:text-warhouse-red" href="#about">
            <li>About</li>
          </a>
          <a className="mx-2 ml-10 hover:marker:text-warhouse-red" href="#location">
            <li>Gear</li>
          </a>
          <a className="mx-2 ml-10 hover:marker:text-warhouse-red" href="#portfolio">
            <li>Clients</li>
          </a>
        </ul>
        <section className="hidden sm:flex">
          <button className="hover:border-warhouse-red border-2 border-gray-50 rounded-sm p-2 px-6 mx-2">
            Contact
          </button>
        </section>
      </nav>
    </section>
  );
};

export default Navbar;
