import React, { useState } from 'react';
import './NavBar.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { VscFilePdf } from 'react-icons/vsc';
import MobileNav from './MobileNav';
// import resume from '../../assets/Gordon Zam - Resume.pdf';

export default function NavBar() {
  const [position, setPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setPosition(position);
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  // console.log(position);

  return (
    <nav className={position > 700 ? 'sticky' : 'animateOut'}>
      {/* <img src='' alt='logo'></img> */}
      <h1 className='navLogo'>Gordon Zam</h1>
      <ul className='navList'>
        <a
          href='https://www.linkedin.com/in/gordonzam/'
          target='_blank'
          className='flex'
          rel='noreferrer'
        >
          <FaLinkedin className='icons' />
          <li>Linkedin</li>
        </a>
        <a
          href='https://github.com/GordonNZ'
          target='_blank'
          className='flex'
          rel='noreferrer'
        >
          <FaGithub className='icons' />
          <li>Github</li>
        </a>
        <a
          href='Gordon Zam - Resume.pdf'
          className='flex resume'
          target='_blank'
          rel='noreferrer'
        >
          <VscFilePdf className='icons' />
          <li>Resume</li>
        </a>
      </ul>
      <MobileNav />
    </nav>
  );
}
