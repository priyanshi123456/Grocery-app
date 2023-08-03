import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Category from "./Category";
import Endpoint from "./api/Endpoint";

const Categories = () => {
  const [categories, setcat] = useState([]);

  const fetchdata = () => {
    axios
      .get(Endpoint.CATEGORY_URL)
      .then((response) => {
        setcat(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      <h1 className="text-center" style={{color:"black"}}>Categories</h1>

      <div className="container">
        <div className="text-center">
          <br />
          <div className="row">
            {categories.map((category, index) => (
              <Category key={index} data={category} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
