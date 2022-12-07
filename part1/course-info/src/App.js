const App = () => {
  const Header = (props) => {
    return (
      <h1>{course.name}</h1>
    )
  }
  
  const Part = (props) => {
    return(
      <p>
        {props.name} {props.exercises}
      </p>
    )
  }
  

  const Content = (props) => { 
    return (
      <>
        <Part name={props.parts[0].name} exercises={props.parts[0].exercises}></Part>
        <Part name={props.parts[1].name} exercises={props.parts[1].exercises}></Part>
        <Part name={props.parts[2].name} exercises={props.parts[2].exercises}></Part>
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
  
  const course = {
    name: 'half stack app development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
  
      {
        name: 'State of a component',
        exercises: 14,
      }
  
  
    ]

}
  



  
  

  const total = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises;


  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts}/>
      <Total total={total} />
    </div>
  )

}


export default App;
