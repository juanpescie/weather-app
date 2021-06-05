import React from "react";
import style from "./Ciudad.module.css";


export default function Ciudad({city}){
    if(!city){
        return(<div>city no found </div>)
    }
    return(
        <div className="ciudad">
            <div className={style.container}>
                <h1>{city.name}</h1>
                <div className="info">
                    <h4>Temperature: {Math.round(city.temp - 273)} °C</h4>
                    <h4>Weather: {city.weather}</h4>
                    <h4>Wind: {city.wind} km/h</h4>
                    <h4>Clouds: {city.clouds}</h4>
                    <h4>Latitude: {city.latitud}º</h4>
                    <h4>Length: {city.longitud}º</h4>
                </div>
            </div>
        </div>
    )
}