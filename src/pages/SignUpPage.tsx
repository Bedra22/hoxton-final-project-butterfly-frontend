import { Link } from "react-router-dom"

export function SignUpPage({ setUser }) {
    return (
        <div className='fq-e-pare'>
            <div className='intro-page'>

                <img src="images/background.png" alt="bluesky" className='bluesky' />
                <img src="images/meteor.png" alt="Meteor" className='meteor' />
                <div className='intro-hello'>
                    <h1>Welcome To our <h2> BUTTERFLY </h2>  community</h1>
                    <p>...where you'll learn to use positive psychology to boost your happines.</p>
                </div>
                <img src="images/4.png" alt="4" className='img1' />
                <img src="images/5.png" alt="5" className='img2' />
                <img src="images/6.png" alt="6" className='img3' />

            </div>
            <div className="text-in-intro">
                <div className="join-us-text">
                    <h1>
                        Join us in this wonderful journey of a better version of ourselves
                    </h1>
                </div>
                <div className="sign">
                    <form
                        className="sign-in-form"
                        onSubmit={event => {
                            event.preventDefault()
                            fetch('http://localhost:5000/sign-up', {
                                method: 'POST',
                                headers: {
                                    'Content-type': 'application/json'
                                },
                                body: JSON.stringify({
                                    email: event.target.email.value,
                                    password: event.target.password.value
                                })
                            })
                                .then(resp => resp.json())
                                .then(data => {
                                    if (data.error) {
                                        alert(data.error)
                                    } else {
                                        setUser(data)
                                    }
                                    console.log(data)
                                })
                        }}
                    >
                        <h1>Welcome 🦋</h1>
                        <label>
                            <input type="email" name="email" placeholder="Enter your Email..." required />
                        </label>
                        <label>
                            <input type="password" name="password" placeholder="Enter your Password..." required />
                        </label>
                        <button>
                            Join
                        </button>
                        <p>Already have an account:
                            <Link to='/login'>
                                Join in
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}