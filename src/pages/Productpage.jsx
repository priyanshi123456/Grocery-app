import React from "react";
import Subcatogory from "../components/Subcatogory";
import Productlist from "../components/Productlist";
import Navbar from "../components/Navbar";

const Productpage = () => {
  return (
    <>
    <Navbar/>
    <div className="container">
        <div className="row">
            <div className="col-md-3">
                <Subcatogory/>
            </div>
            <div className="col-md-9">
                <Productlist/>
            </div>
        </div>
    </div>   
    </>
  )
}

export default Productpage;
