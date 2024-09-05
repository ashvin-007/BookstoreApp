import Course from "./Componants/Courses/Course";
import Home from "./Componants/Home/Home";
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Signup from "./Componants/Signup";
import Contact from "./Componants/Contact";

function App() {
  return (
    <>
      <div className="dark:bg-slate-900  dark:text-white">
        <BrowserRouter >
        <Routes>
          <Route  path="/" element={ <Home />}/>
          <Route  path="/course" element={ <Course />}/>
          <Route  path="/signup" element={ <Signup />}/>
          <Route  path="/contact" element={ <Contact />}/>



        </Routes>
        </BrowserRouter>
       
       
        
      </div>
    </>
  );
}

export default App;
