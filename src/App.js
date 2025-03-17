import React from "react";
import Navbar from "./components/Navbar"
import Dashboard from "./pages/dashboard";
import NewsGrid from "./pages/NewsGrid";

function App() {
  return (
    <>
    <Navbar />
    <Dashboard />
    <NewsGrid />
    </>
  );
}

export default App;
