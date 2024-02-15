import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import "./css/layout.css";

function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 425px)" });

  return (
    <BrowserRouter>
      <header className='header'>
        <nav className='nav'>
          <Link className='logo-link' to='/'>
            {isTabletOrMobile ? (
              <img className='logo-img' src='/logo_s.svg' alt='Logo' />
            ) : (
              <img className='logo-img' src='/logo.svg' alt='Logo' />
            )}
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
