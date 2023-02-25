import React, { useState } from 'react'
import './Header.css'
import Fade from 'react-reveal/Fade'
import { Bounce } from 'react-reveal'
import { Link } from 'react-scroll'
import Typewriter from 'typewriter-effect'
import { BsCaretDownFill } from "react-icons/bs";
import profile from '../../assets/Images/me.png'
import Sliding_nav from '../Share/sliding_nav/Sliding_nav'


const Header = () => {
    const [imageLoaded, setImageLoaded] = useState(false)


    return (

        <div>
           
            <div className="home_container">
            <div className='nav_container'>
                <Sliding_nav></Sliding_nav>
            </div>
                <div className="home" id='container'>


                    <div className={`greeting${!imageLoaded ? ' hide' : ''}`}>
                        <Fade bottom distance="40px" id='your-div'>
                            <div className='header_container'>
                                
                                <div >
                                    <h1 className="name lg:text-6xl md:text-5xl text-3xl font-bold">
                                        I'm Bipul Hossain.{' '}
                                        <span className="wave-emoji" role="img" aria-label="waving hand">
                                            👋
                                        </span>
                                    </h1>
                                    <h1 className="greeting-text">
                                        <Typewriter
                                            options={{
                                                strings: [
                                                    'I am a react developer.',
                                                    "I Love React",
                                                    'I am a Front End Developer.',
                                                ],
                                                autoStart: true,
                                                loop: true,
                                                deleteSpeed: 10,
                                                cursor: '_',
                                                delay: 100,
                                            }}
                                        />
                                    </h1>
                                    <Bounce cascade>
                                        <div >
                                            <a className="btn btn-info mx-3" href="https://drive.google.com/uc?export=download&id=13KbHtHtDD-J6oRrKmSiGJQKwk2aI0hFg" download>Download CV</a>
                                            <div className='flex justify-center mt-10'>
                                                <BsCaretDownFill
                                                    className='text-3xl mx-3 '
                                                    style={{ pointerEvents: 'fill', cursor: 'pointer' }}
                                                />
                                            </div>
                                        </div>
                                    </Bounce>
                                    <div className="scroll-down">
                                        <Link
                                            activeClass="active"
                                            to="about"
                                            spy={true}
                                            smooth={true}
                                            offset={-63}
                                            duration={500}

                                        >
                                        </Link>
                                    </div>
                                </div>
                                <img
                                    className="profile"
                                    alt="Md. Bipul Hossain"
                                    src={profile}
                                    onLoad={() => setImageLoaded(true)}
                                />
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;