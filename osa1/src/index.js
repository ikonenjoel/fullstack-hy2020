import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <>
      {props.course}
    </>
  )
}

const Content = (props) => {
  return (
    <>

    </>
  )
}

const Total = () => {

}

const App = (props) => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of react'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


return (
  <div>
    <Header course={course} />
    <Content />
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))