import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  const email = 'Gordonzam@gmail.com';
  return (
    <div className='flex footer'>
      <h2 className='connectH2'>Connect with me!</h2>
      <div className='flex'>
        <a
          href='https://www.linkedin.com/in/gordonzam/'
          target='_blank'
          className='flex connectLink'
          rel='noreferrer'
        >
          <FaLinkedin className='icons' />
          <p className='iconText'>Linkedin</p>
        </a>
        <a
          href='https://www.Github.com/GordonNZ'
          target='_blank'
          className='flex connectLink'
          rel='noreferrer'
        >
          <FaGithub className='icons' />
          <p className='iconText'>GitHub</p>
        </a>
      </div>
      <h3 className='contactEmailH3'>Email</h3>
      <a href={`mailto:${email}`} className='contactEmail'>
        Gordonzam@gmail.com
      </a>
    </div>
  );
}
