import React from "react"
import { BrowserRouter, Route , Routes} from "react-router-dom"
import App from "../App";
import About from "../pages/About";
import SignIn from "../pages/Auth/SignIn";
import Dashboard from "../pages/Dashboard";
import Header from "./Header";
import Footer from "./Footer";


const PageRoutes = () => {

  return <BrowserRouter>
      
        <Header/>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      <Footer/>
    </BrowserRouter>;

}


export default PageRoutes