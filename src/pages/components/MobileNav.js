import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { VscFilePdf } from 'react-icons/vsc';
import { HiMenu } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

export default function MobileNavBar() {
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
            target='_blank'
            className='flex'
            onClick={closeMobileMenu}
            rel='noreferrer'
          >
            <FaLinkedin className='icons' />
            <li>Linkedin</li>
          </a>
          <a
            href='https://github.com/GordonNZ'
            target='_blank'
            className='flex'
            onClick={closeMobileMenu}
            rel='noreferrer'
          >
            <FaGithub className='icons' />
            <li>Github</li>
          </a>
          <a
            href='Gordon Zam CV.pdf'
            className='flex resume'
            target='_blank'
            rel='noreferrer'
          >
            <VscFilePdf className='icons' />
            <li>Resume</li>
          </a>
        </ul>
      )}
    </div>
  );
}
