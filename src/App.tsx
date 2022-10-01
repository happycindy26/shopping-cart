import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import Navbar from './components/Navbar';
import UserSignIn from './pages/UserSignIn';
import UserRegister from './pages/UserRegister';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import { SearchBarProvider } from './contexts/SearchBarContext';
import { SignInRegisterProvider } from './contexts/SignInRegisterContext';
import Fruits from './pages/Fruits';
import Juices from './pages/Juices';

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
            <Route path="/signin" element={<UserSignIn />} />
            <Route path="/register" element={<UserRegister />} />
            <Route path="/fruits" element={<Fruits /> } />
            <Route path="/juices" element={<Juices />} />
          </Routes>
        </SignInRegisterProvider>
      </SearchBarProvider>
    </ShoppingCartProvider>
  );
}

export default App;
