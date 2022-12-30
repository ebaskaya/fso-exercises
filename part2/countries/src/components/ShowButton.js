const ShowButton = (props) => {
    return(
        <button value={props.val} onClick={props.handler}>show</button>
    )
}

export default ShowButton