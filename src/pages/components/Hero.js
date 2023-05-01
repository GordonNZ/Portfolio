import React, { useEffect, useState } from 'react';
import './Hero.css';
import axios from 'axios';
import gordon from '../../assets//img/gordon.jpg';

export default function Hero() {
  const [background, setBackground] = useState('');

  const ACCESSKEY = process.env.REACT_APP_ACCESS_KEY;

  useEffect(() => {
    const ranNum = Math.floor(Math.random() * 20);
    // console.log(ranNum);
    const getBackground = async () => {
      try {
        //await - waits for data to be ready while running rest of js code
        const res = await axios.get(
          `https://api.unsplash.com/search/photos/?client_id=${ACCESSKEY}&query=new zealand mountain&orientation=landscape&per_page=20`
        );
        setBackground(res.data.results[ranNum].urls.regular);
        // console.log(res.data.results);
      } catch (err) {
        // catch is run only if there is an error in try
        console.log('Caught an error.', err);
      }
    };
    getBackground();
  }, []);

  const time = new Date().getHours();
  const greeting =
    time < 12
      ? 'Good Morning!'
      : time < 18
      ? 'Good Afternoon!'
      : 'Good Evening!';

  return (
    <div className='heroBg' style={{ backgroundImage: `url(${background})` }}>
      <div className='heroOverlay'>
        <div className='heroLeftContainer'>
          <h1 className='heroTitle'>{greeting} Welcome to my portfolio!</h1>
          <h1 className='heroName'>Gordon Zam</h1>

          <div className='heroDescBg'>
            <h2 className='heroDesc'>Aspiring Frontend Developer</h2>
          </div>
          <p className='heroP'>
            I have a passion for innovative tech and a love for learning
          </p>
        </div>
        <img
          src={gordon}
          alt='Gordon Zam'
          className='heroImg
          '
        ></img>
      </div>
    </div>
  );
}
