
import './App.css'
import { Link, Route, Routes } from "react-router-dom";
import { FirstPage } from "./pages/FirstPage";
import { LogInPage } from './pages/LognPage';
function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<FirstPage />} />
        <Route path='/login' element={<LogInPage />} />
      </Routes>

    </div>
  )
}

export default App
