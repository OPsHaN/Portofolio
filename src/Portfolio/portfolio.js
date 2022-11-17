import React from "react";
import './portfolio.css'
import Carts from "../Carts/carts";
export default  class Portfolio extends React.Component {


    constructor(){

        super();
        this.state = {
name :"",
bgColor :"  "
        };
    }
    render () {
        return (

            <>
            <h1 > Portfolio</h1>
            <div className="row">

<Carts name="Web Developer" style={{backgroundColor:"#f1f1f1"}} />
<Carts name="Web Developer" style={{backgroundColor:"#f1f1f1"}} />
<Carts name="Web Developer" style={{backgroundColor:"#f1f1f1"}} />
<Carts name="Web Developer" style={{backgroundColor:"#f1f1f1"}} />
<Carts name="Web Developer" style={{backgroundColor:"#f1f1f1"}} />
<Carts name="Web Developer" style={{backgroundColor:"#f1f1f1"}} />
<Carts name="Web Developer" style={{backgroundColor:"#f1f1f1"}} />
<Carts name="Web Developer" style={{backgroundColor:"#f1f1f1"}} />


            </div>
            </>


        )
    }

}