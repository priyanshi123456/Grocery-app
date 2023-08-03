import React from "react";
import Constants from "./api/Constants";
import { Link } from "react-router-dom";


function Product(props) {
  const { _id, productName, image, unit, price, mrp } = props.data;
  return (
   <>
      <div className="col-sm-4" style={{marginTop:"20px"}}>
        <div className="card" style={{height:"100%",padding:"20px"}}>
          <img style={{height:"100%"}}
            className="card-top-image"
            src={Constants.IMAGE_URL + image}
          />
          <div className="card-body" style={{height:"100%"}}>
            <h5 className="card-title">{productName}</h5>
            <p className="card-text">{unit}</p>
            <h2>
              <span>&#8377;</span>
              {price}
              <span
                style={{ fontSize: "22px", marginLeft: "10px", color: "#888"}}
              >
                <span>&#8377;</span>
                <del>{mrp}</del>
              </span>
            </h2>
            <Link to={'/products/details/' + _id} className="btn btn-primary btn-block">
              Show details
            </Link>
          </div>
        </div>
      </div>
      </>
  );
}

export default Product;
