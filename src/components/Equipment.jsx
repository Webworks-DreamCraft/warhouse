import { useState } from "react";
import chain from "/largeChain.svg";
import instrument from "/instrument.png";
import amp from "/amp.png";
import target from "/target2.svg";
import upIcon from "/upIcon.svg";
import downIcon from "/downIcon.svg";

const Equipment = ({ instruments, ampsCabinets, errorMessage }) => {
  
  const [showMoreInstruments, setShowMoreInstruments] = useState(false);
  const [showMoreAmps, setShowMoreAmps] = useState(false);

  const [showAmps, setShowAmps] = useState(true);
  const [showCabs, setShowCabs] = useState(false);
  const [showDrums, setShowDrums] = useState(false);
  const [showGuitars, setShowGuitars] = useState(false);
  const [showPedals, setShowPedals] = useState(false);

  const [hoverAmps, sethoverAmps] = useState(true);
  const [hoverCabs, sethoverCabs] = useState(false);
  const [hoverDrums, sethoverDrums] = useState(false);
  const [hoverGuitars, sethoverGuitars] = useState(false);
  const [hoverPedals, sethoverPedals] = useState(false);

  const handleEquipmentToggle = (val, setVal) => {
    console.log('ran')
    setVal(!val)
  };

  const ampsCabinetsDisplay = ampsCabinets
    ? ampsCabinets.slice(0, 6).map((instrument, i) => (
        <section key={i} className="flex h-12 flex-row items-center">
          <img className="mt-4 mx-3 md:mr-3 md:mx-0" src="/unionForList.svg" />
          <p className="first:mt-0 last:mb-0 mt-3">{instrument}</p>
        </section>
      ))
    : null;

  const showMoreAmpsDisplay =
    ampsCabinets && showMoreAmps
      ? ampsCabinets.slice(6).map((instrument, i) => (
          <section key={i} className="flex h-12 flex-row items-center">
            <img
              className="mt-4 mx-3 md:mr-3 md:mx-0"
              src="/unionForList.svg"
            />
            <p className="first:mt-0 last:mb-0 mt-3">{instrument}</p>
          </section>
        ))
      : null;

  const instrumentsDisplay = instruments
    ? instruments.slice(0, 6).map((instrument, i) => (
        <section key={i} className="flex flex-row items-center">
          <img className="mt-4 mx-3 md:mr-3 md:mx-0" src="/unionForList.svg" />
          <p className="first:mt-0 last:mb-0 mt-3">{instrument}2</p>
        </section>
      ))
    : null;

  const showMoreInstrumentsDisplay =
    instruments && showMoreInstruments
      ? instruments.slice(6).map((instrument, i) => (
          <section key={i} className="flex flex-row items-center">
            <img
              className="mt-4 mx-3 md:mr-3 md:mx-0"
              src="/unionForList.svg"
            />
            <p className="first:mt-0 last:mb-0 mt-3">{instrument}</p>
          </section>
        ))
      : null;

  const showMoreAmpsButton = showMoreAmps ? null : (
    <button
      onClick={() => setShowMoreAmps(!showMoreAmps)}
      className="hover:border-warhouse-red text-xs font-libre-basker border-[1px] border-gray-50 rounded-sm py-1 md:py-2 px-[10px] md:px-3 md:ml-3"
    >
      Show All
    </button>
  )

  const showMoreInstrumentsButton = !instruments ? null : !(instruments.length > 6) ? null : (
    <button
      onClick={() => setShowMoreInstruments(!showMoreInstruments)}
      className="hover:border-warhouse-red text-xs font-libre-basker border-[1px] border-gray-50 rounded-sm py-1 px-[10px]"
    >
      Show All
    </button>
  )
  
  const arrowIcon = (state) => {
    return state ? 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z" clipRule="evenodd" />
          </svg> 
          :
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
          </svg>

  }
  return (
    <section id="gear" className="text-gray-50 flex justify-center items-center">
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
        <img className="my-2" src={chain} />

        <section className="flex flex-col md:flex-row md:w-full">
          <section className="w-full flex flex-col items-start md:items-start md:w-1/2">
            <section className="font-libre-basker text-xs mb-8 sm:w-9/12 cursor-pointer " onMouseLeave={() => sethoverAmps(!hoverAmps)}  onMouseEnter={() => sethoverAmps(!hoverAmps)} onClick={() => handleEquipmentToggle(showAmps, setShowAmps)}>
                {errorMessage}
              <h3 className={`text-2xl text-${showAmps ? 'warhouse-red' : ''} font-bold font-libre-franklin flex items-center hover:text-warhouse-red`}>
                Amps <span className="ml-2 mt-1">{arrowIcon(showAmps)}</span>
              </h3>
              <section className={`${showAmps ? 'mb-3' : 'hidden'}`}>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">Modded Marshall JCM900</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">Bad Cat Cub 40R</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">Peavey 5150 Signature</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                   <p className="first:mt-0 last:mb-0 mt-4">Mesa Dual Rectifier</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                   <p className="first:mt-0 last:mb-0 mt-4">Fender Bassman 100 Silverface</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">Marshall JCM2000</p>
                </section>
              </section>
            </section>
            
            <section className="font-libre-basker text-xs mb-8 sm:w-9/12 cursor-pointer" onMouseLeave={() => sethoverCabs(!hoverCabs)} onMouseEnter={() => sethoverAmps(!hoverCabs)} onClick={() => handleEquipmentToggle(showCabs, setShowCabs)}>
                {errorMessage}
              <h3 className={`text-2xl text-${showAmps ? 'warhouse-red' : ''} font-bold font-libre-franklin flex items-center hover:text-warhouse-red`}>
                Cabinets <span className="ml-2 mt-1">{arrowIcon(showCabs)}</span>
              </h3>
              <section className={`${showCabs ? 'mb-3' : 'hidden'}`}>
                <section className={'flex flex-row'}>
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">Mesa Oversized 412</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">Mesa Traditional 412</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">Framus Cobra 412</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                   <p className="first:mt-0 last:mb-0 mt-4">Fender Bassman 215</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                   <p className="first:mt-0 last:mb-0 mt-4">Ampeg 810e</p>
                </section>
              </section>
            </section>
            
            <section className="font-libre-basker text-xs mb-8 sm:w-9/12 cursor-pointer" onMouseLeave={() => sethoverDrums(!hoverDrums)} onMouseEnter={() => sethoverPedals(!hoverDrums)} onClick={() => handleEquipmentToggle(showDrums, setShowDrums)}>
                {errorMessage}
              <h3 className={`text-2xl text-${hoverPedals ? 'warhouse-red' : ''} font-bold font-libre-franklin flex items-center hover:text-warhouse-red`}>
                Drums <span className="ml-2 mt-1">{arrowIcon(showDrums)}</span>
              </h3>
              <section className={`${showDrums ? 'mb-3' : 'hidden'}`}>
                <section className={'flex flex-row'}>
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">Pearl Maple Masters Kit</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">22x18 Kick</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">12x9 Rack Tom</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                   <p className="first:mt-0 last:mb-0 mt-4">13x10 Rack Tom</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                   <p className="first:mt-0 last:mb-0 mt-4">14x14 Floor Tom</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">18x18 Floor Tom</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">14x6.5 Free Floating Snare</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">14x5 Ludwig Acrolyte</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">14x6 Pearl Steel Export Snare</p>
                </section>
              </section>
            </section>

            <section className="font-libre-basker text-xs mb-8 sm:w-9/12 cursor-pointer" onMouseLeave={() => sethoverGuitars(!hoverGuitars)} onMouseEnter={() => sethoverGuitars(!hoverGuitars)} onClick={() => handleEquipmentToggle(showGuitars, setShowGuitars)}>
                {errorMessage}
              <h3 className={`text-2xl text-${hoverGuitars ? 'warhouse-red' : ''} font-bold font-libre-franklin flex hover:text-warhouse-red`}>
                Guitars 
                <span className="ml-2 mt-1">{arrowIcon(showGuitars)}</span>
              </h3>
              <section className={`${showGuitars ? 'mb-3' : 'hidden'}`}>
                <section className={'flex flex-row'}>
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">LTD EC1000ET</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">Gibson Les Paul Studio</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">Charvel Pro-Mod</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                   <p className="first:mt-0 last:mb-0 mt-4">Fender Stratocaster</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                   <p className="first:mt-0 last:mb-0 mt-4">Peavey T60</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">BC Rich Wralock</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">FenderJazz Bass USA</p>
                </section>
                
              </section>
            </section>

            <section className="font-libre-basker text-xs mb-8 sm:w-9/12 cursor-pointer" onMouseLeave={() => sethoverPedals(!hoverPedals)} onMouseEnter={() => sethoverPedals(!hoverPedals)} onClick={() => handleEquipmentToggle(showPedals, setShowPedals)}>
                {errorMessage}
              <div>

              <h3 className={`text-2xl text-${hoverPedals ? 'warhouse-red' : ''} font-bold font-libre-franklin flex hover:text-warhouse-red`}>
                Pedals <span className="ml-2 mt-1">{arrowIcon(showPedals)}</span>
              </h3>

              </div>
              <section className={`${showPedals ? 'mb-3' : 'hidden'}`}>
                <section className={'flex flex-row'}>
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">Peterson Strobostomp</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">Gibson Les Paul Studio</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">Boss HM2 Heavy Metal</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                   <p className="first:mt-0 last:mb-0 mt-4">Behringer HM300 Heavy Metal</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                   <p className="first:mt-0 last:mb-0 mt-4">Source Audio EQ1</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">TC Electronic Sentry</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">Keeley Compressor</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">Boss Line Selector</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">Donner Boost Killer</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">Radial BigShot ABY</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">MXR 10 Band EQ</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">Tech21 Sansamp</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">JHS Modded Rat</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">Electrical Audio Experiments Longsword</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">Dead Air Feral</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">DOD Boneshaker</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">Blackout Effectors Fix'd Fuzz Deluxe</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">J Rockett The Dude</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">SNK Heartbreaker</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">Spooky Vibes Isosceles Boost</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">Eventide H9</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">Defects Range Boost</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">Fulltone OCD</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">Boss Super Overdrive</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">Ibanez Tubescreamer TS9</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">Ibanez JetDriver</p>
                </section>
                <section  className="flex flex-row">
                  <img
                    className="mt-4 mx-3 md:mr-3 md:mx-0"
                    src="/unionForList.svg"
                  />
                  <p className="first:mt-0 last:mb-0 mt-4">Digitech Deathmetal</p>
                </section>
              </section>
            </section>
            {showMoreInstrumentsButton}
          </section>
          <section className="md:w-1/2  mt-20">
            <img src={instrument} />
          </section>
        </section>

        <img className="my-2" src={chain} />
      </section>
    </section>
  );
};

export default Equipment;
