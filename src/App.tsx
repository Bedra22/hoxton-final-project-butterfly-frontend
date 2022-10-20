
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
import { EachJournal } from './pages/EachJournal';
import { EachAffrimation } from './pages/EachAffrimation';
import { EachMedatiton } from './pages/EachMeditation';

type User = {
  id: number;
  email: string;
  password: string;
}

function App() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    if (localStorage.usertoken) {
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
        <Route path='/signup' element={<SignUpPage setUser={setUser} />} />
        <Route path='/home' element={<HomePage user={user}
        />} />
        <Route path='/login' element={<LogInPage setUser={setUser} />} />
        <Route path='/' element={user ? <HomePage user={user} /> : <Navigate to='/signup' />} />
        <Route path='/journal' element={<Journal user={user} />} />
        <Route path='/journal/:id' element={<EachJournal />} />
        <Route path='/meditation' element={<Meditation />} />
        <Route path='/eachmeditation' element={<EachMedatiton />} />
        <Route path='/affrimation' element={<Affrimaton />} />
        <Route path='/affrimation/:id' element={<EachAffrimation />} />
        <Route path='/visionboard' element={<VisionBoard />} />
      </Routes>
    </div>
  )
}

export default App
