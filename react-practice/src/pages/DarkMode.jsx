import { createContext, useContext, useState } from "react";
import "../css/darkmode.css";

const ThemeContext = createContext("light");

export default function DarkMode() {
  const [theme, setTheme] = useState("light");
  return (
    <div className='darkmode-wrap'>
      <ThemeContext.Provider value={theme}>
        <Panel title={theme === "dark" ? "Goodbye" : "Welcome"}>
          {theme === "dark" ? (
            <img
              className='chess-img'
              src='/chess-knight-regular.svg'
              alt='chess'
            />
          ) : (
            <img
              className='chess-img'
              src='/chess-knight-solid.svg'
              alt='chess'
            />
          )}
        </Panel>
      </ThemeContext.Provider>
      <Button
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        Toggle theme
      </Button>
    </div>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = "panel-" + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children, onClick }) {
  return (
    <button className='button' onClick={onClick}>
      {children}
    </button>
  );
}
