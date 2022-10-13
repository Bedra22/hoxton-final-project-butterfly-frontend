
import './App.css'
import { Link, Route, Routes } from "react-router-dom";
import { SignUpPage } from "./pages/SignUpPage";
import { LogInPage } from './pages/LogInPage';
import { useEffect, useState } from 'react';
import { BothLogSign } from './pages/BothLogSign';
import { HomePage } from './pages/HomePage';
import { InThHomePage } from './pages/InThHomePage';

function App() {
  const [user, setUser] = useState(null)



  function signUp(data) {
    setUser(data)
    localStorage.token = data.token
  }

  useEffect(() => {
    if (localStorage.token) {
      fetch('http://localhost:5000/validation', {
        headers: {
          Authorization: localStorage.token
        }
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.error) {
            alert(data.error)
          } else {
            signUp(data)
          }
        })
    }
  }, [])

  return (
    <div className="App">
      {user ? (<InThHomePage />) : (<BothLogSign signUp={signUp} />)}

    </div>
  )
}

export default App
