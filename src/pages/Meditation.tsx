import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";

export function Meditation() {
    return (
        <div className="meditation">
            <div className="butterfly-medatition">
                <img src="https://www.icegif.com/wp-content/uploads/butterfly-icegif-2.gif" alt="" />
                <h2>Mediatate with us for a peacefull mind</h2>
            </div>
            <div className="meditation-info">
                <div className="each-meditation-info">
                    <img src="https://static.wixstatic.com/media/11062b_85a736d876694d049a83fb8cdc32d539~mv2.jpeg/v1/fill/w_1899,h_521,al_t,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_85a736d876694d049a83fb8cdc32d539~mv2.jpeg" alt="" />
                    <div className="each-meditation-inf-section">
                        <h1>Meditation</h1>
                        <h2>That Lightens Your Mind</h2>
                        <Link to='/eachmeditation' >
                            <button>
                                JOIN
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="each-meditation-info-1">
                    <div className="each-meditation-inf-section-1">
                        <h1>Meditation for everyone</h1>
                        <p>Whether you are a seasoned meditator or you are just getting started, Butterfly gives you access to hundreds of beautifully crafted tracks for all levels. From advanced meditations to get you into deep states of mind to bite-sized sessions for busy people – Butterfly has you covered.</p>
                    </div>
                    <img src="https://static.mindvalley.com/public/assets/2019/07/8MOR_omvana-lp-img-meditationforeveryone_s508.png" alt="" />
                </div>
                <div className="each-meditation-info-2">
                    <img src="https://static.wixstatic.com/media/11062b_78f33be5809948e3986564feed028d7d~mv2.jpg/v1/fill/w_1025,h_524,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_78f33be5809948e3986564feed028d7d~mv2.jpg" alt="" />
                    <div className="each-meditation-inf-section-2">
                        <img src="https://static.wixstatic.com/media/e0dad8_af22b412c78a4495b2d9125fd9d5c48a~mv2.jpg/v1/fill/w_874,h_524,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e0dad8_af22b412c78a4495b2d9125fd9d5c48a~mv2.jpg" alt="" />
                        <h1>Release Body and Mind</h1>
                        <p>Let's move together and energize body and mind. For half an hour we release stress from the body with light exercises to be prepared for the day.</p>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}