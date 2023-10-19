import JohnGuitar from "../../public/jh_guitar.png";
import Target from "../../public/target2.svg";

const Bio = () => {
  return (
    <div className="box-border mx-auto text-gray-50 font-libre-basker container pt-5 pb-5 px-5 sm:flex sm:justify-between lg:pt-10 lg:pb-10 lg:pr-10 lg:pl-10">
      <div className="sm:w-[48%] text-center sm:text-left">
        <h2 className="relative px-10 pt-7 mb-5 inline-block font-libre-franklin text-5xl font-bold sm:text-7xl sm:pl-0 sm:pr-14 sm:pt-12">
          <img
            src={Target}
            className="absolute top-0 right-0 max-w-[55px] sm:max-w-[90px]"
          />
          ABOUT
        </h2>
        <p className="text-center mb-8 text-lg sm:text-left sm:text-sm sm:mb-4">
          John Howard: Sound Engineer
        </p>
        <p className="text-center mb-3 text-sm leading-[1.35rem] sm:text-left">
          Welcome to War House Recordings, where John Howard doesn't give a damn
          about your pretentious crap. Located in the backwoods of Gainesville,
          Florida, our studio is where we reluctantly handle mixing, mastering,
          and recording, even though we'd rather be doing something else.
          <br />
          <br />
          Whether it's the obnoxious screams of hardcore or the mind-numbing
          monotony of shoegaze, we've somehow endured working with a motley crew
          of artists. Don't expect any sugar-coated compliments here. At War
          House Recordings, it's all about surviving your insufferable music and
          maybe, just maybe, making it sound halfway decent.
        </p>
      </div>
      <div className="sm:w-[48%] pb-10 sm:pb-0 sm:flex items-center">
        <img
          src={JohnGuitar}
          className="w-2/3 m-auto sm:w-full sm:max-w-[500px] sm:m-0"
        />
      </div>
    </div>
  );
};

export default Bio;
