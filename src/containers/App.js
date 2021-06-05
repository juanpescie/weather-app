import React, { useState } from 'react';
import {Route} from "react-router-dom"
import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from "../components/About.jsx";
import Ciudad from '../components/Ciudad';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(response => response.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            actual: Math.round(recurso.main.temp - 273),
            min: Math.round(recurso.main.temp_min - 273),
            max: Math.round(recurso.main.temp_max - 273),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          console.log(ciudad.actual)
          if(!cities.find(city=> city.id === ciudad.id)) {
            setCities(oldCities => [...oldCities, ciudad]);
          }
          else{alert("city already added")}
        } else {
          alert("City not found");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  return (
    <div className="App">
      <Route path="/"
        render={()=> <Nav onSearch={onSearch}/>}      
      />
      <Route
      path="/about"
      component={About}
      />
      <Route exact path="/" render={()=><Cards
          cities={cities}
          onClose={onClose}
        />}   />
      <Route 
      exact path="/ciudad/:ciudadId"
      render={({match}) => <Ciudad city={onFilter(match.params.ciudadId)}/>}
      />
      <hr />
    </div>
  );
}

export default App;
