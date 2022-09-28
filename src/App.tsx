import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import Navbar from './components/Navbar';
import User from './pages/User';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import { SearchBarProvider } from './contexts/SearchBarContext';
import { SignInRegisterProvider } from './contexts/SignInRegisterContext';

function App() {
  return (
    <ShoppingCartProvider>
      <SearchBarProvider>
        <SignInRegisterProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </SignInRegisterProvider>
      </SearchBarProvider>
    </ShoppingCartProvider>
  );
}

export default App;
