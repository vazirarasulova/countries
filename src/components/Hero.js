export const  Hero = ({setValue, setSelect}) => {
  return (
    <div className="hero row d-flex justify-content-between mx-1 mb-4">    

    
   
    <input type="text" name="name" placeholder="Search for a country…" arial-label="Search for a country" 
    className="form-control w-25 mt-3" 
    onKeyUp={(evt) => {
      if(evt.code === "Enter"){
        setValue(evt.target.value);
        evt.target.value = null;
      }
    }}/>
    
  
    
    
    <select onChange={(evt) => setSelect(evt.target.value)} className="form-select w-25 mt-3 text-center" defaultValue="">
    <option disabled value="">Filter by Region</option>
    <option className="text-center" value="Africa">Africa</option>
    <option className="text-center" value="America">America</option>
    <option className="text-center" value="Asia">Asia</option>
    <option className="text-center" value="Europe">Europe</option>
    <option className="text-center" value="Oceania">Oceania</option>
    </select>
    </div>
    
  

    )
  }
  
  export default Hero;