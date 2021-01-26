import React from 'react';
import {motion} from 'framer-motion';

import './Home.css';
import Mandy from '../Images/Mandy.png'

const Home = () => {
    const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9 ]};
    return(
        <div className="Home-page">

             <motion.h1 initial={{opacity: 1}}
                        //animate={{opacity:1}}
                        className="name" > Daniel Lanthier </motion.h1>

             <motion.div  initial={{y: "45%", width:"33vh", height:"55vh", marginRight:"auto", marginLeft:"auto", }}
                          //animate={{y:0, width:"100%",height: window.innerWidth > 1440 ? 800 : 400,transition: {delay: .2, ...transition} }}
                         className="home-style" >

             <motion.img initial={{scale:1}} className="home-image" alt="ME Phote" src={Mandy} /> 
             </motion.div>
        </div>
    )
}

export default Home;