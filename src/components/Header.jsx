import React from 'react'

const Header = () => {
  return (
    <>
    <div className="jumbotron text-center" style={{backgroundColor:"#3b444b"}}> 
  <h1 className="display-4" style={{color:"white"}}>Hello, world!</h1>
  <p className="lead" style={{color:"white"}}>Welcome to Grocer App your one stop shop for all your grocery need.</p>
  <hr className="my-4" style={{color:"white"}}></hr>
  <p className="lead">
    <a class="btn btn-light" href="#" role="button">Start Shopping</a>
  </p>
</div>
</>
  );
}

export default Header
