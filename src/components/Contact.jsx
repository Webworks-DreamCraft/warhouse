import Target from "/target2.svg";
import LargeLogo from "/logo_large.png";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="box-border contact--container">
      <div className="mx-auto p-4 text-center sm:text-left sm:flex sm:items-center md:container">
        <div className="sm:w-5/8">
          <h2 className="relative text-warhouse-gray px-7 pt-5 mb-5 mt-5 inline-block font-libre-franklin text-2xl font-bold xxs:text-4xl sm:text-5xl sm:pl-0 sm:pr-10 sm:pt-8 lg:text-7xl lg:pr-14 lg:pt-12">
            <img
              src={Target}
              className="absolute top-0 right-0 max-w-[45px] sm:max-w-[60px] lg:max-w-[90px]"
            />
            REACH OUT
          </h2>
          <div className="text-center sm:text-left md:pr-10">
            <p className="font-libre-basker text-warhouse-gray mb-8">
              Email is my preferred method of contact, Feel free to send any
              questions to my email below.
            </p>
            <p className="font-libre-basker mb-10 text-sm sm:text-lg">
              Warhouserecordings@gmail.com
            </p>
          </div>
        </div>
        <div className="px-4 sm:w-3/8">
          <img src={LargeLogo} className="w-full max-w-[450px] mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
