const Button = (props) => {
    return (
        <button data-name={props.name} value={props.id} onClick={props.handler}>
        Delete
        </button>
    )
}

export default Button