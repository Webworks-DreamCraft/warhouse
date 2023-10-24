import { useEffect, useState } from "react"

const Equipment = () => {

  const [instruments, setInstruments] = useState();
  const [ampsCabinets, setAmpsCabinets] = useState();

  const API_URL = "https://sheets.googleapis.com/v4/spreadsheets/1BPi6agZ8LvgqIyPh9g1zKpA_zJYSp1TezKURX17CXkA/values/Sheet1?valueRenderOption=FORMATTED_VALUE&majorDimension=COLUMNS&key=AIzaSyCIVKqeabMp_apNVSoAX7QmP955srg93xA"

  useEffect(() => {
    const fetchGear = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data)
      if (response.ok) {
        setInstruments(data.values[0]);
        setAmpsCabinets(data.values[1]);
      }
    }
    fetchGear();
  }, [])

  return (
    <section className="text-gray-50">
      <h1>FEATURED</h1>
      <h1>EQUIPMENT</h1>
      <h2>Additional gear information is available upon request</h2>
      <h2>Amps and Cabinets</h2>
      <h2>Instruments</h2>
      <ul className="list-image-[url(/unionForList.svg)] columns-2">

        {!instruments 
          ? null :
          instruments.map(instrument => (
            <li>{instrument}</li>
          ))
        }
      </ul>
    </section>
  )
}

export default Equipment;

// see what api info looks like
// get full list
// map through items adding to counter, if counter === 6, stop
// view more adds +1 to counter, map lists all of the list

// https://sheets.googleapis.com/v4/spreadsheets/1BPi6agZ8LvgqIyPh9g1zKpA_zJYSp1TezKURX17CXkA/values/Sheet1?valueRenderOption=FORMATTED_VALUE&majorDimension=COLUMNS&key=AIzaSyCIVKqeabMp_apNVSoAX7QmP955srg93xA