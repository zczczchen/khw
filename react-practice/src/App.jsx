import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import "./css/layout.css";

function App() {
  return (
    <BrowserRouter>
      <header className='header'>
        <nav className='nav'>
          <Link className='logo-link' to='/'>
            <img className='logo-img' src='/logo.svg' alt='Logo' />
          </Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/counter' element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
