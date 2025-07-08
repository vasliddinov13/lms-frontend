import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
/* pages */
import SiteLayout from './layouts/site/SiteLayout'
import Home from './pages/home/Home'
/* auth */
import Auth from './auth/Auth'
import Register from './auth/Register'
import Verify from './auth/Verify'
import Login from './auth/Login'
import Forgot from './auth/Forgot'
import Reset from './auth/Reset'
/* dashboard */
import DashLayout from './layouts/dashboard/DashLayout'
import TDashboard from './dashboart/teacher/TDashboard'
import TCourses from './dashboart/teacher/TCourses'
import Earnings from './dashboart/teacher/Earnings'
import Students from './dashboart/teacher/Students'
import EditProfile from './dashboart/commoncomponents/EditProfile'
import DeleteProfile from './dashboart/commoncomponents/DeleteProfile'
import SDashboard from './dashboart/student/SDashboard'
import SCourses from './dashboart/student/SCourses'
import CourseResume from './dashboart/student/CourseResume'
import PaymentInfo from './dashboart/student/PaymentInfo'
import Wishlist from './dashboart/student/Wishlist'

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
        <Route path='/teacher-dashboard' element={<DashLayout/>}>
          <Route path='' element={<TDashboard/>}/>
          <Route path='courses' element={<TCourses/>}/>
          <Route path='earnings' element={<Earnings/>}/>
          <Route path='students' element={<Students/>}/>
          <Route path='edit-profile' element={<EditProfile/>}/>
          <Route path='delete-profile' element={<DeleteProfile/>}/>
        </Route>
        <Route path='/student-dashboard' element={<DashLayout/>}>
          <Route path='' element={<SDashboard/>}/>
          <Route path='course' element={<SCourses/>}/>
          <Route path='course-resume' element={<CourseResume/>}/>
          <Route path='payment-info' element={<PaymentInfo/>}/>
          <Route path='wishlist' element={<Wishlist/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
