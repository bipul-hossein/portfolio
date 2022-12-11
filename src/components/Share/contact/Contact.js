import React from 'react'
import './Contact.css'

import { Bounce } from 'react-reveal'
import facebook from '../../../assets/Images/Social/facebook.png'
import github from '../../../assets/Images/Social/github.png'
import linkedin from '../../../assets/Images/Social/linkedin.png'
const Contact = () => {
  return (
    <div title="Contact">
      <Bounce cascade>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/bipul-hossain/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="Linkedin Logo" width="50px" />
          </a>
          <a
            href="https://github.com/bipul-hossein"
            target="_blank"
            rel='noreferrer'

          >
            <img src={github} alt="Github Logo" width="50px" />
          </a>


          <a
            href="https://www.facebook.com/bipulhossainFB"
            target='_blank'
            rel='noreferrer'

          >
            <img src={facebook} alt="Facebook Logo" width="50px" />
          </a>


        </div>

      </Bounce>
    </div>
  )
}

export default Contact
