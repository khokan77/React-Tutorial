import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Library from './Component/Library'
// import ToDo from './Todo'
// import Actor from './Actor'
// import Singer from './Singer'

function App() {

  const books = [
    { id: 1, name: "Physics", price: 250 },
    { id: 2, name: "Chemistry", price: 300 },
    { id: 3, name: "Maths", price: 200 },   
  ];

  return (
    <>
      <Library books={books}></Library>
      </>
  )
}
  // Singer.jsx
  // const singers = [
  //   { id: 1, name: "Tom", age: 20 },
  //   { id: 2, name: "Morgan", age: 25 },
  //   { id: 3, name: "Jack", age: 30 },
  // ];

  // return (
  //   <>
  //     {
  //           singers.map(singer =>       
  //        <Singer key={singer.id} singer={singer}></Singer>
       
  //     )
      
  //     }

  //   </>
  // );


  // Actor.jsx
  // const actors = ["Tom", "Morgan", "Jack"]
  // return  actors.map((actor) => <Actor name = {actor}></Actor> )
  
  // Todo.jsx
//  const time = 40;
//   return (
//     <div>
//       <ToDo learn="React" idDone={true} time={time}></ToDo>
//       <ToDo learn="JS" idDone={true} time={time}></ToDo>
//       <ToDo learn="React" isDone={false} ></ToDo>
//      </div>
//   )


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
