
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Shared/Header/Header'
import Home from './pages/Home/Home/Home'
import About from './pages/About/About'
import Footer from './pages/Shared/Footer/Footer'
import ServiceDetails from './pages/ServiceDetails/ServiceDetails';
import NotFound from './pages/Shared/NotFound/NotFound';
import Login from './pages/Login/Login';
import Register from './Register/Register';
import CheckOut from './pages/CheckOut/CheckOut'
import RequireAuth from './pages/RequireAuth/RequireAuth';
import AddService from './pages/AddService/AddService';
import ManageServices from './pages/ManageServices/ManageServices';
import { ToastContainer } from 'react-toastify';
import Order from './pages/Order/Order';



function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout/:serviceId' element={<RequireAuth>
          <CheckOut></CheckOut>
        </RequireAuth>}></Route>

        <Route path='/addservice' element={<RequireAuth>
          <AddService></AddService>
        </RequireAuth>}></Route>

        <Route path='/manage' element={<RequireAuth>
          <ManageServices></ManageServices>
        </RequireAuth>}></Route>


        <Route path='/orders' element={<RequireAuth>
          <Order></Order>
        </RequireAuth>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
