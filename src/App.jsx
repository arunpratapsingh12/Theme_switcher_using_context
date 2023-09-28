
import { useEffect, useState } from 'react';
import './App.css'
import Card from './components/Card';
import ThemeButton from './components/ThemeButton';
import { Themeprovider } from "./context/Themecontext.jsx";

function App() {

  const [themeMode, setthemeMode] = useState("light");
  
  const darkMode = () => {
    setthemeMode("dark");
  }

    const lightMode = () => {
      setthemeMode("light");
    };
  
  useEffect(() => {
    const a = document.querySelector("html").classList.remove("light", "dark");
    console.log(a)
    const b = document.querySelector("html").classList.add(themeMode);
    console.log(b)
  }, [themeMode]);

  return (
    <Themeprovider value={{ themeMode, darkMode, lightMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </Themeprovider>
  );
}

export default App
