import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import FeaturedSection from './components/FeaturedSection';
import Footer from './components/Footer';
import BudaCastle from './components/attractions/BudaCastle';
import ChainBridge from './components/attractions/ChainBridge';
import Parliament from './components/attractions/Parliament';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <FeaturedSection />
      <Parliament />
      <BudaCastle />
      <ChainBridge />
      <Footer />
    </>
  );

}

export default App
