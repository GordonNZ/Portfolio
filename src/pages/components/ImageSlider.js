import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import './Slider.css';

export default function ImageSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const slideStyles = {
    backgroundImage: `url(${slides[current].image})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    minHeight: '60vh',
  };
  // console.log(slides[current].image, 'hello from imageslider');
  return (
    <div className='slider'>
      <FaAngleLeft className='leftArrow arrow' onClick={prevSlide} />
      <FaAngleRight className='rightArrow arrow' onClick={nextSlide} />
      <div style={slideStyles}></div>
    </div>
  );
}
