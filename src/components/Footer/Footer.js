import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

import './Footer.css';

import {FaGithub, FaLinkedin, FaInstagram, FaRegEnvelope} from 'react-icons/fa';
import lamps from '../../Images/lamps.png';

const Footer = () => {
    const exit = {
        exit: {
        opacity: 0,
        }
    };

    return(
        <footer style={{ backgroundImage: `url('${lamps}')` }} className="footer">
            <span className="footer-work">Work With Me</span>

            <span className="footer-colab">want to collab? I'm looking for new projects</span>

            <Link to="/contact" className="footer-button"> Contact me <FaRegEnvelope className="envelope"/> </Link>

            <span className="footer-links"> 
              <a href="https://www.linkedin.com/in/daniel-lanthier-53743820a/" target="_blank" className="btn"> <FaLinkedin className="fa linkdin"/> </a> 
              <a href="https://github.com/daniel1006" target="_blank" className="btn"> <FaGithub className="fa github"/> </a>
              <a href="https://www.instagram.com/daniel.lth/" target="_blank" className="btn"> <FaInstagram className="fa instagram"/> </a>
              
              <a className="btn cv-button" download href="/Resume/CV.pdf">
              <p className="fa cv-words" > Download CV </p> </a> 
         
            </span>

           

        </footer>
    )
}

export default Footer;