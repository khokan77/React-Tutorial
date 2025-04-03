// console.log(React);
// console.log(ReactDOM);

const newElement = React.createElement(
  "div",
  { name: "shamim", age: 10, parent: ["pp", 23] },
  React.createElement("p", { name: "child1" }, "my create react element")
);

const myJsxElement = (
  <div>
    <p>my create react element</p>
  </div>
);

const MyFirstFun = (props) => {
  // props must be an object
  console.log(props);
  return (
    <div>
      <p>my create react element {props.name}</p>
    </div>
  );
};

/*************  ✨ Codeium Command ⭐  *************/
/**
 * A functional component that displays a paragraph with a message.
 *
 * @param {Object} props - The props object.
 */

/******  8e34146b-5b3c-4fe0-aad0-b13be3afa3f6  *******/
const Age = (props) => {
  return <p>my create react element {props.age}</p>;
};

// console.log(newElement);
// ReactDOM.createRoot(document.getElementById("myDivRoot")).render(newElement);
// ReactDOM.createRoot(document.getElementById("myDivRoot")).render(myFirstFun());

const root = ReactDOM.createRoot(document.getElementById("myDivRoot"));
root.render(
  <>
    <MyFirstFun name={"Hasib"}></MyFirstFun>
    <Age age="16"></Age>
  </>
);

const root2 = ReactDOM.createRoot(document.getElementById("myDivTime"));
setInterval(() => {
  const element = <h1>{new Date().toLocaleTimeString("bn-BD")}</h1>;
  root2.render(element);
}, 1000);
