import React, { useState , useEffect } from 'react'
import axios from 'axios';
import Product from './Product';
import Endpoint from './api/Endpoint';
import { useParams } from 'react-router-dom';

const Productlist = () => {
  const[products,setproducts] = useState([]);
  const {catId} = useParams();
 const fetch = ()=>{
  axios.get(Endpoint.PRODUCT_BY_CATID_URL + catId)
  .then(response=>setproducts(response.data.data))
  .catch(error =>console.log(error))
 }

 useEffect(()=>{
  fetch()
 },[catId])

  return (
    <div>
       <h2 className='text-center' style={{marginTop:"10px"}}>All Products</h2>
       <div class ="row">
       {products.map((product, index) => (
              <Product key={index} data={product} />
            ))}
       </div>      
    </div>
  )
}
export default Productlist
