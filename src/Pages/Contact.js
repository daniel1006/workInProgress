import React from 'react';
import {motion} from 'framer-motion';

import './Contact.css';

const Contact = () => {
    const exit = {
        exit: {
        opacity: 0,
        }
    };

    return(
        <div className="Contact-page">
            <section>
            <motion.h1 {...exit} > Contact </motion.h1>
            </section>
        </div>
    )
}

export default Contact;