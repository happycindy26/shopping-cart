import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import Navbar from './components/Navbar';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import { SearchBarProvider } from './contexts/SearchBarContext';

function App() {
  return (
    <ShoppingCartProvider>
      <SearchBarProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </SearchBarProvider>
    </ShoppingCartProvider>
  );
}

export default App;
