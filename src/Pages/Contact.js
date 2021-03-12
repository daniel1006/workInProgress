import React from 'react';
import {motion} from 'framer-motion';
import useForm from '../components/useForm';
import validateLogin from '../components/validateLogin';

import {FaPhoneAlt} from 'react-icons/fa';
import './Contact.css';
import '../components/Footer/Footer.css';

import letter from '../Images/letter.png';

const Contact = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(submit, validateLogin);

  function submit() {

  }

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
                       transition={{delay: .2, ...transition}}
                       onSubmit={handleSubmit} noValidate>
        
         <input type='hidden' name='redirect_to' value='http://localhost:3000/thankyou' />                 

          <div className="name-box">
          <group >
             <label>
                <div style={{fontSize: "2rem"}} >Full Name </div>
                <input className="full-name" name="full" type="text" value={values.full} onChange={handleChange} /> 
                     {errors.full && <p className="error">{errors.full}</p>}
             </label> 
          </group>
          </div>
          
          <div className="email-box" > 
          <group >
             <label>
                <div style={{fontSize: "2rem"}} > Email </div> 
                <input className="Email" name="email" type="email" value={values.email} onChange={handleChange} /> 
                    {errors.email && <p className="error">{errors.email}</p>}
             </label>
          </group>
          </div>
          
          <div className="message-box" >
          <group >
             <label >
             <div style={{fontSize: "2rem"}} >  Message </div>
                <textarea className="message-area" name="password" type="password" value={values.password} onChange={handleChange} /> 
                    {errors.password && <p className="error">{errors.password}</p>}
             </label> 
          </group>
          </div>
                <button className="send-btn" type='submit' value='Test form' > <span className="btn-words" >Send</span> </button>
          </motion.form>
       
       </div>
    );
    };

    export default Contact;