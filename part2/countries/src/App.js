import { useState, useEffect } from "react";
import axios from "axios";

import Countries from "./components/Countries";
import Filter from "./components/Filter";

function App() {
  const [countries, setCountries] = useState([]);
  const [countryFilter, setCountryFilter] = useState('');
  const [filter, setFilter] = useState(false);

  const api_key = process.env.REACT_APP_API_KEY
  console.log('api key:', api_key);
  
  const showHandler = (event) => {
    console.log(event.target.value)
    setCountryFilter(event.target.value);
}

  

  const countriesToShow = filter
  ? countries.filter((country) => country.name.common.toLowerCase()
                                  .includes(countryFilter.toLowerCase()))
  : []

  const handleFilterInput = (event) => {
    setCountryFilter(event.target.value);
    checkFilter(event.target.value);
  }

  const checkFilter = (filter) => {
    filter ? setFilter(true) : setFilter(false)
  }

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        console.log('countries', Array.from(response.data));
        setCountries(Array.from(response.data));
      })
  }, [])
  
  

  return (
    <>
      <Filter countryFilter={countryFilter} handleFilterInput={handleFilterInput} />
      <Countries countries={countriesToShow} showHandler={showHandler}/>
    </>
  );
}

export default App;
