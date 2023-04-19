import React from 'react';

export default function NavBar() {
  return (
    <nav>
      <img src='' alt='logo'></img>
      <ul>
        <a href='https://linkedin.com' target='blank'>
          <li>Linkedin</li>
        </a>
        <a href='https://github.com' target='blank'>
          <li>Github</li>
        </a>
        <li>Resume</li>
      </ul>
    </nav>
  );
}
