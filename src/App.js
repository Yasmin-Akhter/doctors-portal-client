import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import ContactUs from './Pages/CntactUs/ContactUs';
import Reviews from './Pages/Reviews/Revies';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/RequireAuth';
import PasswordReset from './Pages/Login/PasswordReset';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={<RequireAuth>
          <Appointment></Appointment>
        </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>
        }>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
        </Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/contactUs' element={<ContactUs></ContactUs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/password-reset' element={<PasswordReset></PasswordReset>}></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
