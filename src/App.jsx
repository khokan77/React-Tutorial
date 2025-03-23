import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ToDo from './Todo'

function App() {
 const time = 40;
  return (
    <div>
      <ToDo learn="React" idDone={true} time={time}></ToDo>
      <ToDo learn="JS" idDone={true} time={time}></ToDo>
      <ToDo learn="React" isDone={false} ></ToDo>
     </div>
  )

  // return (
  //   <>
  //     <h1>Hello</h1>
  //     <School></School> 
  //     <Person></Person>
  //     <School></School>
  //     <Countries></Countries>
  //     <Developers name="abc" dept="IT"></Developers>
  //     <Developers name="def" dept="HR"></Developers>
  //     <Developers name="ghi"></Developers>
  //     <Players name="jkl" runs="100"></Players>
  //     <Players name="mno" runs="600"></Players>
  //     <Players name="pqr" runs="500"></Players>
  //   </>
  // )
}

function Person(){
  const age = 20
  return (
    <p>I am a person {age}</p>
  )
}

function School(){
  return (
    <div>    
      <p className='school'>My school is XYZ</p>
      <ul>
        <li><Person></Person></li> 
        <li>Banana</li>
      </ul>
    </div>
  )
}

function Countries(){
const countryStyle = {
  border: '2px solid green',
  borderRadius: '20px',
}

  return (
    <div style={countryStyle}>
      <p>India</p>
      <p>USA</p>
    </div>
  )
}

function Developers(props){ // props is an object
  return (
    <div style={{color: 'yellow' , backgroundColor: 'black' }}>
      <h3 >Developer 1 : {props.name} - {props.dept}</h3>
    </div>
  )
}

function Players({name, runs}) {  // destructuring

  return (
    <div Style = {{
      border: '2px solid yellow',
      borderRadius: '20px'
    }}>
      <h3>Player  : {name} : {runs}</h3>
    </div>
  )
} 
export default App
