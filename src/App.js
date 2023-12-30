import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/NavBar';
import AboutPotato from './pages/AboutPotato';
import Quotes from './pages/Quotes';
import PotatoPics from './pages/PotatoPics';
import Home from './pages/Home';


function App() {
  return (
<Router>
  <Navbar />
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/AboutPotato' element={<AboutPotato/>} />
    <Route path='/Quotes' element={<Quotes/>} />
    <Route path='/PotatoPics' element={<PotatoPics/>} />
  </Routes>
</Router>
  );
};

export default App;
