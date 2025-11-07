import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Parrafo from "./components/Parrafo.jsx";
import Boton from "./components/Boton.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen bg-gray-100 p-6 flex flex-col items-center gap-6">
      <Parrafo />
      <Boton />
    </main>
  );
}

export default App;
