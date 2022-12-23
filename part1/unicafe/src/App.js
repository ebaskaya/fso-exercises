import { useState } from 'react'

const H1 = (props) => <h1>{props.text}</h1>


const Button = (props) => <button onClick={props.handler}>{props.text}</button>



const Statistics = (props) => {
  return (
    <>
      <table>
        <StatisticLine statName='good' statNum={props.obj.good}/>
        <StatisticLine statName='neutral' statNum={props.obj.neutral}/>
        <StatisticLine statName='bad' statNum={props.obj.bad}/>
        <StatisticLine statName='all' statNum={props.obj.all}/>
        <StatisticLine statName='average' statNum = {props.obj.average + '%'}/>
        <StatisticLine statName='positive' statNum = {props.obj.positive + '%'}/>
      </table>

    </>
  )
}

const StatisticLine = (props) => {
  return(
    <tr>
      <td>{props.statName}</td>
      <td>{props.statNum}</td>
    </tr>
    )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);
  const [clicked, setClicked] = useState(0);

  const goodClick = () => { //daha iyi bi şey yazarsan temizle
    setClicked(clicked + 1);
    setGood(good+1);
    setAll(all + 1);
    setAverage(((good + 1) - bad) / (all + 1 )*100)
    setPositive((good + 1) / (all + 1) * 100)
  }

  const neutralClick = () => {
    setClicked(clicked + 1);
    setNeutral(neutral +1);
    setAll(all + 1);
    setAverage((good - bad) / (all + 1)*100)
    setPositive((good) / (all + 1) * 100)
  }

  const badClick = () => {
    setClicked(clicked + 1);
    setBad(bad + 1);
    setAll(all + 1);
    setAverage((good - (bad + 1)) / (all + 1) * 100)
    setPositive((good) / (all + 1) * 100)
  }

  


  if(clicked > 0){
  return (
    <div>
      <H1 text = 'give feedback' />
      <Button handler={goodClick} text='good' />
      <Button handler={neutralClick} text='neutral' />
      <Button handler={badClick} text='bad' />
      <H1 text = 'Statistics' />
      <Statistics obj={{good, neutral, bad, average, all, positive}} />
      
    </div>
  )
  }

  return (
    <div>
      <H1 text = 'give feedback' />
      <Button handler={goodClick} text='good' />
      <Button handler={neutralClick} text='neutral' />
      <Button handler={badClick} text='bad' />
      <H1 text = 'Statistics' />
      <div>You need to press a button for the statistics to show.</div>
    </div>
  )
}

export default App