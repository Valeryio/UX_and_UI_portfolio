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
        <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} ></Route>
              <Route index element={<Home />} ></Route>
              <Route path="/about" element={<About />} ></Route>
              <Route path="/contact" element={<Contact />} ></Route>
            </Routes>
{/* 
            <div>
              <a href="https://vite.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>
              <p>
                Edit <code>src/App.jsx</code> and save to test HMR
              </p>
            </div>
            <p className="read-the-docs">
              Click on the Vite and React logos to learn more
            </p> 
*/}

          </main>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
