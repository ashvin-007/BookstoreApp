import Course from "./Componants/Courses/Course";
import Home from "./Componants/Home/Home";
import { BrowserRouter, Navigate, Route,  Routes } from 'react-router-dom'
import Signup from "./Componants/Signup";
import Contact from "./Componants/Contact";
import  { Toaster } from 'react-hot-toast';
import { useAuth } from "./Context/Authprovider";

function App() {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser)
  return (
    <>
      <div className="dark:bg-slate-900  dark:text-white">
        <BrowserRouter >
        <Routes>
          <Route  path="/" element={ <Home />}/>
          <Route  path="/course" element={authUser? <Course />:<Navigate to='/signup' />}/>
          <Route  path="/signup" element={ <Signup />}/>
          <Route  path="/contact" element={ <Contact />}/>

     


        </Routes>
        </BrowserRouter>
       
        <Toaster />
        
      </div>
    </>
  );
}

export default App;
