import React from 'react'
import Constants from './api/Constants';
import { Link } from 'react-router-dom';

const Category = (props) => {

    const {catId,catName,catImage} = props.data;   
  return (
  <div className="col-sm-3">
    <div className="card" style={{padding:"20px" , height:"100%"}}>
      <img className='card-top-image' src={Constants.IMAGE_URL +catImage} />
      <div className="card-body">
        <h5 className="card-title">{catName}</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <Link to={'/products/' + catId}  class="btn btn-dark" style={{width:"80%"}}>Select</Link>
      </div>
    </div>
  </div>
      
  )
}

export default Category
