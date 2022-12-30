import { useState } from "react";
import Country from "./Country";
import ShowButton from "./ShowButton";

const Countries = (props) => {

    if(props.countries.length > 10){
        return(
            <div>Too many matches, please be more specific</div>
        )
    }
    if(props.countries.length === 1){
        return(
            <Country country={props.countries[0]}/>
        )
    }
    return(
    <>
      <div>{props.countries.map((country) => <div key={country.cca3}>{country.name.common}
        <ShowButton val={country.name.common} handler={props.showHandler}/></div>)}</div>
    </>
    )
    
}


export default Countries;