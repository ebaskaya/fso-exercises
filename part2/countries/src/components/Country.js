import { useState , useEffect} from "react";
import axios from "axios";

const Country = ( {country} ) => {
  const [weather, setWeather] = useState({})
  
  const api_key = process.env.REACT_APP_API_KEY
  console.log('api key:', api_key);  
  
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=';
  let query = `${url}${country.capital}&appid=${api_key}&units=metric`
  //console.log(query);
  
  
  useEffect(() => {
    axios
      .get(query)
      .then((response) => {
        console.log('countries', Array.from(response.data));
        setWeather(response.data);
      })
  }, [])
  
  console.log(weather);

  return(
      <>
        <h1>{country.name.common}</h1>
        <div>Capital: {country.capital}</div>
        <div>Area: {country.area}</div>
        <h3>Languages: </h3>
        <ul>
            {Object.values(country.languages).map((language) => <li key={language}>{language}</li>)}
        </ul>
        <img src={country.flags.svg} width="150"></img>

        <h3>Weather in {country.capital}</h3>
        {weather.main ? (
          <>
            <div>Temperature {weather.main.temp} Celsius</div>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img>
            <div>Wind Speed: {weather.wind.speed}</div>
          </>
        ) : (
          <div>Loading weather data...</div>
        )}

      </>
    )
}

export default Country;