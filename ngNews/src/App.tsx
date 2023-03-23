import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full">
      <Router>
        <Header />
        <h1>App</h1>
      </Router>
    </div>
  );
}

export default App;
