import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Contact from "./pages/contact";
import About from "./pages/about";
import Home from "./pages/home";
import Works from "./pages/works";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import ProjectDetails from "./pages/projectDetails";

function App() {

  return (
    <>
      <BrowserRouter>
        <main 
        className="max-w-96r text-white m-auto bg-c-black-100 font-syne">
          <Header />
            <Routes>
              <Route path="/home" element={<Home />} ></Route>
              <Route path="/" element={<Home />} ></Route>
              <Route index element={<Home />} ></Route>
              <Route path="/about" element={<About />} ></Route>
              <Route path="/works" element={<Works />} ></Route>
              <Route path="/works/:id" element={<ProjectDetails />} ></Route>
              <Route path="/contact" element={<Contact />} ></Route>
              <Route path="/login" element={<SignIn />} ></Route>
              <Route path="/inscription" element={<SignUp />} ></Route>
            </Routes>
          <Footer />
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
