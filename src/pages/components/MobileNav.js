import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { VscFilePdf } from 'react-icons/vsc';
import { HiMenu } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

export default function MobileNavBar() {
  const RESUME = 'http://localhost:3000/GordonZamCV.pdf';
  const downloadResume = () => {
    window.open(RESUME);
    setOpen(false);
  };
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <HiMenu className='hamburger' onClick={() => setOpen(!open)} />
  );
  const closeIcon = (
    <IoClose className='hamburger' onClick={() => setOpen(!open)} />
  );

  const closeMobileMenu = () => setOpen(false);
  return (
    <div className='mobileNav'>
      {open ? closeIcon : hamburgerIcon}
      {open && (
        <ul className='mobileNavList'>
          <a
            href='https://www.linkedin.com/in/gordonzam/'
            target='blank'
            className='flex'
            onClick={closeMobileMenu}
          >
            <FaLinkedin className='icons' />
            <li>Linkedin</li>
          </a>
          <a
            href='https://github.com/GordonNZ'
            target='blank'
            className='flex'
            onClick={closeMobileMenu}
          >
            <FaGithub className='icons' />
            <li>Github</li>
          </a>
          <a href='#' className='flex resume' onClick={downloadResume}>
            <VscFilePdf className='icons' />
            <li>Resume</li>
          </a>
        </ul>
      )}
    </div>
  );
}
