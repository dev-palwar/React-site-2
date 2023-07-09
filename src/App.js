import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Videos from './Components/Videos';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Components/About';

// {
//     document.getElementsByClassName('chakra-stack')[0].classList.add('videos-css') 
// }
function App() {
  return (
    <>
    <Router>
      <nav>
        <Navbar />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
    </Router>
    </>
  );
}


export default App;
