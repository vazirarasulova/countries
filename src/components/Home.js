import Header from "./Header";
import Card from "./Card";
import Hero from "./Hero"
import { useEffect, useState } from "react";
import Loader from "./Loader";

const Home = () => {
  
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [select, setSelect] = useState("");
  
  
  
  useEffect(() => {
    if (value.length) {
      fetch(`https://restcountries.com/v3.1/name/${value}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
    } else if (select.length){
      fetch(`https://restcountries.com/v3.1/region/${select}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
    }else {
      fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setData(data))
      
      .catch((error) => console.log(error));
    }
  }, [value, select]);
  
  
  
  return (
    
    <div className="container">
    <Header/>
    <Hero setValue={setValue} setSelect={setSelect} />
    
    <div className="row mt-2">
    {
      data.length ? ( data.map( e =>( < Card key={e.name.common} item={e} /> ) )) : ( <Loader/>)
    }
    </div>
    
    </div>
    )
    
    
  }
  
  export default Home;