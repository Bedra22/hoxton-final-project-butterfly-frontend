import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import { Headers } from "../components/Headers"

type allDaily = {
    id: number;
    title: string;
    image: string;
    Users: User;
}
type User = {
    id: number;
    email: string;
    password: string;
}
export function HomePage() {

    const [allDaily, setAllDaily] = useState<allDaily[]>([])

    useEffect(() => {
        fetch("http://localhost:5000/dailychallenges")
            .then(resp => resp.json())
            .then(dailyFromServer => setAllDaily(dailyFromServer))
    }, [])
    return (
        <div>
            <Headers />
            <div className="daily-challenges">
                <h2>Try This Simple Daily Challenges</h2>
                <ul className="challenges-list">
                    {
                        allDaily.map(item => (
                            <li className="challenges-list-li">
                                <h3>{item.title}</h3>
                                <img src={item.image} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}