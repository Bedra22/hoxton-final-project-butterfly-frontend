
import './App.css'
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { SignUpPage } from "./pages/SignUpPage";
import { LogInPage } from './pages/LogInPage';
import { useEffect, useState } from 'react';
import { HomePage } from './pages/HomePage';

function App() {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(localStorage.usertoken)

  useEffect(() => {
    if (token) {
      fetch('http://localhost:5000/validation', {
        headers: {
          Authorization: localStorage.usertoken
        }
      })

        .then(resp => resp.json())
        .then(data => {
          if (data.error) {
            alert(data.error)
          } else {
            setUser(data.user)
            setToken(data.token)
            localStorage.usertoken = data.token
          }
        })
    }
  }, [])
  console.log(user)
  console.log("localstorage is", localStorage.usertoken)


  return (
    <div className="App">
      <Routes>
        <Route path='/signup' element={<SignUpPage setUser={setUser} />} />
        <Route path='/home' element={<HomePage
        // user={user} setUser={setUser} setToken={setToken}
        />} />
        <Route path='/login' element={<LogInPage setUser={setUser} />} />
        <Route path='/' element={user ? <HomePage /> : <Navigate to='/signup' />} />
      </Routes>
    </div>
  )
}

export default App
