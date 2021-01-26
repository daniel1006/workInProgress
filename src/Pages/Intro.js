import React from 'react';
import {Link} from 'react-router-dom';
import {motion,AnimatePresence} from 'framer-motion';

import Mandy from '../Images/Mandy.png'
import './Intro.css';


const Intro = () => {
    return(
        <div className="Intro-page">
            <section>
                
              <div className="image-box" >   
              <span className="image-wrapper" >
             <Link to="/home" className="Image" > <img  className="Image" alt="ME Phote" src={Mandy} /> </Link> 
             </span>

              <motion.div  initial={{opacity:0}} animate={{opacity:2}}  exit={{opacity: 0}} className="details" >
              <span className="span1" > Daniel Lanthier </span> 
              <span className="span2" > Web Developer </span>
              </motion.div>
            

              </div>

            </section>
        </div>
    )
}

export default Intro;