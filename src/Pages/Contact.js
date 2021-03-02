import React, { bind, } from 'react';
import Axios from 'axios';
import {motion} from 'framer-motion';

import {FaPhoneAlt, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';
import './Contact.css';
import '../components/Footer/Footer.css';

import letter from '../Images/letter.png';


class Contact extends React.Component {



   render() {
    const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9 ]};
    const exit = {
        exit: {
        opacity: 0,
        }
    };
    return(
        <div className="Contact-page">

         <div className="image-container" >
           <motion.img key={letter.src} src={letter.src} 
                       initial={{ x: -300, opacity: 0}} 
                       animate={{ x: 0, opacity: 1 }} 
                       transition={{delay: .2, ...transition}}
                       exit={{ x: -300, opacity: 0 }} 

                       src={letter} alt={letter} />
         </div>
   
          <motion.h1 {...exit} 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          transition={{delay: .2, ...transition}}
          className="contact-header" > 

            <span>L</span>
            <span>e</span>
            <span style={{color:"orange"}}>t</span>
            <span>s </span>
            <span>t</span>
            <span>a</span>
            <span style={{color:"orange"}}>l</span>
            <span>k</span>
          </motion.h1>

          <motion.div initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }} 
                                exit={{ opacity: 0 }} 
                                transition={{delay: .2, ...transition}}
                                className="contact-phone" > 

           <FaPhoneAlt style={{marginRight: "1%" }} /> 

           Europe: +46 72-939-5856 <motion.div> 
           North-America: +1 438-490-7441 </motion.div> 
           </motion.div>

           <motion.span initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }} 
                                exit={{ opacity: 0 }} 
                                transition={{delay: .2, ...transition}}
                                className="footer-links" > 

          </motion.span>

          <form initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }} 
                                exit={{ opacity: 0 }} 
                                transition={{delay: .2, ...transition}}
                                className="form" 
                                name="simpleContactForm" 
                                id="simple-contact-form"
                                method="POST" 
                                data-netlify="true"
                                data-netlify-recaptcha="true"
                                netlify>

          <div className="name-box">
             <p>
                <label style={{fontSize: "2rem"}} id="contact-form-name-label" for="Name" >Full Name </label>
                <input className="full-name" type="text" name="name" id="name" /> 
             </p> 
          </div>
          
         
          <div className="email-box" > 
             <p>
                <label style={{fontSize: "2rem"}} id="contact-form-email-label" for="Email" > Email </label> 
                <input className="Email" type="email" name="email" id="email"  /> 
             </p>
          </div>
          

          <div className="message-box" >
             <p >
             <lable style={{fontSize: "2rem"}} id="contact-form-message-label" for="Message" >  Message </lable>
                <textarea className="message-area" name="message" id="message" rows="7"  /> 
             </p> 
          </div>
        
            
                     <button className="send-btn" type="submit"  > Send </button>

          </form>
       
       </div>
    );
    }
}

export default Contact;