import { useState , useEffect} from 'react'
import AddPerson from './components/AddPerson'
import Entry from './components/Entry'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    console.log('effect');
    axios
      .get('http://localhost:3001/persons')
      .then((response) => {
        console.log('promise fulfilled');
        setPersons(response.data);
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
    
    if(persons.some(person => person.name === newName)){
      alert(`${newName} already exists. Entry not added`)
      return;
    }
    const newEntry = {name: newName, number: newNumber};
    setPersons(persons.concat(newEntry));

    setNewName('');
    setNewNumber('');
  }

  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterInput={handleFilterInput} filterName={filterName}/>
      <AddPerson addPerson={addPerson} newName={newName} 
      handleNameInput={handleNameInput} newNumber={newNumber}
      handleNumberInput={handleNumberInput}/>
      <h2>Numbers</h2>
      {namesToShow.map((person) => <Entry key={person.name} person={person} />)}
    </div>
  )
}

export default App
