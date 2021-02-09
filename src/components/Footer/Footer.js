import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

import './Footer.css';

import {FaGithub, FaLinkedin, FaInstagram, FaRegEnvelope} from 'react-icons/fa';
import lamps from '../../Images/lamps.png';
import background1 from '../../Images/background1.png';

const Footer = () => {
    const exit = {
        exit: {
        opacity: 0,
        }
    };

    return(
        <footer style={{ backgroundImage: `url('${lamps}')` }} className="footer">
            <span className="footer-work">Work With Me</span>

            <span className="footer-colab">wannt to colab? i'm looking for new projects</span>

            <Link to="/contact" className="footer-button"> contact me <FaRegEnvelope className="envelope"/> </Link>

            <span className="footer-links"> 
              <a className="btn"> <FaLinkedin className="fa linkdin"/> </a> 
              <a className="btn"> <FaGithub className="fa github"/> </a>
              <a className="btn"> <FaInstagram className="fa instagram"/> </a>
              
              <a className="btn cv-button" download href="/Resume/CV.pdf">
              <p className="fa cv-words" > Download CV </p> </a> 
         
            </span>

           

        </footer>
    )
}

export default Footer;