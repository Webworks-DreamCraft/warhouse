import Union from "./svg/Union";
import Circle from "./svg/Circle";
import headerImage1 from "/header1.png";
import headerImage2 from "/header2.png";

const Header = () => (
  <section className="flex flex-col items-center mt-5 mb-5 md:mb-20 text-gray-50">
    <section className="relative flex flex-col md:flex-row md:mt-8 items-center">
      <h1 className="text-8xl/[150px] sm:text-9xl/[150px] md:text-[115px] lg:text-[150px] xl:text-[210px] font-bold font-libre-franklin">
        WAR
      </h1>
      <Union width="36" height="35" classes="absolute mt-32 md:hidden" />
      <Union
        width="36"
        height="35"
        classes="hidden md:flex md:mt-2 lg:mt-6 xl:mt-8 xl:-ml-4"
      />
      <h1 className="text-8xl/[125px] sm:text-9xl/[150px] md:text-[115px] lg:text-[150px] xl:text-[210px] font-bold font-libre-franklin">
        HOUSE
      </h1>
    </section>
    <section className="flex flex-row font-libre-basker font-light justify-between w-1/2 lg:text-2xl xl:text-3xl  md:my-8">
      <p>Recording</p>
      <Circle width="40" height="40" classes="fill-gray-50 hidden lg:flex" />
      <Circle width="25" height="25" classes="fill-gray-50 lg:hidden" />
      <p>Mixing</p>
      <Circle width="40" height="40" classes="fill-gray-50 hidden lg:flex" />
      <Circle width="25" height="25" classes="fill-gray-50 lg:hidden" />
      <p>Mastering</p>
    </section>
    <a href="#contact">
      <button className="hover:border-warhouse-red hover:bg-warhouse-red hover:text-gray-50 font-libre-basker text-gray-950 border-2 border-gray-50 bg-gray-50 rounded-sm text-lg p-4 px-16 m-10 md:m-0 md:mb-8">
        Contact
      </button>
    </a>
    <section className="flex justify-between">
      <section>
        <img className="md:w-full" src={headerImage1} />
      </section>
      <section className="hidden md:flex w-10"></section>
      <section>
        <img className="hidden md:flex w-full" src={headerImage2} />
      </section>
    </section>
  </section>
);

export default Header;
