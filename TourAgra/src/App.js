import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PackageCarousel from './components/PackageCarousel';
import Package from './components/Package';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar title='GoldenTours'></Navbar>
      <Hero></Hero>
      <PackageCarousel />
    </div>
  );
}


export default App;
