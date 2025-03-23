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
      <p>My school is XYZ</p>
      <ul>
        <li><Person></Person></li> 
        <li>Banana</li>
      </ul>
    </div>
  )
}

export default App
