import { useEffect, useState } from "react"

// It is used before version v19
export default function Players(){
    const [players, setPlayers] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
                .then(data => setPlayers(data))
    },[])
    return (
        <div className="school">
            <p> Palyers: {players.length} </p>
            {
                players.map(player => <p key={player.id} className="card">{player.name} </p> )
            }
        </div>
    )
}