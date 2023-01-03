import Button from "./Button"

const Entry = ({person, deleteHandler}) => {
    return (
        <div>{person.name} {person.number} 
        <Button id={person.id} handler={deleteHandler} name={person.name}/>
        </div>
    )
}

export default Entry