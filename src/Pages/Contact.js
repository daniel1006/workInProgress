import React, { useState } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import {motion} from 'framer-motion';
import { useForm } from 'react-hook-form';

import {FaPhoneAlt} from 'react-icons/fa';
import './Contact.css';
import '../components/Footer/Footer.css';

import letter from '../Images/letter.png';

import { init, sendForm } from 'emailjs-com';
init("user_ATLikbsUbE9p1oF2JazwA");

const Contact = () => {

  const [contactNumber, setContactNumber] = useState("000000");
  
  const generateContactNumber = () => {
  const numStr = "000000" + (Math.random() * 1000000 | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  }
  
  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9 ]};
  const exit = {
      exit: {
      opacity: 0,
      }
  };

  const { register, watch, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data) =>  {
  generateContactNumber();
  sendForm('default_service', 'template_sorw188', '#contact-form')
  .then(function(response) {
   document.location = "/thankyou"
    console.log('SUCCESS!', response.status, response.text);
  }, function(error) {
    console.log('FAILED...', error);
  });
}

  const message = watch('message') || "";
  const messageCharsLeft = 1500 - message.length; 

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
            <span>'s </span>
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

          <motion.form id='contact-form'
                       className="form" 
                       initial={{ opacity: 0 }} 
                       animate={{ opacity: 1 }} 
                       exit={{ opacity: 0 }} 
                       transition={{delay: .2, ...transition}}
                       onSubmit={handleSubmit(onSubmit)}>         
        
          <div className="name-box">
          <group >
             <label> 
                <input className="full-name"
                       type='text' 
                       name='user_name' 
                       placeholder='Name'
                       {...register('user_name', { required: true, maxLength:20})}/> 
                      <div role="alert">{errors.user_name && "Name is required"}</div> 
             </label> 
          </group>
          </div>
          
          <div className="email-box" > 
          <group >
             <label>
                <input className="Email" 
                       type='email' 
                       name='user_email' 
                       placeholder='Email' {...register('user_email', { required: true, pattern: /^\S+@\S+\.\S+$/ })}/> 
                       <div role="alert">{errors.user_email && "Email is not valid"}</div> 
             </label>
          </group>
          </div>
          
          <div className="message-box" >
          <group >
             <label >
                <textarea className="message-area" 
                          name='message' 
                          placeholder='Message' 
                          {...register('message', { required: true, maxLength:1500})}/> 
                          <p className='message-chars-left'>{messageCharsLeft}</p>
                          <div role="alert">{errors.message && "Must enter a message"}</div> 
             </label> 
          </group>
          </div>

               
                <input className="send-btn" type='submit' value='Send' />
                
               </motion.form>
       
       </div>
    );
    };

    export default Contact;