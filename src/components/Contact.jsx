import Target from "/target2.svg";
import LargeLogo from "/logo_large.png";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="box-border contact--container">
      <div className="mx-auto p-10 sm:flex sm:items-center md:container">
        <div className="sm:w-5/8">
          <h2 className="relative text-gray-400 px-7 pt-5 mb-5 inline-block font-libre-franklin text-2xl font-bold xxs:text-4xl sm:text-7xl sm:pl-0 sm:pr-14 sm:pt-11">
            <img
              src={Target}
              className="absolute top-0 right-0 max-w-[45px] sm:max-w-[90px]"
            />
            REACH OUT
          </h2>
          <p className="font-libre-basker">
            Email is my preferred method of contact, Feel free to send any
            questions to my email below.
          </p>
          <p className="font-libre-basker">Warhouserecordings@gmail.com</p>
        </div>
        <div className="sm:w-3/8">
          <img src={LargeLogo} className="max-w-[450px]" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
