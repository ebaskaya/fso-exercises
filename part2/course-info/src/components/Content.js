import Part from './Part'

const Content = ({course}) => {
    const total = course.parts.reduce((tot, curr) => tot + curr.exercises, 0)
    return (
        <>
          <div>{course.parts.map((part) => <Part key={part.id} part={part}/>)}</div>
          <div>Total of exercises: {total}</div>
        </>
    )
}


export default Content;