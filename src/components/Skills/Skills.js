import React from 'react';
import Marquee from "react-fast-marquee";
import './Skills.css'
import { skillsData } from '../../data/skillsData'
import { skillsImage } from '../../assets/Images/skillsImage'

function Skills() {

    const skillBoxStyle = {
        backgroundColor: '#2c323f',
        boxShadow: `0px 0px 30px ${'rgb(245 101 57 / 30%)'}`,
      
    }

    return (
        <div id ="skills"className="skills" style={{backgroundColor: '#2c323f'}}>
            <div className="skillsHeader">
                <h2 style={{color:'white'}}>Skills</h2>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div id="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 style={{color: 'white'}}>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Skills
