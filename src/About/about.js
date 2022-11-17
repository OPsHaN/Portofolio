import React from 'react'
import './about.css';
export default class About extends React.Component {

    constructor(){
    
        super();
    }
    
    render() {
        return  <div className="about row">
        <div className=" col-4 p-5">
            <h1>About Me</h1>
        </div>
        <div className="col-8 p-5">
        <p>This Normal Text This Normal TextThis Normal TextThis Normal TextThis Normal TextThis Normal TextThis Normal Text This Normal TextThis Normal TextThis Normal TextThis Normal TextThis Normal TextThis Normal Text</p>

        <button
                class="btn btn-secondary btn-lg action-button" type="button">Downlaod Reusme<i class="fa fa-long-arrow-right ml-2"></i></button>
        </div>
    </div>

    }

}