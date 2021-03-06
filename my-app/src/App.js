import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/home';
import MatchingCards from './pages/matchingCards';
import Pangrams from './pages/pangrams';
import Info from './pages/info';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/matchingCards' element={<MatchingCards/>} />
        <Route path='/pangrams' element={<Pangrams/>} />
        <Route path='/info' element={<Info/>} />
    </Routes>
    </Router>
);
}
  
export default App;
