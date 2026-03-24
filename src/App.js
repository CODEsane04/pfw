import './App.css';
import Navbar from './Navbar.js'
import Home from './Home.js'
import Projects from './Projects.js'; // 1. Import your Projects component
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // 2. Import the routing tools

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>

      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

    </BrowserRouter>
      
    </div>
  );
}

export default App;
