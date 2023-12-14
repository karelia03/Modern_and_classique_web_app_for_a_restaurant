import React from 'react'
import './Chef.css';
import {images} from '../../constants/index.js';
import {SubHeading} from '../../components/index.js';

const Chef = () => {
  return (
    <div className='app__bg app__wrapper section__padding'>
      
      <div className='app__wrapper_img app__wrapper_img-reverse'>
        <img src={images.chef} alt="chef" />
      </div>
      
      <div className='app__wrapper_info'>
        <SubHeading  title=" Chef's Word"/>
        <h1 className='headtext__cormorant'>What We Believe In</h1>
        
        <div className='app__chef-content'>
          <div className='app__chef-content_quote'>
            <img src={images.quote} alt="quote" />
            <p className='p__opensans'>At Gericht, we believe in crafting more than meals – we're sculptors of experiences.</p>
          </div>
          <p className='p__opensans'> Our kitchen is an alchemy of rare ingredients, inventive recipes, and heartfelt hospitality, complemented by a curated selection of exquisite cocktails and fine wines. Each dish is a brushstroke in our canvas of flavor, and every meal is a celebration of shared moments. Join us in a culinary journey where belief meets the plate, turning dining into a symphony of tastes and memories. </p>
        </div>

        <div className='app__chef-sign'>
          <p> Kevin Luo</p>
          <p className='p__opensans'>- Chef & Founder -</p>
          <img src={images.sign} alt="sign" />
        </div>

      </div>
    </div>
  )
}

export default Chef;