import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';


const Navbar = () => {

  const navigate = useNavigate();
  const [loginstatus,setloginstatus] = useState(false);

  useEffect(()=>{
    let token = localStorage.getItem('token')
    if(!token){
      setloginstatus(false)
    }else{
      setloginstatus(true)

    }
  },[loginstatus])

  const handlelogout = ()=>{
    localStorage.clear()
    setloginstatus(false)
    navigate('/login')
  }



  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          GroceryApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item active">
              <Link className="nav-link" to="/about">
                About us
              </Link>
            </li>

            <li className="nav-item active">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="form-inline my-2 my-lg-0">
            {loginstatus ? (
              <Link className="btn btn-danger" onClick={handlelogout}>
                Logout
              </Link>):(
                  <Link  class="btn btn-light" to='./login'>
                    Login
                </Link>
              )
            }
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
