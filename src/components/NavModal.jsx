const NavModal = () => {
  return (
    <section className="flex flex-col items-center font-libre-basker">
      <section className="flex flex-col w-10/12 text-gray-50">
        <ul className="flex flex-col w-full  my-10 text-3xl list-inside">
          <a className="mx-2 my-6 hover:marker:text-warhouse-red border-b-2 py-1 border-b-gray-50" href="#about">
            <li>About</li>
          </a>
          <a className="mx-2 my-6 hover:marker:text-warhouse-red border-b-2 py-1 border-b-gray-50" href="#location">
            <li>Gear</li>
          </a>
          <a
            className="mx-2 my-6 hover:marker:text-warhouse-red border-b-2 py-1 border-b-gray-50"
            href="#portfolio"
          >
            <li>Clients</li>
          </a>
        </ul>
        <button className="hover:text-warhouse-red hover:border-warhouse-red border-2 border-gray-50 text-gray-50 rounded-sm p-2">
          Contact
        </button>
      </section>
    </section>
  );
};

export default NavModal;
