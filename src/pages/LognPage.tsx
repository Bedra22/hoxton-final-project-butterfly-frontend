export function LogInPage() {
    return (
        <div className="login-page">
            <img src="images/pinkorange.jpg" alt="Background" />
            <div className="login">
                <form
                    className="login-form"
                    onSubmit={event => {
                        event.preventDefault()
                    }}
                >
                    <h1>Welcome Back🦋</h1>
                    <label>
                        <input type="email" name="email" placeholder="Enter your Email..." required />
                    </label>
                    <label>
                        <input type="password" name="password" placeholder="Enter your Password..." required />
                    </label>
                    <button>
                        Join
                    </button>
                </form>
            </div>
        </div>
    )
}