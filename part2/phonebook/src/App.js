import { useState , useEffect} from 'react'
import AddPerson from './components/AddPerson'
import Entry from './components/Entry'
import Filter from './components/Filter'
import service from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [filter, setFilter] = useState(false);

  

  useEffect(() => {
    service
      .getAll()
      .then(data => {
        setPersons(data)
        console.log(data)
      })
   }, [])
  
  

  const namesToShow = !filter
  ? persons
  : persons.filter((person) => person.name.toLowerCase()
                               .includes(filterName.toLowerCase()));


  const handleFilterInput = (event) => {
    setFilterName(event.target.value);
    checkFilterInput(event.target.value);
  }

  const checkFilterInput = (text) => {
    if(text === '') {
      setFilter(false);
    }
    else {
      setFilter(true);
    }
    }
  

  const handleNameInput = (event) => {
    setNewName(event.target.value);
  }


  const handleNumberInput = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault();
    
    const foundPerson = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())

    if(foundPerson){
      if(window.confirm(`${newName} already exists. Update phone number?`)){
        const updatedPerson = {...foundPerson, number: newNumber}
        console.log('person', updatedPerson)
        
        service
          .update(updatedPerson.id, updatedPerson)
          .then(data => 
            {
              setPersons(persons.map(p => p.id !== updatedPerson.id ? p : data))
              console.log('data is', data)
            })
          
      }
      
      
      return;
    }
    

    const newEntry = {name: newName, number: newNumber};
    service
      .create(newEntry)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('');
        setNewNumber('');
      }).catch(error => console.log(error, 'hata oldu'))
      
  

    
  }

  const deleteHandler = (event) => {
    const id = event.target.value
    const name = event.target.dataset.name
    
    
    if(window.confirm(`delete ${name} with id ${id}?`)){
      console.log(`deleting ${id}`)
      service
        .remove(id)
        .then(() => setPersons(persons.filter(p => p.id != id)))
        
    }
      

  }

  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterInput={handleFilterInput} filterName={filterName}/>
      <AddPerson addPerson={addPerson} newName={newName} 
      handleNameInput={handleNameInput} newNumber={newNumber}
      handleNumberInput={handleNumberInput}/>
      <h2>Numbers</h2>
      {namesToShow.map((person) => <Entry key={person.name} person={person} deleteHandler={deleteHandler}/>)}
    </div>
  )
}

export default App
