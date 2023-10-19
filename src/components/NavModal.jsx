import warhouseSVG from "/warhouselogo.svg";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";

const NavModal = ({ isShowing, setIsShowing }) => {
  return (
    <Transition.Root show={isShowing}>
      <SlideOverLayer>
        <div className="flex flex-row text-gray-50 justify-end py-4 border-b-2 border-b-slate-50 items-center">
          <svg
            onClick={() => setIsShowing(!isShowing)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="hover:fill-warhouse-red w-7 mx-6 my-1"
          >
            <path
              fill-rule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <section className=" flex flex-col items-center font-libre-basker">
          <section className="flex flex-col w-10/12 text-gray-50">
            <ul className="flex flex-col w-full  my-10 text-3xl list-inside">
              <a
                onClick={() => setIsShowing(!isShowing)}
                className="mx-2 my-8 hover:marker:text-warhouse-red border-b-2 py-1 border-b-gray-50"
                href="#about"
              >
                <li>About</li>
              </a>
              <a
                onClick={() => setIsShowing(!isShowing)}
                className="mx-2 my-8 hover:marker:text-warhouse-red border-b-2 py-1 border-b-gray-50"
                href="#location"
              >
                <li>Gear</li>
              </a>
              <a
                onClick={() => setIsShowing(!isShowing)}
                className="mx-2 my-8 hover:marker:text-warhouse-red border-b-2 py-1 border-b-gray-50"
                href="#portfolio"
              >
                <li>Clients</li>
              </a>
            </ul>
            <button 
              className="hover:text-warhouse-red hover:border-warhouse-red border-2 border-gray-50 text-gray-50 rounded-sm p-2"
              onClick={() => setIsShowing(!isShowing)}
            >
              Contact
            </button>
          </section>
          <a 
            href="#"
            onClick={() => setIsShowing(!isShowing)}
          >
            
            <img className="my-16 object-fit w-64" src={warhouseSVG} />
          </a>
        </section>
      </SlideOverLayer>
    </Transition.Root>
  );
};

export default NavModal;

const SlideOverLayer = ({ children }) => (
  <Transition.Child
    as={Fragment}
    enter="transform transition ease-in-out duration-500"
    enterFrom="translate-x-full"
    enterTo="translate-x-0"
    leave="transform transition ease-in-out duration-500 delay-100"
    leaveFrom="translate-x-0"
    leaveTo="translate-x-full"
  >
    <section className="fixed flex flex-col h-fit inset-0 overflow-hidden bg-gray-950">
      {children}
    </section>
  </Transition.Child>
);

