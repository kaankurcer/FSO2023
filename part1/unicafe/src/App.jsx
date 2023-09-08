import { useState } from 'react'

const Header = ({ text }) => {
  return(
    <h1>{text}</h1>
  )
}

const Button = ({ text, handleClick }) => {
  return(
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistics = (props) => {
  if(props.stats[3].value === 0)
    return(
      <h2>No feedback given</h2>
    )
  return(
    <table>
      <tbody>
        {props.stats.map((stat, i) => 
          <tr key={i}>
            <StatisticLine name={stat.name} value={stat.value} key={i}/>
          </tr>
        )}
      </tbody>
    </table>
  )
}

const StatisticLine = (props) => {
  if(props.name === 'positive')
    return(
      <td>{props.name} {props.value}%</td>
    )
  return(
      <td>{props.name} {props.value}</td>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [count, setCount] = useState(0) //Total count of reviews
  const [avr, setAvr] = useState(0) //Average of reviews where: good = 1, neutral = 0 and bad = -1
  const [posper, setPosper] = useState(0) //Percentage of positive reviews
  const [curCount, setCurcount] = useState(0) //A counter to calculate the average

  const statistics = [
      {
        name: 'good',
        value: good
      },
      {
        name: 'neutral',
        value: neutral
      },
      {
        name: 'bad',
        value: bad
      },
      {
        name: 'all',
        value: count
      },
      {
        name: 'average',
        value: avr
      },
      {
        name: 'positive',
        value: posper
      }
  ]

  const handleGoodClick = () => {
    const newGood = good + 1
    const newCount = count + 1
    const newCurcount = curCount + 1
    setGood(newGood)
    setCount(newCount)
    setCurcount(newCurcount)
    setPosper((newGood / newCount) * 100)
    setAvr(newCurcount / newCount)
  }

  const handleNeutralClick = () => {
    const newNeutral = neutral + 1
    const newCount = count + 1
    setNeutral(newNeutral)
    setCount(newCount)
    setPosper((good / newCount) * 100)
    setAvr((curCount / newCount))
  }

  const handleBadClick = () => {
    const newBad = bad + 1
    const newCount = count + 1
    const newCurcount = curCount - 1
    setBad(newBad)
    setCount(newCount)
    setCurcount(newCurcount)
    setPosper((good / newCount) * 100)
    setAvr(newCurcount / newCount)
  }

  return (
    <>
      <Header text={'give feedback'} />
      <Button text={'good'} handleClick={handleGoodClick}/>
      <Button text={'neutral'} handleClick={handleNeutralClick}/>
      <Button text={'bad'} handleClick={handleBadClick}/>
      <Header text={'statistics'} />
      <Statistics stats={statistics} />
    </>
  )
}

export default App