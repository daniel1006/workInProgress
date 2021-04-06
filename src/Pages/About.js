import React from 'react';
import {motion} from 'framer-motion';

import './About.css';
import Me from '../Images/Me.png';

const About = () => {
    const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9 ]};
    const exit = {
        exit: {
        opacity: 0,
        }
    };

    return(
        <div className="About-page" >
            
            <motion.h1 className="header1"
                       initial={{ opacity: 0 }} 
                       animate={{ opacity: 1 }} 
                       exit={{ opacity: 0 }} 
                       transition={{delay: .2, ...transition}}
                       > About me  </motion.h1>

            <motion.h1 className="header2"
                       initial={{ opacity: 0 }} 
                       animate={{ opacity: 1 }} 
                       exit={{ opacity: 0 }} 
                       transition={{delay: .2, ...transition}}
                       > I swear it's interesting </motion.h1>

            <div className="about-square">
                 <div className="inside-square">
                     <motion.h1
                     initial={{ opacity: 0 }} 
                     animate={{ opacity: 1 }} 
                     exit={{ opacity: 0 }} 
                     transition={{delay: .2, ...transition}}
                     > The really interesting read </motion.h1>

                     <motion.div
                     initial={{ opacity: 0 }} 
                     animate={{ opacity: 1 }} 
                     exit={{ opacity: 0 }} 
                     transition={{delay: .2, ...transition}}
                     >  <p>My name is Daniel Lanthier, and I am a Canadian citizen who is currently based in Sweden.
                          With an interest in the field and a passion for UI, I am now self-taught in HTML, CSS, 
                          JavaScript, React, Docker deployment, and Kubernetes cluster management.  <br /> <br/> </p>
                       

                     </motion.div>
                 </div>
            </div>

            <div className="about-second-square">
                <div className="second-inside-square">
                   <motion.h1
                   initial={{ opacity: 0 }} 
                   animate={{ opacity: 1 }} 
                   exit={{ opacity: 0 }} 
                   transition={{delay: .2, ...transition}}
                   > What I can do and work with </motion.h1>

                   <motion.div
                   initial={{ opacity: 0 }} 
                   animate={{ opacity: 1 }} 
                   exit={{ opacity: 0 }} 
                   transition={{delay: .2, ...transition}}>
                    • JavaScript frameworks <br/>
                    • RESTful services and APIs <br/> 
                    • Responsive and Mobile Design <br/> 
                    • Version control/GIT <br/> 
                    <br/> 
                    • Docker deployment <br/> 
                    • Kubernetes cluster management <br/> 
                    • User Authentication/Authorization<br/> 
                    <br/> 
                    
                    </motion.div>
                </div>
            </div>
 
        </div>
    )
}

export default About;