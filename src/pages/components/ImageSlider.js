import React, { useState } from 'react';
import { ToDoSlides } from './ToDoSlides';
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
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div className='slider'>
      <FaAngleLeft className='leftArrow arrow' onClick={prevSlide} />
      <FaAngleRight className='rightArrow arrow' onClick={nextSlide} />
      {ToDoSlides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='todo web app' className='image' />
            )}
          </div>
        );
      })}
    </div>
  );
}
