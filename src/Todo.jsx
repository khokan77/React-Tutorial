// export default function ToDo(props){
//     return (
//         <div>
//             <p>hello : {props.learn}</p>
//         </div>
//     )
// }

// export default function ToDo({ learn, isDone, time = 10 }) {
//     if(isDone === true){
//         return <li>Done: {learn} : {time}</li> 
//     }

//     else{
//         return <li>Pending: {learn} : {time}</li>
//     }

//     }

export default function ToDo({ learn, isDone, time = 20 }) {
    let result;
   isDone === true ? result = <li>Done: {learn} : {time}</li> : result = <li>Pending: {learn} : {time}</li>
   return result;
}
