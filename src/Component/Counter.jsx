import { useState } from 'react'

export default function Counter() {
    const counterStyle = {
        border: '2px solid tomato',
        padding: '10px',
        borderRadius: '20px'
    }

    const [count, setCount] = useState(0)
    function onClickHandler(){
        setCount(count + 1)
    }
    return (
        <div style={counterStyle}>  
           <p>Count: {count}</p>
           <button onClick={onClickHandler}>Add Me</button>
        </div>
    );
}