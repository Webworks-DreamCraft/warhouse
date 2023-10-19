const NavModal = () => {
  return (
    <>
      <section className="text-gray-50">
        <ul className="flex flex-row mx-10 list-outside items-center">
          <a className="mx-2 hover:marker:text-warhouse-red" href="#about">
            <li>About</li>
          </a>
          <a className="mx-2 ml-10 hover:marker:text-warhouse-red" href="#location">
            <li>Gear</li>
          </a>
          <a
            className="mx-2 ml-10 hover:marker:text-warhouse-red"
            href="#portfolio"
          >
            <li>Clients</li>
          </a>
        </ul>
      </section>
      <section className="flex text-gray-50">
        <button className="hover:text-warhouse-red hover:border-warhouse-red border-2 border-gray-50 rounded-sm p-2 px-6 mx-2">
          Contact
        </button>
      </section>
    </>
  );
};

export default NavModal;
