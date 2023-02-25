import React from 'react';
import './Sliding_nav.css'


const Sliding_nav = () => {
  return (
    
      <ul className="nav">
        <li>
          <i className="fa fa-home"></i>
          <div className="animated slideInLeft">Home</div>
        </li>
        <li>
          <i className="fa fa-user"></i>
          <div className="animated slideInLeft">About</div>
        </li>
        <li>
          <i className="fa fa-certificate"></i>
          <div className="animated slideInLeft">Skills</div>
        </li>
        <li>
          <i className="fa fa-desktop"></i>
          <div className="animated slideInLeft">Projects</div>
        </li>
        <li>
          <i className="fa fa-align-right"></i>
          <div className="animated slideInLeft">Articles</div>
        </li>
        <li>
          <i className="fa fa-phone"></i>
          <div className="animated slideInLeft">Contact</div>
        </li>
      </ul>

  );
};

export default Sliding_nav;