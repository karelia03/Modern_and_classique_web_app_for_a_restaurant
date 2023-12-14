import React from 'react'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components/index.js';
import { images } from '../../constants/index.js';
import './Footer.css';


const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Dar Slah, 145, Rue De La Kasbah, La Medina, Tunis</p>
        <p className="p__opensans">+216-28-388-104</p>
        <p className="p__opensans">+216-25-718-818</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;Good food is all the sweeter when shared with good friends.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Friday</p>
        <p className="p__opensans">10:00 am - 01:00 am</p>
        <p className="p__opensans">Saturday - Sunday</p>
        <p className="p__opensans">10:00 am - 02:00 am</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Gericht. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;