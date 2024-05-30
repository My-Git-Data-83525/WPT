import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import Properties from './components/properties';
import { Route, Routes } from 'react-router-dom';
import AddProperties from './components/addProperties';

function App() {
  return (
  <div className='container'>
    <Routes>
      <Route path='' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='properties' element={<Properties/>}/>
      <Route path='addproperties' element={<AddProperties/>}/>
    </Routes>
  </div>

  )
}

export default App;
