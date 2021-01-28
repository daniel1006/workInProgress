import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import ProgressiveImage from 'react-progressive-image';

import Mandy from '../Images/Mandy.png'
import Me from '../Images/Me.png'
import './Intro.css';


const Intro = () => {
    return(
        <div className="Intro-page">
            <section>
                
              <div className="image-box" >   
              <span className="image-wrapper" >
             <Link to="/home" className="Image" > <img  className="Image" alt="ME Phote" src={Me} /> </Link> 
             </span>

              <motion.div  initial={{opacity:1}} animate={{opacity:1}} exit={{opacity: 0}} transition={{duration: 1}} className="details" >
              <span className="span1" > Daniel Lanthier </span> 
              <span className="span2" > Web Developer </span>
              </motion.div>
            

              </div>

            </section>
        </div>
    )
}

export default Intro;