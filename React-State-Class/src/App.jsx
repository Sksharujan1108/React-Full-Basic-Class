import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassState from './component/classState/ClassState'
import NewStateComponent from './component/NewComponentState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <h1> Sk React state </h1>
      
      <p className="read-the-docs">
        I am Learning React State .....
      </p>

      {/* call Class State */}
      <ClassState/>

      {/* call New State Component */}
      <NewStateComponent/>
    </>
  )
}

export default App
