import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]

  }

const Header = () => {
    return(
      <p>{course.name}</p>
  )
}

const Content = () => {
  return(
    <div>
      <p>{course.parts[0].name}</p>
      <p>{course.parts[1].name}</p>
      <p>{course.parts[2].name}</p>
    </div>
  )
}

const Total = () => {
  return(
    <div>
      <p>{course.parts[0].exercises}</p>
      <p>{course.parts[1].exercises}</p>
      <p>{course.parts[2].exercises}</p>
    </div>
  )
}


  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))