import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import Navbar from './components/Navbar';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import { SearchBarProvider } from './contexts/SearchBarContext';
import Fruit from './pages/Fruit';
import Juice from './pages/Juice';
import User from './pages/User';

function App() {
  return (
    <ShoppingCartProvider>
      <SearchBarProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<User />} />
          <Route path="/store/fruit" element={<Fruit /> } />
          <Route path="/store/juice" element={<Juice />} />
        </Routes>
      </SearchBarProvider>
    </ShoppingCartProvider>
  );
}

export default App;
