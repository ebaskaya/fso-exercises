const Filter = (props) => {
    return(
        <div>Find countries: <input value={props.countryFilter} 
          onChange={props.handleFilterInput}/></div>
    )
}

export default Filter;