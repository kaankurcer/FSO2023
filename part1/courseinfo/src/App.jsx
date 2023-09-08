const Header = (props) => {
  return(
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      {props.parts.map((prop,i) => 
        <Part text={prop.name} count={prop.exercises} key={i} />
      )}
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p> {props.text} {props.count} </p>
    </div>
  )
}

const Total = (props) => {
  let count = 0
  props.parts.forEach(value => {
    count += value.exercises
  })
  return(
    <div>
      <p>
        Number of exercises {count}
      </p>
    </div>
  )
}

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

  return (
    <div>
      <Header title={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App