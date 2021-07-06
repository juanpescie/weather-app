import React from "react";
import {Link} from "react-router-dom";
import "./About.css"
export default function About() {
    return(
        <React.Fragment>
        <div className="description" >
            
            <p>This is a proyect that i built using different languages and technologies</p>
            <p>Languages like javascript, HTML and CSS</p>
            <p>And technologies like react and bootstrap </p>
            <p>Then i used the weather API to bring all the data</p>
        </div>
        <Link to="/">Back to the Home Page</Link>
        <p>
        <a href="https://github.com/juanpescie/weather-app">The repository in Github</a>
        </p>
        </React.Fragment>
        )
}
