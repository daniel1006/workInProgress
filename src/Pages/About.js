import React from 'react';
import {motion} from 'framer-motion';

import './About.css';

const About = () => {
    const exit = {
        exit: {
        opacity: 0,
        }
    };

    return(
        <div className="About-page">
            <section>
               <motion.h1 {...exit} > About </motion.h1>
               
            </section>
        </div>
    )
}

export default About;