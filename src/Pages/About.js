import React from 'react';
import {motion} from 'framer-motion';

import './About.css';
import jade from '../Images/jade.jpg';

const About = () => {
    const exit = {
        exit: {
        opacity: 0,
        }
    };

    return(
        <div className="About-page" >

            <div className="jade-container">
            <div className="jade" style={{ backgroundImage: `url('${jade}')` }}> </div>
            </div>

            <motion.h1 {...exit} className="header1"> About me  </motion.h1>
            <h1 className="header2"> I swear it's interesting </h1>

            <div className="about-square">
                 <div className="inside-square">
                     <h1> Blah blah blah </h1>
                     <div> blah blah blah blah blah blah blah blah blah</div>
                 </div>
            </div>

            <div className="about-second-square">
                <div className="second-inside-square">
                   <h1> blah blah blah </h1>
                   <div> blah blah blah blah blah blah blah blah blah </div>
                </div>
            </div>
 
        </div>
    )
}

export default About;