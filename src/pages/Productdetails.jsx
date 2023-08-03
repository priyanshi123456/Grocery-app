import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Endpoint from "../components/api/Endpoint";
import Constants from "../components/api/Constants";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtocart } from '../Redux/actions/Cart-action'

function Productdetails() {

  const dispatch = useDispatch();
  const {id}= useParams();
  const [product, setproduct] = useState({});
  const fetch = () => {
    axios
      .get(Endpoint.PRODUCT_BY_ID_URL + id)
      .then((response) => setproduct(response.data.data))
      .catch((response) => console.log(response));
  };

  useEffect(() => {
    fetch();
  }, [id]);

  const onclickhandle = ()=>{
    dispatch(addtocart(product))
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="wrapper">
          <div className="row">
            <div className="col-md-6">
              <img
                src={Constants.IMAGE_URL + product.image}
                className="img-fluid"
              ></img>
            </div>
            <div className="col-md-6">
              <h5>{product.productName}</h5>
              <p>{product.unit}</p>
              <p>{product.description}</p>
              <h2>
                <span>&#8377;</span>
                {product.price}
                <span className="mrp">
                  <del>
                    <span>&#8377;</span>
                    {product.mrp}
                  </del>
                </span>
              </h2>
              <button onClick={onclickhandle} className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productdetails;
