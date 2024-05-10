import { useContext } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import CurrentUserContext from "../components/CurrentUserContext";
import "../css/header.css";

function Header() {
  const { isLoggedIn, setIsLoggedIn } = useContext(CurrentUserContext);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 425px)" });

  return (
    <header className='header'>
      <Link className='logo-link' to='/'>
        {isTabletOrMobile ? (
          <img className='logo-img' src='/logo_s.svg' alt='Logo' />
        ) : (
          <img className='logo-img' src='/logo.svg' alt='Logo' />
        )}
      </Link>

      {!isLoggedIn ? (
        <nav className='nav'>
          <Link className='login-entry' to='/login'>
            登入
          </Link>
          <Link className='register-entry' to='/register'>
            免費註冊
          </Link>
        </nav>
      ) : (
        <nav className='nav'>
          <Link
            className='logout-entry'
            to='/'
            onClick={() => {
              setIsLoggedIn(null);
              localStorage.removeItem("kono-token");
            }}
          >
            登出
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
