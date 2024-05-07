import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Signin from './pages/Signin'
import Projects from './pages/Projects'
import Header from './components/Header'

export default function App() {
  return (
    <BrowserRouter >
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/signin' element={<Signin/>} />
      <Route path='/projects' element={<Projects/>} />
    </Routes>
      
    </BrowserRouter>
  )
}
