import { useEffect, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { Footer } from "../components/Footer";
import { Headers } from "../components/Headers"

type allDaily = {
    id: number;
    title: string;
    image: string;
    Users: User;
}
export type User = {
    id: number;
    email: string;
    password: string;
}

type Props = {
    user: User | null;
}
export function HomePage({ user }: Props) {

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
            <div className="devine">
                <img src="https://images.pexels.com/photos/276918/pexels-photo-276918.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <div className="devine-text">
                    <p>
                        “The divine feminine and divine masculine are the sacred polarities that exist in creation, sometimes described as the heart and the brain, the earth and the spirit, the yin and the yang,”
                    </p>
                </div>
            </div>
            <div className="shape-life">
                <div className="title-shape-life">
                    <h1>Let's shape a more fulfilling future together</h1>
                </div>
                <div className="shape-life-section">
                    <div className="shape-life-each-section">
                        <img src="https://chopracentermeditation.com/assets/activating_divine_feminine/img/self.png" alt="" />
                        <h2>Heal</h2>
                        <p>Explore where you need healing and bring the power of the Divine Feminine and Musculineback into your daily existence to meet your true, whole self.</p>
                    </div>
                    <div className="shape-life-each-section">
                        <img src="https://chopracentermeditation.com/assets/activating_divine_feminine/img/relationship.png" alt="" />
                        <h2>Activate</h2>
                        <p>Tune into the Divine Feminine and Musculine within and develop trust in yourself to access the source of joy and fulfillment in your life.</p>
                    </div>
                    <div className="shape-life-each-section">
                        <img src="https://chopracentermeditation.com/assets/activating_divine_feminine/img/community.png" alt="" />
                        <h2>Unite</h2>
                        <p>Discover the effortless yet transformative power of merging the infinite potential of consciousness to action, as you encounter union with the Divine Feminine and Musculine.</p>
                    </div>
                </div>
            </div>
            <div className="join-us">
                <h1>
                    Join us on this healing journey
                </h1>
                <p>
                    In this beautiful series, we will be exploring the role of the Divine Feminine and Musculine in a free meditation experience. Along the way, you'll find additional resources and support in our Healing journey to guide us individually and collectively on the path to transformation.
                </p>
                <ul>
                    <li>
                        <Link to={`/journal`}>
                            JOURNAL
                        </Link>
                    </li>
                    <li>
                        <Link to={`/meditation`}>
                            MEDITATION
                        </Link>
                    </li>
                    <li>
                        <Link to={`/affrimation`}>
                            AFFRIMATION
                        </Link>
                    </li>
                    <li>
                        <Link to={`/visionboard`}>
                            VISION BOARD
                        </Link>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}