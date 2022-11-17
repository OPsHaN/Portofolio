import React, { Component }  from 'react'
export default function Carts(props) {


    return ( <>
     <div className="col -4 my -3 p-5 w-10">
<div className="card" style={props.style}>

<div className="card-body d-flex flex-column align-items-center p-5" style={{color:"black"}}>
<h5 className="card-title">{props.name} <hr/></h5>
</div>
     </div></div>   
    </>

    );
}
