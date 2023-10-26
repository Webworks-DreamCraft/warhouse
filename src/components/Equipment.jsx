import { useEffect, useState } from "react";
import chain from "/largeChain.svg"
import instrument from "/instrument.png";
import Chain from "./svg/Chain"
import amp from "/amp.png";
import target from "/target2.svg";

const Equipment = () => {
  const [instruments, setInstruments] = useState();
  const [showMoreInstruments, setShowMoreInstruments] = useState(false);

  const [ampsCabinets, setAmpsCabinets] = useState();
  const [showMoreAmps, setShowMoreAmps] = useState(false);

  const API_URL =
    `https://sheets.googleapis.com/v4/spreadsheets/1BPi6agZ8LvgqIyPh9g1zKpA_zJYSp1TezKURX17CXkA/values/Sheet1?valueRenderOption=FORMATTED_VALUE&majorDimension=COLUMNS&key=${import.meta.env.VITE_SHEETS_KEY}`;

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
      <section className="w-11/12 md:w-full flex flex-col items-center md:items-start">
      <h2 className="relative px-7 pt-5 mb-5 mt-5 inline-block font-libre-franklin text-2xl font-bold xxs:text-4xl sm:text-5xl sm:pl-0 sm:pr-10 sm:pt-8 lg:text-7xl lg:pr-14 lg:pt-12">
          <img
            src={target}
            className="absolute top-0 right-0 max-w-[45px] sm:max-w-[60px] lg:max-w-[90px]"
          />
        EQUIPMENT
      </h2>
        <h2 className="font-libre-basker text-center text-lg">
          Additional gear information is available upon request
        </h2>
        <img className="my-10" src={chain} />
        <section className="flex flex-col md:flex-row items-center md:w-full">
          <section className="w-full flex flex-col items-center md:items-start md:w-1/2">
            <h2 className="hidden md:block text-4xl font-bold font-libre-franklin mb-6">
              Amps and Cabinets
            </h2>
            <h2 className="md:hidden text-4xl font-bold font-libre-franklin">
              Amps and
            </h2>
            <h2 className="md:hidden text-4xl font-bold font-libre-franklin mb-6">
              Cabinets
            </h2>
            <section className="font-libre-basker text-xs mb-8 sm:w-9/12">
              <section className=" columns-2 ">
                {!ampsCabinets
                  ? null
                  : ampsCabinets.slice(0, 6).map((instrument) => {
                      return (
                        <section className="flex h-12 flex-row items-center">
                          <img className="mt-4 mx-3 md:mr-3 md:mx-0" src="/unionForList.svg" />
                          <p className="first:mt-0 last:mb-0 mt-3">
                            {instrument}
                          </p>
                        </section>
                      );
                    })}
              </section>
              <section className="mb-3 columns-2 ">
                {showMoreAmps && ampsCabinets
                  ? ampsCabinets.slice(6).map((instrument) => {
                      return (
                        <section className="flex h-12 flex-row items-center">
                          <img className="mt-4 mx-3 md:mr-3 md:mx-0" src="/unionForList.svg" />
                          <p className="first:mt-0 last:mb-0 mt-3">
                            {instrument}
                          </p>
                        </section>
                      );
                    })
                  : null}
              </section>
            </section>
            {showMoreAmps ? null : (
              <button
                onClick={() => setShowMoreAmps(!showMoreAmps)}
                className="hover:border-warhouse-red text-xs font-libre-basker border-[1px] border-gray-50 rounded-sm py-1 md:py-2 px-[10px] md:px-3 md:ml-3"
              >
                Show All
              </button>
            )}
          </section>
          <section className="md:w-1/2">
            <img src={amp} />
          </section>
        </section>
        <img className="my-10" src={chain} />
        <section className="flex flex-col md:flex-row items-center md:w-full">
          <section className="w-full flex flex-col items-center md:items-start md:w-1/2">
            <h2 className="text-4xl font-bold font-libre-franklin mb-6">
              Instruments
            </h2>
            <section className="font-libre-basker text-xs mb-8 sm:w-9/12">
              <section className="columns-2 ">
                {!instruments
                  ? null
                  : instruments.slice(0, 6).map((instrument) => {
                      return (
                        <section className="flex flex-row items-center">
                          <img className="mt-4 mx-3 md:mr-3 md:mx-0" src="/unionForList.svg" />
                          <p className="first:mt-0 last:mb-0 mt-3">
                            {instrument}2
                          </p>
                        </section>
                      );
                    })}
              </section>
              <section className="mb-3 columns-2 ">
                {showMoreInstruments && instruments
                  ? instruments.slice(6).map((instrument) => {
                      return (
                        <section className="flex flex-row items-center">
                          <img className="mt-4 mx-3 md:mr-3 md:mx-0" src="/unionForList.svg" />
                          <p className="first:mt-0 last:mb-0 mt-3">
                            {instrument}
                          </p>
                        </section>
                      );
                    })
                  : null}
              </section>
            </section>
            {!instruments ? null : !(instruments.length > 6) ? null : (
              <button
                onClick={() => setShowMoreInstruments(!showMoreInstruments)}
                className="hover:border-warhouse-red text-xs font-libre-basker border-[1px] border-gray-50 rounded-sm py-1 px-[10px]"
              >
                Show All
              </button>
            )}
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
