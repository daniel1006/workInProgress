import React, { useRef } from 'react';
import {motion, useTransform, useViewportScroll} from 'framer-motion';

import useWidth from '../components/useWidth';

import './Home.css';
import Me from '../Images/Me.png';


const Home = () => {
    const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9 ]};
    const elementDOM = useRef(null);
    const [width] = useWidth(elementDOM);

    const firstName = {
        hidden: { opacity: 0},
        visible: { opacity: 1, transition: { duration: 3.5, when:"" , staggerChildren: 0.5, staggerDirection: -1 } },
    }

    const lastName = {
        hidden: { opacity: 0},
        visible: { opacity: 1, transition: { duration: 3.5, when:"", staggerChildren: 0.5, staggerDirection: 1 } },
    }
    const letter = {
         hidden: {  y: 400 },
         visible: { y: 0, transition: { duration: 1.5, ease: "easeIn" }},
        };
  
        const exit = {
            exit: {
            opacity: 0,
            }
        };

    return(
     
        <div className="Home-page">

             <motion.h1 className="name" {...exit} > 
                        <motion.span className="first"  initial="hidden" animate="visible"  variants={firstName}>
                           <motion.span variants={letter}>D</motion.span>
                           <motion.span variants={letter}>a</motion.span>
                           <motion.span className="n" variants={letter}>n</motion.span>
                           <motion.span variants={letter}>i</motion.span>
                           <motion.span variants={letter}>e</motion.span>
                           <motion.span variants={letter}>l</motion.span>
                        </motion.span>
                        
                        <motion.span className="last" initial="hidden" animate="visible" variants={lastName} >
                           <motion.span variants={letter}>L</motion.span>
                           <motion.span variants={letter}>a</motion.span>
                           <motion.span variants={letter}>n</motion.span>
                           <motion.span className="t" variants={letter}>t</motion.span>
                           <motion.span variants={letter}>h</motion.span>
                           <motion.span variants={letter}>i</motion.span>
                           <motion.span variants={letter}>e</motion.span>
                           <motion.span >r</motion.span>
                        </motion.span>
             </motion.h1>

             <div className="frame" >
             <motion.div  style={{y: "110%", width:"100%", paddingTop: "35%",height: {ref:elementDOM} }}
                          initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -300, opacity: 0 }} transition={{delay: .2, ...transition}}
                          className="home-style">
              
             <motion.img style={{y: {ref:elementDOM} > 1440 ? "-90%" : "-63.5%", transition: {delay: .2, ...transition},  }}
                         className="home-image" alt="ME Phote" src={Me} /> 
                
             </motion.div>         
             </div>  

             <div className="welcome">
                   <span className="greetings" >Welcome, I'm a junior web developer </span> 
             </div>

             <div className="portfolio" >
                   <span className="portfolio-words" >portfolio</span>
             </div>

        </div>
    )
}

export default Home;