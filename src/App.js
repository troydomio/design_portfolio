import React from 'react'
import './App.css';
import DesktopNav from './components/HomePage/DesktopNav';
import Home from './components/Home';
import About from './components/About/About'
import Blog from './components/Blog/Blog'
import Portfolio from './components/Portfolio/Portfolio'
import PortfolioProject from './components/Portfolio/Dec2021/PortfolioProject';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import images from './projectdata.js'
import Careapp from './components/Portfolio/Jan 2022/Care App/careapp';



function App() {
  return (
    <div>
      <DesktopNav/>
      <Router>
        <Routes>
          <Route path='/' element={<Home images={images}/>}/>
        </Routes>
        <Routes>
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Routes>
          <Route path='/blog' element={<Blog/>}/>
        </Routes>
        <Routes>
          <Route path='/portfolio' element={<Portfolio/>}/>
        </Routes>
        <Routes>
          <Route path='/portfolio/portfolio-project' element={<PortfolioProject/>}/>
        </Routes>
        <Routes>
          <Route path='/portfolio/care-project' element={<Careapp/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
