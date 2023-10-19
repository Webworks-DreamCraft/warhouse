import Bio from "./components/Bio";
import Carousel from "./components/Carousel";

const App = () => {
  return (
    <>
      <h1 className="bg-slate-600">webworks</h1>
      <div className="bg-gray-950">
        <div className="container mx-auto">
          <Carousel />
          <Bio />
        </div>
      </div>
    </>
  );
};

export default App;
