import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

const Header = (props) => {
  return(
    <p>{props.course}</p>
  )
}

const Content = (props) => {
  console.log(props)
  return(
    <div>
      <Part part1={part1.name} exercises1={part1.exercises}/>
      <Part part2={part2.name} exercises2={part2.exercises}/>
      <Part part3={part3.name} exercises3={part3.exercises}/>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return(
    <div>
      <p>{props.part1}</p>
      <p>{props.part2}</p>
      <p>{props.part3}</p>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.part1} {props.exercises1} {props.part2} {props.exercises2} {props.part3} {props.exercises3}</p>
    </div>
  )
}

  return (
    <div>
      <Header course={course} />
      <Content Part={part1} part2={part2} part3={part3} />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))