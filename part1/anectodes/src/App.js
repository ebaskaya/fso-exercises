import { useState } from 'react'

const Button = (props) => <button onClick={props.handler}>{props.text}</button>
  
const Display = (props) => {
  return (
    <>
    <Heading text={props.text}></Heading>
    <div>{props.anecdote}</div>
    <div>has {props.vote} votes</div>
    </>
  )
}

const Heading = ({text}) => <h1>{text}</h1>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0);
  
  const [points, setPoints] = useState(new Uint8Array(7)); //makes array of zeroes

  const [mostVoted, setMostVoted] = useState(0);

  const clicked = () => setSelected(Math.floor(Math.random() * 7));
  const addVote = () => {
    const newPoints = [...points];
    newPoints[selected] += 1;
    setPoints(newPoints);
    if(points[selected] > mostVoted){
      setMostVoted(selected);
    }
  }

  

  return (
    <div>
      <Display anecdote={anecdotes[selected]} vote={points[selected]} text={'Anecdote of the day'}/>
      <Button handler={addVote} text={'vote'} />
      <Button handler={clicked} text={'next anectode'}/>
      <Display anecdote={anecdotes[mostVoted]} vote={points[mostVoted]} text={'Anecdote with the most votes'}/>
    </div>
  )
}

export default App
