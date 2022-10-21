import { Howl } from "howler"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import videoBB from '../assets/videoBB.mp4'

export function EachMedatiton() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div className="video">
            <video autoPlay loop muted >
                <source src={videoBB} />
            </video>
            <div className="video-content">
                <h1>COMING SOON</h1>
                <h2>2023</h2>
                <p>We are preparing something amazing and exciting for you. </p>
                <p>STAY TUNED!!!</p>
                <Link to='/home'>
                    <button>
                        BACK
                    </button>
                </Link>
            </div>
        </div>
    )
}