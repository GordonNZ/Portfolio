import React from 'react';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Main from './components/Main';
import '../App.css';

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Main />
      <footer></footer>
    </div>
  );
}
