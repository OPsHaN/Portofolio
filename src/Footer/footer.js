import React from 'react'
import './footer.css';
export default class Footer extends React.Component {

render () {
    return (
<div className=" back d-f align-items-center justify-content-center" style={{color:"white"}}>
    <div className="row">
<div className="col-4 py-2 d-f align-items-center justify-content-start">

<h3>Get in Touch</h3>

<p><i className="fa-solid fa-envelope"></i>Mostafa@gmail.com</p>
<p><i className="fa-solid fa-envelope"></i>01285856110</p>

</div>

<div className="col-4 py-5 d-f align-items-center justify-content-center">
<button type="button" class=" btn btn-outline-light ">Contact Me</button>
</div>

<div className="col-4 py-2 d-f align-items-center justify-content-end">

<h3><i className="fa-brands fa-twitter"></i>
<i className="fa-brands fa-facebook-f px-3"></i>
<i className="fa-brands fa-linkedin"></i>
</h3>
<h4>Copyright</h4>
</div>
</div>
</div>

    )
}

}