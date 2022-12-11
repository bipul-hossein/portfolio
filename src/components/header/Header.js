import React, { useCallback, useState } from 'react'
import './Header.css'
import Fade from 'react-reveal/Fade'
import { Bounce } from 'react-reveal'
import { Link } from 'react-scroll'
import Typewriter from 'typewriter-effect'

import profile from '../../assets/Images/Formal_Shirts_White_Transparent__Formal_White_Shirt_Free_Png_And_Psd__Photo_Clipart__Formal_Wear__Passport_Size_PNG_Image_For_Free_Download-removebg-preview (2) (1).png'
import linkedin from '../../assets/Images/Social/linkedin.png'
import Navbar from '../Share/navbar/Navbar'



const Header = () => {
    const [imageLoaded, setImageLoaded] = useState(false)



    return (
        <>
        
            <div className="home_container">
        
                <div className="home">
                    <div className={`greeting${!imageLoaded ? ' hide' : ''}`}>
                        <Fade bottom distance="40px">
                            <img
                                className="profile"
                                alt="m.jigalin profile"
                                src={profile}
                                onLoad={() => setImageLoaded(true)}
                            />
                            <h1 className="greeting-text">
                                Hi, I'm <span className="name">Bipul Hossain</span>.{' '}
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

                        </Fade>
                        
                    </div>
            
                </div>
            </div></>
    );
};

export default Header;