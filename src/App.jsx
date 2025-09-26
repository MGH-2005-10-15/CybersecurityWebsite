/* App.jsx */
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { useState } from 'react'
import Docs from './pages/Doc';
import Network from './pages/Docs/Network/Network';
import Signup from './pages/Signup'
import Login from './pages/Login';

function App() {

  const [theme, setTheme] = useState(true); // true = dark

  return (
    <>
      <Routes data-theme={theme ? 'dark':'light'}>
        <Route path='/' element={<Home theme={theme} setTheme={setTheme}></Home>}></Route>
        <Route path='/docs' element={<Docs theme={theme} setTheme={setTheme}></Docs>}></Route>
        <Route path='/docs/network' element={<Network theme={theme} setTheme={setTheme}></Network>}></Route>
        <Route path='/signup' element={<Signup theme={theme} setTheme={setTheme}></Signup>}></Route>
        <Route path='/login' element={<Login theme={theme} setTheme={setTheme}></Login>}></Route>
      </Routes>
    </>
  )
}

export default App
