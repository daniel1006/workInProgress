import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

import Me from '../Images/Me.png'
import arrow from '../Images/arrow.png'
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
            <img style={{ backgroundImage: `url('${arrow}')` }} className="arrow"  />
                
              <div className="image-box">   

              <span className="image-wrapper" >      
             <Link to="/home" className="Image" > 

             <motion.img key={Me.src} src={Me.src} 
                         initial={{ x: 300, opacity: 0}} 
                         animate={{ x: 0, opacity: 1 }} 
                         exit={{ x: 300, opacity: 0 }} 
                         whileHover={{scale: 1.1}} 
                       
                         className="Image" alt="ME Phote" src={Me}/> 
             </Link> 
             </span>

              <motion.div initial={{ opacity: 0 }} 
                          animate={{ opacity: 1 }} 
                          exit={{ opacity: 0 }} 
                          transition={{delay: .2, ...transition}} 
                          className="details" >

              <span className="span1" > Daniel Lanthier </span> 
              <span className="span2" > Web Developer </span>

              </motion.div>

              </div>

              <div className="remark-box" >
                   <motion.span initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }} 
                                exit={{ opacity: 0 }} 
                                transition={{delay: .2, ...transition}} 
                                className="remark"> I didn't draw this picture of me, but I can 
                    <motion.span className="code"> code </motion.span> a little</motion.span>
                   
              </div>
        
        </div>
    )
}

export default Intro;