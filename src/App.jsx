import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <h1>Hello World</h1>
      <School></School> 
      <Person></Person>
      <School></School>
      <Countries></Countries>
      <Developers name="abc" dept="IT"></Developers>
      <Developers name="def" dept="HR"></Developers>
      <Developers name="ghi"></Developers>
    </>
  )
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

function Developers(props){
  return (
    <div style={{color: 'yellow' , backgroundColor: 'black' }}>
      <h3 >Developer 1 : {props.name} - {props.dept}</h3>
    </div>
  )
}

function Players() {
  Style = {
    
  }
  return (
    <div>
      <h3>Player 1</h3>
      <h3>Player 2</h3>
      <h3>Player 3</h3>
    </div>
  )
} 
export default App
