import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassProps from './component/classComponentProps/classProps'
import FunctionProps from './component/FunctionComponetProps/functionProps'

const App = () => {

  return (
    <div>
      
      <h1> Sk_React_Props </h1>
      
      <p className="read-the-docs">
        Here Learning Props.....
      </p>

      {/* Call Class Component Props  */}
      <h1> Class Component </h1>
      <ClassProps
        name = "Sarujan"
        course = "React_Js"
      />

       {/* Call Function Component Props  */}
       <h1> Fuction Component </h1>
       <FunctionProps
         first_name =  'Sk Sarujan'
         developer = 'Mobile Developer'
         year = '1'
         course_name = 'React Js'
       />
    </div>
  )
}

export default App;
