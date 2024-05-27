import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import Properties from './components/properties';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
  <div className='container'>
    <Routes>
      <Route path='login' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
    </Routes>
  </div>

  )
}

export default App;
