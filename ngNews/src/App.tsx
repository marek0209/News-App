import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import NewsContainer from "./components/NewsContainer/NewsContainer";
import { store } from "./store";
import SideBar from "./components/Sidebar/Sidebar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full overflow-hidden">
      <Provider store={store}>
        <Router>
          <Header />
          <SideBar />
          <NewsContainer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
