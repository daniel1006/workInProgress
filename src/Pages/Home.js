import React, { useRef } from 'react';
import {motion} from 'framer-motion';

import useWidth from '../components/useWidth';

import './Home.css';
import {FaLevelDownAlt, FaLongArrowAltLeft} from 'react-icons/fa';

import Me from '../Images/Me.png';
import security from '../Images/security.png';
import design from '../Images/design.png';

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
     
        <div className="Home-page" >
         <div className="picture-vh">  
             <motion.h1 className="name" {...exit}> 
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
             <motion.div  style={{y: "105%", width:"100%", paddingTop: "35%",height: {ref:elementDOM}, }}
                          initial={{ x: -300, opacity: 0, scale:1.0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -300, opacity: 0 }} transition={{delay: .2, ...transition}}
                          className="home-style">  

             <motion.img style={{y: {ref:elementDOM} > 1440 ? "-90%" : "-63.5%", transition: {delay: .2, ...transition},}}
                         className="home-image" alt="ME Phote" src={Me} /> 
                
             </motion.div>        
             </div>  
             </div>
                      
             <motion.div className="arrow-container" initial="hidden" animate="visible" exit={{opacity: 0}} variants={firstName}>                
                <span className="word-above-arrow"> Explore </span>
                <FaLevelDownAlt className="down-arrow" /> 
            </motion.div>

            <div className="part2" >
            <hr style={{width:"80%", color:"#4c5a21", backgroundColor:"#4c5a21", borderColor:"#4c5a21"}} />
              <div className="portfolio" >
                   <h1 className="portfolio-words" style={{paddingTop:"7%",position:"relative"}}> Welcome to my personal portfolio  </h1>
                   <h2 className="portfolio-words" >here you'll find some of my past projects</h2>
              </div>
 
              <div className="iframe-square">
                    
                    <div className="iframe-info" >
                    <h3  className="first-iframe-header">Website design</h3>
                    <span className="iframe-text">An example of what i can do</span>
                    <div  className="iframe-link" > <FaLongArrowAltLeft style={{ fontSize:"1.5rem" }} /> visit </div> 
                    </div>
                    <img className="security-image" src={security} alt="design" />
             </div>

             <div className="iframe-square">

                    <div className="iframe-info" >
                    <h3 className="second-iframe-header">web security</h3>
                    <span className="iframe-text">User authentication / kubernetes deployemnt</span>
                    <div className="iframe-link" > <FaLongArrowAltLeft style={{ fontSize:"1.5rem" }} /> visit </div>
                    </div>
                    <img className="security-image" src={design}  alt="security link" />

             </div>

             </div>

             </div>  
    )
}

export default Home;