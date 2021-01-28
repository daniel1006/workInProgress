import React, { useRef } from 'react';
import {motion, useTransform, useViewportScroll} from 'framer-motion';

import useWidth from '../components/useWidth';

import './Home.css';
import Mandy from '../Images/Mandy.png'
import Me from '../Images/Me.png'


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
         visible: { y: 0, transition: { duration: 1, ease: "easeIn" }},
        };

    return(
     
        <div className="Home-page">

             <motion.h1 className="name" > 
                        <motion.span className="first"  initial="hidden" animate="visible"  variants={firstName}>
                           <motion.span variants={letter}>D</motion.span>
                           <motion.span variants={letter}>a</motion.span>
                           <motion.span variants={letter}>n</motion.span>
                           <motion.span variants={letter}>i</motion.span>
                           <motion.span variants={letter}>e</motion.span>
                           <motion.span variants={letter}>l</motion.span>
                        </motion.span>
                        
                        <motion.span className="last" initial="hidden" animate="visible" variants={lastName} >
                           <motion.span variants={letter}>L</motion.span>
                           <motion.span variants={letter}>a</motion.span>
                           <motion.span variants={letter}>n</motion.span>
                           <motion.span variants={letter}>t</motion.span>
                           <motion.span variants={letter}>h</motion.span>
                           <motion.span variants={letter}>i</motion.span>
                           <motion.span variants={letter}>e</motion.span>
                           <motion.span >r</motion.span>
                        </motion.span>
             </motion.h1>

             <motion.div  initial={{y: "18%", width:"38.5vw", height:"7vh", marginRight:"auto", marginLeft:"auto" }}
                          //animate={{y:"110%", width:"100%",height: {ref:elementDOM} ,transition: {delay: .2, ...transition} }}
                          className="home-style">
         <div className="frame" >
             <motion.img  
                          initial={{scale:1}}
                          //animate={{y: {ref:elementDOM} > 1440 ? -1200 : "-80%", transition: {delay: .2, ...transition},  }}
                          className="home-image" alt="ME Phote" src={Me} /> 
        </div>
             </motion.div>             
        </div>
    )
}

export default Home;