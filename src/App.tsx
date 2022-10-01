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
import Fruit from './pages/Fruit';
import Juice from './pages/Juice';

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
            <Route path="/fruit" element={<Fruit /> } />
            <Route path="/juice" element={<Juice />} />
          </Routes>
        </SignInRegisterProvider>
      </SearchBarProvider>
    </ShoppingCartProvider>
  );
}

export default App;
