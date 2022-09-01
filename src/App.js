import React from 'react'
import Box from './components/Box'
import boxesData from './boxes'

export default function App() {
  const [boxes, setBoxes] = React.useState(boxesData)
  const elements = boxes.map(box => (
    <Box
      key={box.id}
      box={box}
      toggle={toggle} />
  ))

  function toggle(id) {
    setBoxes(prevState => {
      let newState = []
      for (let i = 0; i < prevState.length; i++) {
        const curr = prevState[i]
        if (curr.id == id) {
          newState.push({
            ...curr,
            state: !curr.state
          })
        } else {
          newState.push(curr)
        }
      }
      return newState
    })
  }

  return (
    <main>
      <div className='box-container'>
        {elements}
      </div >
    </main >
  )
}