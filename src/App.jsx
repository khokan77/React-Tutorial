import { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Library from "./components/Library";
// im ort ToDo from './Todo'
// import Actor from './Actor'
// import Singer from './Singer'
import Counter from "./components/Counter";
import Batsman from "./components/Batsman";
import UserApi from "./components/UserApi";
import UserApi2 from "./components/UserAPi2";
import Posts from "./components/Posts";
import Players from "./components/Players";
import { Test } from "./components/Test";
import Countries from "./components/Countries/Countries";
import Products from "./components/Products/Products";
import Products2 from "./components/Products/Products2";
import { ErrorBoundary } from "react-error-boundary";
import Bottles from "./components/Bottles/Bottles";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (response) => response.json()
);

const fetchUser2 = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  ).then((response) => response.json());
  return response;
};

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const countriesPromise = fetch(
  "https://restcountries.com/v3.1/independent?status=true"
).then((res) => res.json());

const fetchProducts = fetch("https://fakestoreapi.com/products").then((res) =>
  res.json()
);

const bottlesPromise = fetch("bottles.json").then((res) => res.json());

function App() {
  return (
    <div>
      {/* <ErrorBoundary fallback={<h4>Eroor found..</h4>}>
        <Suspense>
          <Bottles bottlesPromise={bottlesPromise}></Bottles>
        </Suspense>
      </ErrorBoundary> */}
      {/* <Suspense fallback={<h3>KK loading..</h3>}>
      <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense> */}
      {/* <Products></Products> old way to fetch data */}
      {/* New way to fetch data in v19 */}
      {/* <ErrorBoundary fallback={<h2> Error found..</h2>}>
        <Suspense fallback={<h2>Loading..</h2>}>
          <Products2 fetchProducts={fetchProducts}></Products2>
        </Suspense>
      </ErrorBoundary> */}
      {/* Count Component  */}
      <Counter></Counter>;
    </div>
  );
}

// function App() {
// const usersPromise = fetchUser2();
// const postPromise = fetchPosts();

// return (
//   <>

{
  /* <Test></Test> */
}
{
  /* Before v19 it was used */
}
{
  /* <Players></Players>  */
}
{
  /* <Suspense fallback={<div>Loading...</div>}>
        <Posts postPromise={postPromise}></Posts>
      </Suspense> */
}

{
  /* async way */
}
{
  /* <Suspense fallback={<div>Loading...</div>}>
        <UserApi2 usersPromise={usersPromise}></UserApi2>
      </Suspense> */
}
{
  /* sync way */
}
{
  /* <Suspense fallback={<div>Loading...</div>}>
        <UserApi fetchUsers={fetchUsers}></UserApi>
      </Suspense> */
}
{
  /* <Batsman></Batsman>; */
}

//   </>
// );

// event handler

// function onClickHandler(){
//   alert("clicked4")
//  }

// function onClickHandler2(num){
//   const result = num + 7
//   alert("clicked5 " + result)
// }

//   return (
//     <>
//      <button onClick={() => console.log("clicked")}>Click Me</button>
//      <button onClick={() => alert("clicked2")}>Click Me2</button>
//      <button onClick={function(){console.log("clicked3")}}>Click Me3</button>
//      <button onClick={onClickHandler}>Click Me4</button>
//      <button onClick={() => onClickHandler2(5)}>Click Me5</button>
//     </>
//   )

// const books = [
//   { id: 1, name: "Physics", price: 250 },
//   { id: 2, name: "Chemistry", price: 300 },
//   { id: 3, name: "Maths", price: 200 },
// ];

// return (
//   <>
//     <Library books={books}></Library>
//     </>
// )

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
// }
// function Person() {
//   const age = 20;
//   return <p>I am a person {age}</p>;
// }

// function School() {
//   return (
//     <div>
//       <p className="school">My school is XYZ</p>
//       <ul>
//         <li>
//           <Person></Person>
//         </li>
//         <li>Banana</li>
//       </ul>
//     </div>
//   );
// }

// function Countries() {
//   const countryStyle = {
//     border: "2px solid green",
//     borderRadius: "20px",
//   };

//   return (
//     <div style={countryStyle}>
//       <p>India</p>
//       <p>USA</p>
//     </div>
//   );
// }

// function Developers(props) {
//   // props is an object
//   return (
//     <div style={{ color: "yellow", backgroundColor: "black" }}>
//       <h3>
//         Developer 1 : {props.name} - {props.dept}
//       </h3>
//     </div>
//   );
// }

// function Players({ name, runs }) {
//   // destructuring

//   return (
//     <div
//       Style={{
//         border: "2px solid yellow",
//         borderRadius: "20px",
//       }}
//     >
//       <h3>
//         Player : {name} : {runs}
//       </h3>
//     </div>
//   );
// }
export default App;
