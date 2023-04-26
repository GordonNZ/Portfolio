import React from 'react';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';
import '../App.css';

export default function Home() {
  // const blob = document.querySelector('.blob');
  // document.body.onpointermove = (e) => {
  //   const { clientX, clientY } = e;

  //   blob.style.left = `${clientX}px`;
  //   blob.style.top = `${clientY}px`;
  // };
  return (
    <div className='homePage'>
      <NavBar />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}
