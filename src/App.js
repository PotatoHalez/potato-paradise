import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/NavBar';
import AboutPotato from './pages/AboutPotato';
import Quotes from './pages/Quotes';
import PotatoPics from './pages/PotatoPics';
import Home from './pages/Home';
import PotatoGame from './components/PotatoGame';
import './css/App.css'


function App() {
  const [theme, setTheme] = useState('day');

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'day' ? 'night' : 'day'));
  };

  return (
<Router>
  <div className={`app ${theme}`}>
  <Navbar toggleTheme={toggleTheme} />
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/AboutPotato' element={<AboutPotato/>} />
    <Route path='/Quotes' element={<Quotes/>} />
    <Route path='/PotatoPics' element={<PotatoPics/>} />
    <Route path='/PotatoGame' element={<PotatoGame/>} />
  </Routes>
  </div>
</Router>
  );
};

export default App;
