import SmallLogo from "/logo_small_white.png";
import Chain from "/large_chain_white.png";

const Footer = () => {
  return (
    <footer className="text-gray-50 pt-3 pb-3 sm:pt-6 sm:pb-6">
      <div className="flex items-center justify-around md:justify-between">
        <div className="text-center md:w-1/3">
          <p className="font-libre-franklin font-bold text-xs">Email</p>
          <p className="font-libre-basker text-[10px] pb-2">
            <a
              href="mailto:username@example.com"
              target="_blank"
              className="hover:text-warhouse-red"
            >
              warhouserecording@gmail.com
            </a>
          </p>
        </div>
        <div className="hidden md:block md:w-1/3">
          <ul className="font-libre-franklin text-xs flex list-none justify-around max-w-[190px] mx-auto sm:pb-1">
            <li>
              <a href="#about" className="hover:text-warhouse-red">
                About
              </a>
            </li>
            <li>
              <a href="#gear" className="hover:text-warhouse-red">
                Gear
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-warhouse-red">
                Contact
              </a>
            </li>
            <li>
              <a href="#clients" className="hover:text-warhouse-red">
                Clients
              </a>
            </li>
          </ul>
          <img src={Chain} className="mx-auto sm:pb-1 max-w-[210px]" />
          <p className="font-libre-basker text-center text-[10px]">
            2023 War House. All Rights Reserved.
          </p>
        </div>
        <div className="md:w-1/3">
          <a href="#">
            <img src={SmallLogo} className="max-w-[85px] mx-auto" />
          </a>
        </div>
      </div>
      <div className="md:hidden">
        <img src={Chain} className="max-w-[75%] mx-auto" />
        <p className="font-libre-basker text-center text-[10px]">
          2023 War House. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
