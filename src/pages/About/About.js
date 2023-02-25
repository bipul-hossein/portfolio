import React from 'react';
import profile from '../../assets/Images/me.png'
const About = () => {
    return (
      <div style={{ background: '#2c323f' }}>
          <div  className='w-1/2 h-[44rem] mx-auto'>
            <div className='pt-8'>  <img
                                className="profile"
                                alt="m.jigalin profile"
                                src={profile}
                              
                            /></div>
            <div>
                <h1 className='text-3xl text-white'>Welcome to</h1>
                <h1 className='text-3xl text-white'> <span className='text-3xl text-orange-400'>BIPUL HOSSAIN'S</span> World</h1>
                <h4 className='text-2xl py-2 text-white'>I am Front End Developer</h4>
                <p className='text-white'>I am a junior web developer, familiar with HTML5, CSS3, JavaScript, React, Firebase, Node JS, MongoDB, Express JS, Payment Gateway-stripe, C, flexible with multiple CSS libraries - Bootstrap-5, React-Bootstrap, Material UI, Tailwind CSS. I have done some real-world projects always focusing on clean code, organized work, and time management.</p>
                <a 
                target="_blank" 
                href="https://web.facebook.com/bipulhossainFB"
                >more</a>
            </div>
            
        </div>
      </div>
    )
};

export default About;