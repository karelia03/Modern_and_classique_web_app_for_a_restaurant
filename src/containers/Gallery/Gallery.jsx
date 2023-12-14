import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components/index.js';
import { images } from '../../constants/index.js';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery app__bg flex__center" id='gallery'>
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Explore the heart and soul of Gericht through our vibrant gallery showcasing the exquisite flavors that define us. Our menu is a carefully curated symphony of culinary delights, offering a diverse palette of dishes inspired by both local and international cuisines. </p>
        <button type="button" className="custom__button" style={{marginTop : '2rem'}}>View More</button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.gal6,images.gal3,images.gallery01,images.gal4, images.gallery02, images.gallery03, images.gallery04, images.gal1,images.gal5,images.gal8,images.gal7].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrows-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrows-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;