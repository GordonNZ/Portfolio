import React, { useEffect, useState } from 'react';
import './Hero.css';
import axios from 'axios';

export default function Hero() {
  const [background, setBackground] = useState('');

  const ranNum = Math.floor(Math.random() * 10);

  useEffect(() => {
    axios
      .get(
        'https://api.unsplash.com/search/photos/?client_id=dZHNOHog8e0vPnC-yF-_B3pcINmMfA-GcgMTOVaJBPo&query=new zealand landscape&orientation=landscape'
      )
      .then((res) => setBackground(res.data.results[ranNum].urls.full))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='hero' style={{ backgroundImage: `url(${background})` }}>
      <div className='heroLeftContainer'>
        <h1 className='heroTitle'>Good Morning! Welcome to my portfolio!</h1>
        <h1 className='heroName'>
          <span className='HeroNameOnly'>Gordon Zam</span>
        </h1>
        <h2 className='heroDesc'>Aspiring Frontend Developer</h2>
        <p className='heroP'>
          I have a passion for innovative tech and a love for learning.
        </p>
      </div>
      <img src='{background}' alt='Gordon Zam'></img>
    </div>
  );
}
