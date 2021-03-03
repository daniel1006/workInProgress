import React from 'react';
import {motion} from 'framer-motion';

import {FaPhoneAlt} from 'react-icons/fa';
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

           <motion.span 
                                className="footer-links" > 

          </motion.span>

          <motion.form action="https://getsimpleform.com/messages?form_api_token=b8b608e5b1e421e47f3b0d996f5e2453" 
                       method="post" 
                       className="form" 
                       initial={{ opacity: 0 }} 
                       animate={{ opacity: 1 }} 
                       exit={{ opacity: 0 }} 
                       transition={{delay: .2, ...transition}}>

          <input type='hidden' name='redirect_to' value='https://lanthierwebdesign.com//thankyou' />   

          <div className="name-box">
          <group >
             <label>
                <div style={{fontSize: "2rem"}} >Full Name </div>
                <input className="full-name" name='message' type='text'  /> 
             </label> 
          </group>
          </div>
          
         
          <div className="email-box" > 
          <group >
             <label>
                <div style={{fontSize: "2rem"}} > Email </div> 
                <input className="Email" type="email" name="email"  /> 
             </label>
          </group>
          </div>
          

          <div className="message-box" >
          <group >
             <label >
             <div style={{fontSize: "2rem"}} >  Message </div>
                <textarea className="message-area" name="content"  /> 
             </label> 
          </group>
          </div>
                <button className="send-btn" type='submit' value='Test form' > <span className="btn-words" >Send</span> </button>
          </motion.form>
       
       </div>
    );
    }
}

export default Contact;