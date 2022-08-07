import Home from "./components/Home";
import { Routes, Route} from "react-router-dom";
import {SingleCard} from "./components/SingleCard";
function App() {

       return(
        <>
        <Routes>
          <Route path='/' element={<Home/>}/>
           <Route path='/single/:name' element={<SingleCard/>}/> 
        </Routes>
        
      

        </>
       )   
        }
        
        export default App;
        