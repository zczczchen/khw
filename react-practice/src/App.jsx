import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Counter from "./pages/Counter";
import Library from "./pages/Library";
import Magazine from "./pages/Magazine";
import DarkMode from "./pages/DarkMode";
import Food from "./pages/Food";
import CurrentUserContext from "./components/CurrentUserContext";

import "./css/reset.css";
import "./css/layout.css";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const [isLoggedIn, setIsLoggedIn] = useState({
    konoToken: localStorage.getItem("konoToken"),
    konoKid: localStorage.getItem("konoKid"),
  });

  return (
    <CurrentUserContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      <div className='wrap'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/library' element={<Library />} />
          <Route path='/magazines/:titleId' element={<Magazine />} />
          <Route path='/darkmode' element={<DarkMode />} />
          <Route path='/food' element={<Food />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

// import {
//   Route,
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from "react-router-dom";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Home />}>
//       <Route path='counter' element={<Counter />} />
//       <Route path='magazines/golf_digest' element={<Magazine />} />
//     </Route>
//   )
// );

// function App() {
//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// }
