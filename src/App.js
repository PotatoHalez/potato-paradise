import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/NavBar';
import AboutPotato from './pages/AboutPotato';
import Login from './pages/Login';
import PotatoPics from './pages/PotatoPics';
import Home from './pages/Home';


function App() {
  return (
<Router>
  <Navbar />
  <Routes>
    <Route path='/' element={<AboutPotato />} />
    <Route path='/Login' element={Login} />
    <Route path='/PotatoPics' element={PotatoPics} />
  </Routes>
</Router>
  );
};

export default App;
