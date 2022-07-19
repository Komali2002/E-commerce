import React,{ useState } from 'react';
import {Routes, Route, NavLink, Navigate } from 'react-router-dom'
import Home from './components/Home'
import Address from './components/Address'
import Contactus from './components/Contactus'
import Technologies from './components/Technologies'
import Javascript from './components/Javascript'
import Html from './components/Html'
import Signup from './components/Signup'
import Cart from './components/Cart'
import Explore from './components/Explore'
import More from './components/More'
import More1 from './components/More1'
import Orders from './components/Orders';
import {FcLinux} from 'react-icons/fc'
import Login from './components/Login'
import {BsFillCartFill} from 'react-icons/Bs'
import { IconContext } from "react-icons";
import Amazon from "./components/Amazon";
import Navbar from "./components/Navbar";
function App(){
return (
    
    <div>
    <div className='content-wrap'>
      {/* links to routes */}
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">

        <li className="nav-item">
        
                <NavLink className="nav-link text-warning text-capitalize mb-2 mt-0" to="Home" ><FcLinux/>Shop Easy</NavLink>
              </li>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              
              <li className="nav-item">
                <NavLink className="nav-link " to="Address" >Address</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="contactus" >Contactus</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="Signup" >Sign up</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="Login" >Login</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="Orders">Your Orders</NavLink>
              </li>
              
              
              
              

            </ul>

          </div>
        </div>
      </nav>
      
      {/* define routes for its children */}
      <Routes>
        {/* route for Home component */}
        <Route path="/Home" element={<Home />} />
        {/* route for formAddressForm component */}
        <Route path="/Address" element={<Address/>} />
        {/* route for Contactus component */}
        <Route path="/Contactus" element={<Contactus />} />
        {/* route for login component*/ }
        <Route path="/Login" element={<Login />} />
        <Route path="/Orders" element={<Orders />} />
        {/* route for Signup component */}
        <Route path="/Signup" element={<Signup />} />
         {/* route for Cartcomponent */}
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="More" element={<More />} />
        <Route path="More1" element={<More1 />} />
        {/* route for Technologies component */}
        <Route path="/technologies" element={<Technologies />} >
          {/* defines routes for nested components */}
          <Route path="html" element={<Html />} />
          
         
          {/* redirect to HTML by default */}
          <Route path="" element={<Navigate replace to="html" />} />
          <Route path="javascript" element={<Javascript />} />
          
        </Route>
      </Routes>


    </div>
   
  </div>



  );
}

export default App;