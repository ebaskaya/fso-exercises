const Filter = (props) => {
    return (
            <div>Filter to show with: <input value={props.filterName} 
                               onChange={props.handleFilterInput}/></div>
    )
}

export default Filter;
