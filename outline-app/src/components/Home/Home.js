import React, { useState } from "react";
import './Home.css';

const Home = () => {

    const [variable, setVariable] = useState('');

    //functions here

    return (
        <div className="Home" id="homepage">
            <h1 id="homeheader">Home</h1>

            <div>
                <p>Welcome to the course outline editor. You have been assigned the following classes: </p>
            </div>

            <div className="classlist">
                <ul>
                    <li>First Class</li>
                    <li>Second Class</li>
                    <li>Third Class</li>
                </ul>
            </div>
            
            <div className="images">
                <ul>

                    <li>
                        <img id="appendixA" src={require("./Images/AppendixA_Pic.png") }/>
                    </li>
                    <li>
                        <img id="appendixB" src={require("./Images/AppendixB_Pic.png") }/>
                    </li>

                </ul>

                
            </div>

            <div className="buttons">
                <ul>
                    <li>
                        <button>Create</button>
                    </li>
                    <li>
                        <button>Load Outline</button>
                    </li>
                    <li>
                        <button>Previous Outlines</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Home;