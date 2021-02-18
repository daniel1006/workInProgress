import React, { bind, } from 'react';
import Axios from 'axios';
import {motion} from 'framer-motion';

import {FaPhoneAlt, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';
import './Contact.css';
import '../components/Footer/Footer.css';

import letter from '../Images/letter.png';


class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        };

        this.handleChange = this.handleChange.bind(this);
     
    }

    handleChange(event,field) {
        this.setState({ [field]: event.target.value});
      }

      handleSubmit = (event) => {
          event.preventDefault();

          this.setState({
              disabled: true,       
          });

              Axios.post('http://localhost:3030/api/daniel', this.state)
              .then(res => {
                  if(res.data.success) {
                this.setState({
                    disabled: false,
                    emailSent:true
                });
            } else {
                    this.setState({
                        disabled: false,
                        emailSent:false
                    });
                }           
              })
              .catch(err => {
                  this.setState({
                      disabled:false,
                      emailSent: false
                  });
              })
          
      }

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

          <motion.form initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }} 
                                exit={{ opacity: 0 }} 
                                transition={{delay: .2, ...transition}}
                                className="form" onSubmit={this.handleSubmit}  >

          <div className="name-box" netlify >
          <group >
             <label>
                <div style={{fontSize: "2rem"}} >Full Name </div>
                <input className="full-name" type="text" name="name" value={this.state.name} onChange={(event)=>this.handleChange(event,"name")} /> 
             </label> 
          </group>
          </div>
          
         
          <div className="email-box" > 
          <group >
             <label>
                <div style={{fontSize: "2rem"}} > Email </div> 
                <input className="Email" type="email" name="email" value={this.state.email} onChange={(event)=>this.handleChange(event,"email")} /> 
             </label>
          </group>
          </div>
          

          <div className="message-box" >
          <group >
             <label >
             <div style={{fontSize: "2rem"}} >  Message </div>
                <textarea className="message-area" type="message" name="message" value={this.state.message} onChange={(event)=>this.handleChange(event,"message")} /> 
             </label> 
          </group>
          </div>
        
            
                     <button className="send-btn" type="submit" disabled={this.state.disabled} > <span className="btn-words" >Send</span> </button>

                     {this.state.emailSent === true && <p className="Success" style={{color:"green"}}> Email sent !</p>}
                     {this.state.emailSent === false && <p className="Failure" style={{color:"red"}}> Error! Email has not been sent </p>}
            
          </motion.form>
       
       </div>
    );
    }
}

export default Contact;