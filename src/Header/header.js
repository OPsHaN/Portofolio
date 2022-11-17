import React from 'react'
import './header.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
export default class Header extends React.Component {

constructor(){

    super();
}

render() {
    return <div className= "page  d-f align-items-center justify-content-center">
    <div className="row bg py-0"  >
    <div className="col-6 my-5 p-5 d-flex flex-column text-center" style={{color:"white"}}>
        <h1 className="mx-3 my-3">Mostafa Ramadan</h1>
        <h3 className="mx-3 my-3">Front End Developer</h3>
        <div className="d-flex align-items-center justify-content-center py-3">
        <button class="btn btn-light " type="button">Contact Me</button>
    </div></div>
    <div class="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder p-0">
    <img src="images/pro.png"   height="400" title="" alt=""/>
    </div>
</div> 
</div> 

}

}