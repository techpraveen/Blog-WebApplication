import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Signin from './pages/Signin'
import Projects from './pages/Projects' 
import Header from './components/Header'
import Footer from './components/Footer' 

export default function App() {
  return (
    <BrowserRouter >
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/sign-in' element={<Signin/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
       
      <Route path='/projects' element={<Projects/>} />
      
    </Routes>
    <Footer/>
      
    </BrowserRouter>
  )
}
