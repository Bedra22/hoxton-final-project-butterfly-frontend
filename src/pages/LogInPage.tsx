import { useNavigate } from "react-router-dom"

export function LogInPage({ setUser, setToken }) {
    const navigate = useNavigate()
    return (
        <div className="login-page">
            <img src="images/pinkorange.jpg" alt="Background" />
            <div className="login">
                <form
                    className="login-form"
                    onSubmit={event => {
                        event.preventDefault()
                        fetch('http://localhost:5000/log-in', {
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
                                    setUser(data.user)
                                    setToken(data.token)
                                    navigate('/home')
                                }
                                console.log(data)
                            })
                    }}
                >
                    <h1>Welcome Back🦋</h1>
                    <label>
                        <input type="email" name="email" placeholder="Enter your Email..." required />
                    </label>
                    <label>
                        <input type="password" name="password" placeholder="Enter your Password..." required />
                    </label>
                    <button >
                        Join
                    </button>
                </form>
            </div>
        </div>
    )
}