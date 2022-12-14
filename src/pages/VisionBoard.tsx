import { useEffect, useState } from "react"
import { User } from "./HomePage";
import Aos from "aos";
import "aos/dist/aos.css"
import { BackToTopButton } from "../components/BackToTopButton";

type VisionBoard = {
    id: Number;
    photoUrl: string,
    userId: Number;
}
type Props = {
    user: User | null;
}

export function VisionBoard({ user }: Props) {

    const [visionBoard, setVisionBoard] = useState<VisionBoard[]>([])
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {

            fetch("http://localhost:5000/visionboard")
                .then(resp => resp.json())
                .then(visionBoardFromServer => {
                    const reversed: any = Array.from(visionBoardFromServer)
                    setVisionBoard(reversed)
                    console.log("setInterval", interval)
                })
        }, 1000)
        return () => {
            clearInterval(interval)
            console.log("ClearInterval", interval)
        }
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="visionboard">
            <div className="visionboard-title">
                <img src="https://media.baamboozle.com/uploads/images/308100/1647180148_481137_gif-url.gif" alt="" />

                <h1>Lets create your Vision Board</h1>
                <img src="https://media.baamboozle.com/uploads/images/308100/1647180148_481137_gif-url.gif" alt="" />
            </div>
            <div className="create-vision-board">
                <form
                    onSubmit={event => {
                        event.preventDefault()

                        fetch("http://localhost:5000/visionboard", {
                            method: 'POST',
                            headers: {
                                'Content-type': 'application/json'
                            },
                            body: JSON.stringify({
                                userId: user.id,
                                photoUrl: event.target.photoUrl.value,
                            })
                        })
                            .then(resp => resp.json())
                            .then(visionBoardFromServer => setVisionBoard(visionBoardFromServer))

                    }}
                >
                    <div className="create-vision-board-inputs">
                        <input type="text" name="photoUrl" placeholder=" Enter your Vision in Images " />
                        <button>
                            Post Me
                        </button>
                    </div>
                </form>
            </div>
            <div className="get-all-vision-boards">
                <ul className="container">
                    {visionBoard.map(item => (
                        <li data-aos="fade-up" className="box">
                            <img src={item.photoUrl} alt="" />
                        </li>
                    ))}
                </ul>
            </div>
            <BackToTopButton />
        </div>
    )
}