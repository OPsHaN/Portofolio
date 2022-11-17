import React from 'react'
import './skills.css';
import Prog from '../Progress/progress';
export default class Skills extends React.Component {

    constructor(){
    
        super();
        this.state = {
            name:"html",
            number: 10
        };
    }
    
    render() {
        return  <div className="skill bg py-0">
        <div className=" col-12 p-5 text-center">
            <h1>Skills</h1>
            <p className="p-4 m-4">This Normal Text This Normal TextThis Normal TextThis Normal TextThis Normal TextThis Normal TextThis Normal Text This Normal TextThis Normal TextThis Normal TextThis Normal TextThis Normal TextThis Normal Text</p>
        </div>
        <div className="row bg py-0"  >
                <div className="col-6 p-5 text-center">
                <h2 className="my-2">My Focus</h2>
                <hr style={{color:'white', width:"300px" , marginLeft:"140px"}}/>
                <h4 className="my-3">Ui - Ux Design</h4>
                <h4 className="my-3">Responsive</h4>
                <h4 className="my-3">Angular </h4>
                <h4 className="my-3">React</h4>
        </div>
        <div className="col-6 p-5 text-center">
<Prog name="Html"number ="90" />
<Prog name="Css"number ="80" />
<Prog name="Bootstrap"number ="70" />
<Prog name="Javascript"number ="80" />
<Prog name="Anglar"number ="50" />

        </div>
        </div>
   </div>
    }
}