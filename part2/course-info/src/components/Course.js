import Content from './Content'

const Course = ({course}) => {
    return(
        <div>
          <h1>{course.name}</h1>
          <Content course={course}/>
        </div>
    )
}

export default Course;