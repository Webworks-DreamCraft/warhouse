import { useEffect, useState } from "react";
import instrument from "/instrument.png";

const Equipment = () => {
  const [instruments, setInstruments] = useState();
  const [showMoreInstruments, setShowMoreInstruments] = useState(false);

  const [ampsCabinets, setAmpsCabinets] = useState();

  const API_URL =
    "https://sheets.googleapis.com/v4/spreadsheets/1BPi6agZ8LvgqIyPh9g1zKpA_zJYSp1TezKURX17CXkA/values/Sheet1?valueRenderOption=FORMATTED_VALUE&majorDimension=COLUMNS&key=AIzaSyCIVKqeabMp_apNVSoAX7QmP955srg93xA";

  useEffect(() => {
    const fetchGear = async () => {
      try {
        console.log(`hello from effect`);
        const response = await fetch(API_URL);
        console.log(response);
        const data = await response.json();
        console.log(data);
        if (response.ok) {
          setInstruments(data.values[0]);
          setAmpsCabinets(data.values[1]);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchGear();
  }, []);

  return (
    <section className="text-gray-50 flex justify-center items-center">
      <section className="w-11/12 md:w-full flex flex-col items-center">
        <h1>FEATURED</h1>
        <h1>EQUIPMENT</h1>
        <h2>Additional gear information is available upon request</h2>
        <h2>Amps and Cabinets</h2>
        <section className="flex flex-col md:flex-row items-center md:w-full">
          <section className="w-full flex flex-col my-6 items-center md:w-1/2">
            <h2 className="text-4xl font-bold font-libre-franklin mb-6">
              Instruments
            </h2>
            <section className="text-xs w-9/12">
              <ul className="columns-2 font-libre-basker mb-6 gap-y-6">
                {!instruments
                  ? null
                  : instruments.slice(0, 6).map((instrument) => {
                      return (
                        <li className="flex items-center p-2 mb-6 gap-x-3">
                          <img src="/unionForList.svg" />
                          {instrument}
                        </li>
                      );
                    })}
              </ul>
              <ul className="columns-2 font-libre-basker gap-y-6">
                {showMoreInstruments && instruments
                  ? instruments.slice(6).map((instrument) => {
                      return (
                        <li className="flex items-center mb-6 gap-x-3">
                          <img src="/unionForList.svg" />
                          {instrument}
                        </li>
                      );
                    })
                  : null}
              </ul>
            </section>
            <button
              onClick={() => setShowMoreInstruments(!showMoreInstruments)}
              className="hover:border-warhouse-red text-xs font-libre-basker border-[1px] border-gray-50 rounded-sm py-1 px-[10px]"
            >
              Show All
            </button>
          </section>
          <section className="md:w-1/2">
            <img src={instrument} />
          </section>
        </section>
      </section>
    </section>
  );
};

export default Equipment;

// see what api info looks like
// get full list
// map through items adding to counter, if counter === 6, stop
// view more adds +1 to counter, map lists all of the list

// https://sheets.googleapis.com/v4/spreadsheets/1BPi6agZ8LvgqIyPh9g1zKpA_zJYSp1TezKURX17CXkA/values/Sheet1?valueRenderOption=FORMATTED_VALUE&majorDimension=COLUMNS&key=AIzaSyCIVKqeabMp_apNVSoAX7QmP955srg93xA
