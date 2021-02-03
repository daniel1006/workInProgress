import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

import Me from '../Images/Me.png'
import './Intro.css';


const Intro = () => {
    const exit = {
        exit: {
        opacity: 0,
        }
    };

    return(
        <div className="Intro-page">
            <motion.h1 {...exit} className="exit" > </motion.h1>
            <section>
                
              <div className="image-box" >   
              <span className="image-wrapper" >
             <Link to="/home" className="Image" > <img  className="Image" alt="ME Phote" src={Me} /> </Link> 
             </span>

              <motion.div  initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -300, opacity: 0 }} transition={{duration: 1}} className="details" >
              <span className="span1" > Daniel Lanthier </span> 
              <span className="span2" > Web Developer </span>
              </motion.div>
              </div>

              <div className="remark-box" >
                   <motion.span initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -300, opacity: 0 }} transition={{duration: 1}} className="remark"> I didn't draw this picture of me, but I can 
                        <motion.span className="code"> code </motion.span> 
                    a little</motion.span>
                   
              </div>
              
            </section>
        </div>
    )
}

export default Intro;