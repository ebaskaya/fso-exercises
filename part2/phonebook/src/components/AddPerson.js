const AddPerson = (props) => {
    return (
    <>
        <h1>Add a person</h1>
          <form onSubmit={props.addPerson}>
            <div>
              name: <input value={props.newName} onChange={props.handleNameInput} required/>
            </div>
            <div>
              number: <input type='tel' value={props.newNumber} onChange={props.handleNumberInput} required/>
            </div>
            <div>
              <button type="submit">add</button>
            </div>
          </form>
    </>
    )
}

export default AddPerson;