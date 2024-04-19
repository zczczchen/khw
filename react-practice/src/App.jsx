import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import {
//   Route,
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Counter from "./pages/Counter";
import Magazine from "./pages/Magazine";

import "./css/reset.css";
import "./css/layout.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(
    localStorage.getItem("kono-token")
  );

  return (
    <BrowserRouter>
      <div className='wrap'>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/login'
            element={
              <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            }
          />
          <Route
            path='/register'
            element={
              <Register isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            }
          />
          <Route path='/counter' element={<Counter />} />
          <Route path='/magazines/:titleId' element={<Magazine />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

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

export default App;
