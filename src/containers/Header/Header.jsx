import React from 'react'
import {images} from '../../constants/index.js';
import {SubHeading} from '../../components/index.js';
import './Header.css';

const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
        <SubHeading title="Chase the new flavour" />
        <h1 className='app__header-h1'>The Key to Fine Dining</h1>
        <p className='p__opensans' style={{margin: '2rem 0'}}> Unveiling a World of Culinary Excellence and Refined Dining, Where Every Dish Tells a Story and Every Experience is an Invitation to Indulge in the Extraordinary.</p>
        <button type='button' className='custom__button'> <a href="#gallery"> Explore Menu</a></button>
      </div>
      <div className='app__wrapper_img'>
        <img src={images.welcome} alt="welcome" />
      </div>
    </div>
  )
}

export default Header