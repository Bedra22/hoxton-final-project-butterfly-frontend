import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Aos from "aos";
import "aos/dist/aos.css"

export function Affrimaton() {
    const [affrimation, setAffrimtion] = useState([])
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])
    useEffect(() => {
        fetch("http://localhost:5000/affrimations")
            .then(resp => resp.json())
            .then(affrimationFromServer => setAffrimtion(affrimationFromServer))
    }, [])
    return (
        <div className="affrimations">
            <div className="affrimation-hyrje">
                <div className="affrimation-butterfly">
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ecd6b3ae-5f23-4773-aa4c-a5ff163d09f1/ddapzle-c7909979-452f-44b2-a03e-d206fcf49d3b.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VjZDZiM2FlLTVmMjMtNDc3My1hYTRjLWE1ZmYxNjNkMDlmMVwvZGRhcHpsZS1jNzkwOTk3OS00NTJmLTQ0YjItYTAzZS1kMjA2ZmNmNDlkM2IuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tUW28NtzW4-4x1_ajMeVKUJT3nYgSTbSlnW4u_n6xTo" alt="" />
                    <h2>
                        DAILY POSITIVE AFFIRMATION from BUTTERFLY
                    </h2>
                </div>
                <h1>
                    Today I create a wonderful new day and a wonderful new future
                </h1>

                <h3>A F F R I M A T I O N S </h3>
                <p>
                    Beautiful and meaningful affirmations to uplift your day.
                    Click on each category below to reveal positive affirmations
                    for creating your best life!
                </p>
                <img src="https://cdn-icons-png.flaticon.com/128/64/64787.png" alt="" />
            </div>
            <div className="affrimation-list">
                <ul data-aos="fade-up">
                    {affrimation.map(item => (
                        <Link to={`/affrimation/${item.id}`}>
                            <li>
                                <h2>{item.title}</h2>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}