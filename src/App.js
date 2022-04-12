
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Shared/Header/Header'
import Home from './pages/Home/Home/Home'
import About from './pages/About/About'


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
