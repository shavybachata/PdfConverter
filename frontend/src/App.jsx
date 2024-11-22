import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";


function App() {
  const appStyle = {
    backgroundImage: "url('https://cdn.prod.website-files.com/655799ca687df0d5ad6a991e/655799ca687df0d5ad6a999e_Hero%20bg.webp')",
    backgroundSize: 'cover',
    overflow: "hidden",
    height: "100vh", 
    backgroundPosition: 'center',
    height: '100vh',
    margin: 0,
  };

  return (
    <div style={appStyle}>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
