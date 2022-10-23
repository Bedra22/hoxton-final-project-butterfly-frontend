import { useEffect, useState } from "react"

export function DailyChallenges() {
    const [allDaily, setAllDaily] = useState<allDaily[]>([])


    type allDaily = {
        id: number;
        title: string;
        image: string;
    }

    useEffect(() => {
        fetch("http://localhost:5000/dailychallenges")
            .then(resp => resp.json())
            .then(dailyFromServer => setAllDaily(dailyFromServer))
    }, [])
    return (
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
    )
}