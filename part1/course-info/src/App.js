const App = () => {
  const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }
  
  const Part = (props) => {
    return(
      <p>
        {props.part} {props.exercise}
      </p>
    )
  }
  
  const Content = (props) => {
    return (
      <>
        <Part part={part1} exercise={exercises1}></Part>
        <Part part={part2} exercise={exercises2}></Part>
        <Part part={part3} exercise={exercises3}></Part>
      </>
    )
  }

  const Total = (props) => {
    return(
    
    <p>
        Number of exercises = {props.total}
    </p>
    
    )
  }
  
  const course = 'half stack app development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;
  const total = exercises1 + exercises2 + exercises3;

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total total={total} />
    </div>
  )

}


export default App;
