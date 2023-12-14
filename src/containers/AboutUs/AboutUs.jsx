import React from 'react';
import {images} from '../../constants/index.js'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="g" />
    </div>
    <div className='app__aboutus-content flex__center'>
        
        <div className='app__aboutus-content_about'>
            <h1 className='headtext__cormorant'>About Us</h1>
            <img src={images.spoon} alt="spoon" />
            <p className='p__opensans'>At Gericht, we believe in creating more than just meals; we craft memories. Come join us on a culinary journey, where every bite is a step into a world of delightful tastes. Our cozy ambiance invites you to savor moments of joy with friends and family.</p>
            <button type='button' className='custom__button'>Know More</button>
        </div>

        <div className='app__aboutus-content_knife flex__center'>
          <img src={images.knife} alt="knife" />
        </div>

        <div className='app__aboutus-content_history'>
            <h1 className='headtext__cormorant'>Our History</h1>
            <img src={images.spoon} alt="spoon" />
            <p className='p__opensans'>Established in 1967, Gericht has been a proud culinary landmark in Tunis for more than half a decade. Over the years, we've evolved our menu, embracing the rich tapestry of culinary traditions while staying true to our roots.</p>
            <button type='button' className='custom__button'>Know More</button>


        </div>
    </div>
  </div>
);

export default AboutUs;