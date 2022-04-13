
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Shared/Header/Header'
import Home from './pages/Home/Home/Home'
import About from './pages/About/About'
import Footer from './pages/Shared/Footer/Footer'


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/' element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
