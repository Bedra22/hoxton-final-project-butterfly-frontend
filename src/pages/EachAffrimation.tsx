import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Aos from "aos";
import "aos/dist/aos.css"

type eachAllAffrimation = {
    id: Number,
    title: String,
    User: User[],
    eachaffrimation: EachAffrimation[]
}

type User = {
    id: Number,
    email: String,
    password: String
}

type EachAffrimation = {
    id: Number,
    title: String,
    affrimationsId: Number
}

export function EachAffrimation() {
    const [eachAllAffrimation, setEachAllAffrimation] = useState<eachAllAffrimation>()
    const params = useParams()


    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    useEffect(() => {
        fetch(`http://localhost:5000/affrimations/${params.id}`)
            .then(resp => resp.json())
            .then(eachAffrimationFromServer => setEachAllAffrimation(eachAffrimationFromServer))
    }, [])


    return (
        <div className="each-affrimation-section">
            <div className="butterflygif">
                <img src="https://img1.picmix.com/output/stamp/normal/0/5/7/2/1042750_d9d98.gif" alt="" />
                <h1>AFFRIMATION for you</h1>
                <img src="https://i.pinimg.com/originals/4e/fa/ca/4efaca4d26387420cd30a037890a08e8.gif" alt="" />

            </div>
            <div className="each-affrimation">
                <ul>
                    {eachAllAffrimation?.eachaffrimation.map(item => (
                        <li data-aos="fade-up">
                            <h1>{item.title}</h1>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}