
import './App.css'
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { SignUpPage } from "./pages/SignUpPage";
import { LogInPage } from './pages/LogInPage';
import { useEffect, useState } from 'react';
import { HomePage } from './pages/HomePage';
import { Journal } from './pages/Journal';
import { Meditation } from './pages/Meditation';
import { Affrimaton } from './pages/Affrimation';
import { VisionBoard } from './pages/VisionBoard';

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
  console.log("UserToken is", localStorage.usertoken)


  return (
    <div className="App">
      <Routes>
        <Route path='/signup' element={<SignUpPage setUser={setUser} setToken={setToken} />} />
        <Route path='/home' element={<HomePage
        // user={user} setUser={setUser} setToken={setToken}
        />} />
        <Route path='/login' element={<LogInPage setUser={setUser} setToken={setToken} />} />
        <Route path='/' element={user ? <HomePage /> : <Navigate to='/signup' />} />
        <Route path='journal' element={<Journal />} />
        <Route path='meditation' element={<Meditation />} />
        <Route path='affrimation' element={<Affrimaton />} />
        <Route path='visionboard' element={<VisionBoard />} />
      </Routes>
    </div>
  )
}

export default App
