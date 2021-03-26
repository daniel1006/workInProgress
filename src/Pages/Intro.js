import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {FaLongArrowAltRight} from 'react-icons/fa';

import Me from '../Images/Me.png';
import './Intro.css';


const Intro = () => {
    const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9 ]};
    const exit = {
        exit: {
        opacity: 0,
        }
    };

    return(
        <div className="Intro-page">
                       
              <div className="image-box">   

              <span className="image-wrapper" >      
             <Link to="/home" className="Image" > 

             <motion.img key={Me.src} src={Me.src} 
                         initial={{ x: 300, opacity: 0}} 
                         animate={{ x: 0, opacity: 1 }} 
                         exit={{ x: 300, opacity: 0 }} 
                         whileHover={{scale: 1.1}} 
                         className="Me-photo" alt="ME Phote" src={Me}/> 
             </Link> 
             </span>

              </div>

              <div className="remark-box" >
              <Link to="/home" style={{textDecoration: "none"}}> <motion.span initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }} 
                                exit={{ opacity: 0 }} 
                                transition={{delay: .2, ...transition}} 
                                className="remark"> Junior Web  
                                <motion.span style={{ textDecoration: "underline solid darkOrange"}}> Developer</motion.span> 
                                <FaLongArrowAltRight className="intro-icon" />         
                    </motion.span></Link> 
                
              </div>
        </div>
    )
}

export default Intro;