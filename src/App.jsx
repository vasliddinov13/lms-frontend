import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SiteLayout from './layouts/site/SiteLayout'
import Home from './pages/home/Home'
import Auth from './auth/Auth'
import Register from './auth/Register'
import Verify from './auth/Verify'
import Login from './auth/Login'
import Forgot from './auth/Forgot'
import Reset from './auth/Reset'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SiteLayout/>}>
          <Route path='/home' element={<Home/>}/>
        </Route>
        <Route path='/auth' element={<Auth/>}>
          <Route path='/auth/register' element={<Register/>}/>
          <Route path='/auth/verify' element={<Verify/>}/>
          <Route path='/auth/login' element={<Login/>}/>
          <Route path='/auth/forgot' element={<Forgot/>}/>
          <Route path='/auth/reset' element={<Reset/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
