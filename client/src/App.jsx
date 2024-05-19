import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Signin from './pages/Signin'
import Projects from './pages/Projects' 
import Header from './components/Header'
import Footer from './components/Footer' 
import Dashboard from './pages/Dashboard'
import PrivateRoute from './components/privateRoute';
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute'
import CreatePost from './pages/createPost'
import UpdatePost from './pages/UpdatePost'
import PostPage from './pages/PostPage'
import Search from './pages/Search'




export default function App() {
  return (
    <BrowserRouter >
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/sign-in' element={<Signin/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/search' element={<Search />} />
     <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route> 
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/update-post/:postId' element={<UpdatePost />} />
        </Route>
        <Route path='/post/:postSlug' element={<PostPage/>} />
     
      
    </Routes>
    <Footer/>
      
    </BrowserRouter>
  )
}
