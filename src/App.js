import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import History from "./pages/History";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./styles/App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;