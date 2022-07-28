import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number < 0) {
      return people.length - 1;
    }
    if (number > people.length - 1) {
      return 0;
    } else return number;
  };

  const prevImage = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const nextImage = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const randomImage = () => {
    let randomIndex = Math.floor(Math.random() * people.length);

    if (randomIndex === index) {
      const randomIndex = index - 1;
      setIndex(checkNumber(randomIndex));
      console.log(randomIndex);
    }
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>

      <div className='button-container'>
        <button className='prev-btn' onClick={prevImage}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextImage}>
          <FaChevronRight />
        </button>
        <button className='random-btn' onClick={randomImage}>
          Surprise Me
        </button>
      </div>
    </article>
  );
};

export default Review;
