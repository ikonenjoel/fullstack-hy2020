import React from 'react';

const Header = ({ course }) => {
  return(
    <h1>{course.name}</h1>
  )
}

const Part = (props) => {
  return(
    <>
      <li>{props.name} {props.exercises}</li>
    </>
  )
}

const Content = ({ course }) => {
  const exercises = []
  const courses = () => course.parts.map((part) => {
    exercises.push(part.exercises)
    return <Part key={part.id} name={part.name} exercises={part.exercises} />
  })


return (
    <div>
      <p>{courses()}</p>

    </div>
  )
}



const Course = ({ course }) => {
  return(
  <div>
    <Header course={course} />
    <Content course={course} />
  </div>
  )
}

export default Course;