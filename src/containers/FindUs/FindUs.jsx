import React from 'react';
import { SubHeading } from '../../components/index.js';
import { images } from '../../constants/index.js';

const FindUs = () => {
  return (
    <div className='app__findus app__bg section__padding app__wrapper' id='contact'>
      <div className='app__wrapper_info'>
          
          <SubHeading  title="contact"/>
          <h1 className='headtext__cormorant' style={{ marginBottom: '1.5rem' }}>Find Us</h1>
          <div>

            <p className='p__opensans' style={{color :"#aaaaaa" , marginLeft : '1.8rem'}}> - Dar Slah, 145, Rue de la Kasbah, La Medina, Tunis </p>
            <p className='p__cormorant' style={{marginTop : '4rem', fontSize : '32px', color:'#DCCA87'}}>Opening Hours</p>
            <p className='p__opensans' style={{marginTop : '1.5rem', color:'#aaaaaa', marginLeft : '2rem'}}>Mon - Fri : 10:00 am - 01:00 am</p>
            <p className='p__opensans' style={{marginTop : '1.5rem',color:'#aaaaaa', marginLeft : '2rem'}}>Sat - Sun : 11:00 am - 02:00 am</p>

          </div>
          <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
      
      </div>
      <div className='app__wrapper_img'>
        <img src={images.findus} alt="findus" />
      </div>
    </div>
  )
}

export default FindUs