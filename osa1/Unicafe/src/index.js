import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistic = (props) => {
  return(
    <tr>
      <td>{props.name}</td><td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const {good, bad, neutral} = props
  if ( good + bad + neutral === 0 ) return(
    <div>No feedback given.</div>
  )

  return(
    <>
    <table>
      <tbody>
    <Statistic name="good" value={good} />
    <Statistic name="neutral" value={neutral} />
    <Statistic name="bad" value={bad} />
    <Statistic name="all" value={good + neutral + bad} />
    <Statistic name="average" value={100 * good / (good + bad + neutral)} />
      </tbody>
    </table>
    </>
  ) 
}



const App = () => {

  //sets the states required.
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)
  const [ all ] = useState(0) 
  const [ average ] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  const handleNeutralclick = () => {
    setNeutral(neutral + 1)
  }
  
  return(
    <div>
      <h1>Give feedback:</h1>
      <div>
        <Button onClick={handleGoodClick} text='good' />
        <Button onClick={handleNeutralclick } text='neutral' />
        <Button onClick={handleBadClick} text='bad' />
      </div>
        <h2>Statistics:</h2>
        <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} />
      </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'))
