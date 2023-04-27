import React from 'react';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';
import '../App.css';

export default function Home() {
  return (
    <div className='homePage'>
      <NavBar />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}
