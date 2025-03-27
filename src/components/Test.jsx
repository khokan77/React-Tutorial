import { useEffect, useState } from "react";

export function Test(){
    const [state1, setState1] = useState(0);
    const [state2, setState2] = useState(0);

    useEffect(() => {
            console.log("Log added")
    },[state1,state2])
}