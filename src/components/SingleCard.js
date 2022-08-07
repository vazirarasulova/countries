import { useEffect, useState } from "react";
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";
import "./singleCard.css";

export const SingleCard = () => {
  const {name} = useParams();
  const navigate = useNavigate();

  const [country, setCountry] = useState({
    isLoading: true,
    isError: false,
    data: {}
  });

  useEffect(() => {
    axios
    .get(`https://restcountries.com/v3.1/name/${name}`)
    .then(function (response) {
      setCountry({
        isLoading: false,
        isError: false,
        data: response.data
      })
    })
    .catch(function (error) {
      setCountry({
        isLoading: false,
        isError: true,
        data: {}
      })
    })  
  }, [name])
  return(
   <div className="container py-5">
   
    {country.isLoading && <Loader/>}
   {country.isError && <h1>Error</h1>}
   {
    country.data.length && 
    <div >
       <button className="back-button" onClick={() => navigate (-1)}>{`back`}</button>
       
      {country.data.map(e => (
        <div key={e.name.common} className="wrapper">
           
          <div >
         
          <img  src={e.flags.svg} alt={e.name.official} className="image" width={560} height={401} />
          </div>
          <div>
            <h1 className="title mb-3">{e.name.common}</h1>
          <div className="row">
            <div className=" col-7 box ">
              <p className="text">Native name:{' '} <span className="subtext">{e.name.nativeName[Object.keys(e.name.nativeName)[0]].common}</span></p>
              <p className="text">Population: <span className="subtext">{e.population}</span></p>
              <p className="text">Region: <span className="subtext">{e.region}</span></p>
              <p className="text">Sub region: <span className="subtext">{e.subregion}</span></p>
              <p className="text">Capital: <span className="subtext">{e.capital}</span></p>
            </div>

            <div className="col-5 subbox">
            <p className="text">Top Level Domain: <span className="subtext">{e.tld}</span></p>
            <p className="text">Currencies: {' '} <span className="subtext">{e.currencies[Object.keys(e.currencies)].name}</span></p>
            <p className="text">Languages: <span className="subtext">{e.languages[Object.keys(e.languages)[0]]}</span></p>
            </div>
          </div>
          {e?.borders?.length && 
          <div>
            Border Countries: {" "}
            {e.borders.map((e) => (
              <button className="border-button" key={e}>{e}</button>
            ))}
            </div>}
          </div>
        </div>
      ))}
    </div>
   } 
   </div>
  )
}

export default SingleCard;