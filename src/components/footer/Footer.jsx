import React from 'react'
import './Footer.scss';
import {Git,Insta,Email,Teli,Vec} from '../../assets';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-container-content">
        <h1>
          Contact <b>Me</b>
        </h1>
        <div className="footer-container-content-one">
          <img src={Git} alt="GitImg" />
          <img src={Insta} alt="GitImg" />
          <img src={Email} alt="GitImg" />
          <img src={Teli} alt="GitImg" />
        </div>
      </div>
      <div className="footer-container-content-two">
        <img src={Vec} alt="GitImg" />
      </div>
    </div>
  );
}

export default Footer