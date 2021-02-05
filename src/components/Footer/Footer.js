import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

import './Footer.css';

import {FaGithub, FaLinkedin, FaInstagram, FaRegEnvelope} from 'react-icons/fa';

const Footer = () => {
    const exit = {
        exit: {
        opacity: 0,
        }
    };

    return(
        <footer className="footer">
            <span className="footer-work">Work With We</span>
            <span className="footer-colab">wannt to colab? i'm looking for new projects</span>
            <Link to="/contact" className="footer-button"> contact me <FaRegEnvelope className="envelope"/> </Link>
            <span className="footer-links"><FaLinkedin /><FaGithub className="github"/><FaInstagram/></span>
        </footer>
    )
}

export default Footer;