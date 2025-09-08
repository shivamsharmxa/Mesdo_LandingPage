import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { LandingPage } from "./screens/LandingPage";
import { AboutPage } from "./screens/AboutPage";
import { BlogsPage } from "./screens/BlogsPage";
import { ContactPage } from "./screens/ContactPage";

function App() {
  return (
    <Router>
      <div className="bg-white flex flex-col items-center justify-center w-full min-h-screen">
        <Header />
        <main className="bg-white w-full pt-16">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;