import React from 'react'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

import Navbar from './components/Navbar'

import "./style.css"


import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
   <BrowserRouter>
   <Navbar/>
    <Routes>
        <Route path="/" element={ <Home login="false"/>}  /> 
        <Route path="/login" element={ <Login login="false" /> } /> 
        <Route path="/signup" element={ <Signup login="false" /> } />
    </Routes>
    
   </BrowserRouter>
  )
}

export default App