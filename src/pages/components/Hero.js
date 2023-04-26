import React, { useEffect, useState } from 'react';
import './Hero.css';
import axios from 'axios';
//npm i @react-spring/parallax
// import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import gordon from '../../assets//img/gordon.jpg';

export default function Hero() {
  const [background, setBackground] = useState('');

  const ranNum = Math.floor(Math.random() * 10);

  useEffect(() => {
    const getBackground = async () => {
      try {
        //await - waits for data to be ready while running rest of js code
        const res = await axios.get(
          'https://api.unsplash.com/search/photos/?client_id=dZHNOHog8e0vPnC-yF-_B3pcINmMfA-GcgMTOVaJBPo&query=new zealand landscape&orientation=landscape'
        );
        setBackground(res.data.results[ranNum].urls.full);
      } catch (err) {
        // catch is run only if there is an error in try
        console.log('Caught an error.', err);
      }
    };
    getBackground();
    // axios
    //   .get(
    //     'https://api.unsplash.com/search/photos/?client_id=dZHNOHog8e0vPnC-yF-_B3pcINmMfA-GcgMTOVaJBPo&query=new zealand landscape&orientation=landscape'
    //   )
    //   .then((res) => setBackground(res.data.results[ranNum].urls.full))
    //   .catch((err) => console.log(err));
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
