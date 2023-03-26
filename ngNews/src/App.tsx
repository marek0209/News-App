import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import NewsContainer from "./components/NewsContainer/NewsContainer";
import { store } from "./store";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import UrlChecker from "./components/UrlChecker/UrlChecker";
import { Country } from "./types/countryTypes";

function App() {
  return (
    <div className="w-full  ">
      <Provider store={store}>
        <Router>
          <Header />
          <Sidebar />
          <UrlChecker />
          <Routes>
            <Route path="/country/:country" element={<NewsContainer />} />
            <Route path="/" element={<NewsContainer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
