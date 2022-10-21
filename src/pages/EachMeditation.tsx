import { Howl } from "howler"
import { useEffect } from "react"


export function EachMedatiton() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const sound1 = new Howl({
        src: ["https://www.epidemicsound.com/track/6dIRHJeHqt/"],
        html5: true,
        preload: true,
    })

    return (
        <div>
            <div>
                <div onClick={() => sound1.play()} >Play</div>
                <div onClick={() => sound1.pause()}  >Pause</div>
            </div>
        </div>
    )
}