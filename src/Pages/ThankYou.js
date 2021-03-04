import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

import './ThankYou.css';

const Footer = () => {
    const exit = {
        exit: {
        opacity: 0,
        }
    };

    return(
    
        <div className="thankYou">
            <div className="container" >
                <motion.h1 {...exit} className="thanks-header" >Thanks for reaching out I'll get back to you as soon as I can !</motion.h1>
                <br/>
                <Link to="/home" className="thanks-link"> Back to home </Link>  
            </div>
       </div>
  
    )
}

export default Footer;
