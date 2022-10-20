import { useEffect, useState } from "react"
import Aos from "aos";
import "aos/dist/aos.css"

type VisionBoard = {
    id: Number;
    title: string;
    photoUrl: string,
    userId: Number;
}
export function VisionBoard() {

    const [visionBoard, setVisionBoard] = useState<VisionBoard[]>([])

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    useEffect(() => {
        fetch("http://localhost:5000/visionboard")
            .then(resp => resp.json())
            .then(visionBoardFromServer => setVisionBoard(visionBoardFromServer))
    }, [])

    return (
        <div className="visionboard">
            <div className="visionboard-title">
                <img src="https://media.baamboozle.com/uploads/images/308100/1647180148_481137_gif-url.gif" alt="" />

                <h1>Lets create your Vision Board</h1>
                <img src="https://media.baamboozle.com/uploads/images/308100/1647180148_481137_gif-url.gif" alt="" />
            </div>
            <div className="create-vision-board">

            </div>
            <div className="get-all-vision-boards">
                <ul className="container">
                    {visionBoard.map(item => (
                        <li data-aos="fade-up" className="box">
                            <h2>{item.title}</h2>
                            <img src={item.photoUrl} alt="" />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}