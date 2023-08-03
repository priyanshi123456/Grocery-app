import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Endpoint from "./api/Endpoint";
import { useParams } from "react-router-dom";

const Subcatogory = () => {
  const {catId} = useParams();
  const [subcatogory, setsubcat] = useState([]);
  const fetchdata = () => {
    axios
      .get(Endpoint.SUB_CATEGORY_URL + catId)
      .then((response) => {
        console.log(response.data.data);
        setsubcat(response.data.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchdata();
  }, [catId]);

  return (
    <div>
      <div className="text-center">
        <h2  style={{marginTop:"10px"}}>Subcatogories</h2>
      </div>
      <ul  style={{marginTop:"30px"}} class="list-group">
        {subcatogory.map((subcat, index) => (
          <li class="list-group-item" key={index}>
            {subcat.subName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Subcatogory;
