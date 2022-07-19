import React from "react";
import "../styles/Navbar.css";

const Navbar = ({ setShow, size }) => {
  return (
      
        
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
    
  );
};

export default Navbar;