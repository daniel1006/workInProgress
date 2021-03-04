import React from 'react';
import {motion} from 'framer-motion';

import './About.css';
import jade from '../Images/jade.jpg';

const About = () => {
    const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9 ]};
    const exit = {
        exit: {
        opacity: 0,
        }
    };

    return(
        <div className="About-page" >

            <div className="jade-container">
            <motion.div className="jade" key={jade.src} src={jade.src} 
                                  initial={{ x: -300, opacity: 0}} 
                                  animate={{ x: 0, opacity: 1 }} 
                                  transition={{delay: .2, ...transition}}
                                  exit={{ x: -300, opacity: 0 }} 
                                  style={{ backgroundImage: `url('${jade}')` }}> 
            </motion.div>

            </div>

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
                     > If your reading this then you may be wondering who I am. Well don't worry cause the wait is over! 
                       My name is Daniel and I grew up in Montreal, Canada, but am curently based in Sweden. <br /> <br/> 
                       

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
                    These skills allow me to use a wide range of tools to create responsive styalized websites with client side fucntionality.
                    </motion.div>
                </div>
            </div>
 
        </div>
    )
}

export default About;