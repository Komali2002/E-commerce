import React from "react";
import "./Header.css";
import {Navbar , Nav, Container ,Button ,Form  } from "react-bootstrap";
import {Link , NavLink, Route , Routes, useNavigate} from 'react-router-dom';
import { TiWeatherPartlySunny } from "react-icons/ti";
import { useSelector } from "react-redux";
import { clearLoginStatus } from "../slices/userSlice";
import { useDispatch } from "react-redux";

function Header(){

    let navigate=useNavigate();

    let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector(
      (state) => state.user
    );
    //get dispathc function
    let dispath = useDispatch();
  
  
    //logout user
    const userLogout = () => {
      localStorage.clear();
      dispath(clearLoginStatus());
      navigate("/login");
    };

    return (
        <div>
            <Navbar bg="light"  expand="lg">
        <Container fluid>
          <Navbar.Brand href="/"><TiWeatherPartlySunny size={32}/><b>Weather Forecast </b></Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={NavLink}  to="/">HOME</Nav.Link>
              <Nav.Link as={NavLink}  to="aboutus">ABOUT US</Nav.Link>
              <Nav.Link as={NavLink}   to="faqs">FAQ's</Nav.Link>
              <Nav.Link as={NavLink}   to="contactus">CONTACT US</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            {isSuccess !== true ? (
                <>
            <Button className='m-2' variant="outline-primary" onClick={() => navigate('/login')}>Signin/Signup</Button>
              </>):
              (
                <Button className='m-2' variant="outline-primary" onClick={userLogout}>
                      Logout
                      </Button>
              )
}
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    );
}

export default Header;



