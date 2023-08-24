// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TextAnalsis from "./components/TextAnalsis";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./style.css"
import { useState } from "react";
import About from "./components/About";
function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#202A44";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode}></Navbar>
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextAnalsis />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
      <Footer mode={mode}></Footer>
    </>
  );
}

export default App;
