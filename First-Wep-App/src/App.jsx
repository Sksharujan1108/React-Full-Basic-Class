import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassComponent from './component/ClassComponent'
import FirstFunctionComponent from './component/FirstFunctionComponent'
import ClickComponent from './component/HighOrder-Component/click'
import ParentComponent from './component/Screen/ParentComponent/parentComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1> Sk React </h1>
      
      <p className="read-the-docs">
        Hello I am Sarujan Now I am Learning the React js
      </p>

      <ClassComponent/>

      <FirstFunctionComponent/>

      <ClickComponent/>

      {/* parent Com */}
      <ParentComponent/>

    </div>
  )
}

export default App
