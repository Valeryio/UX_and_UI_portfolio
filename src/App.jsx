import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Contact from "./pages/contact";
import About from "./pages/about";
import Home from "./pages/home";
import Footer from "./components/footer";

function App() {

  return (
    <>
      <BrowserRouter>
        <main 
        className="max-w-96r text-white m-auto bg-c-black-100 font-syne">
          <Header />
            <Routes>
              <Route path="/" element={<Home />} ></Route>
              <Route index element={<Home />} ></Route>
              <Route path="/about" element={<About />} ></Route>
              <Route path="/contact" element={<Contact />} ></Route>
            </Routes>
          <Footer />
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
