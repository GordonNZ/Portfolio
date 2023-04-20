import React from 'react';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav>
      {/* <img src='' alt='logo'></img> */}
      <h1 className='navLogo'>Gordon Zam</h1>
      <ul className='navList'>
        <a href='https://www.linkedin.com/in/gordonzam/' target='blank'>
          <li>Linkedin</li>
        </a>
        <a href='https://github.com/GordonNZ' target='blank'>
          <li>Github</li>
        </a>
        <li>Resume</li>
      </ul>
    </nav>
  );
}
