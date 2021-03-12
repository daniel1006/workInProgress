import { useState, useEffect } from "react";
import '../Pages/Contact.css';

const useForm = (callback, validateLogin) => {
        const [values, setValues] = useState ({ email:"", password:"", full:"" });
        const [errors, setErrors] = useState ({ });
        const [isSubmitting, setIsSubmitting] = useState(false);

        const handleChange = event => {
            const { name, value } = event.target;
    
            setValues({
                ...values,
                [name]: value
            });
        };
    
        const handleSubmit = event => {
           event.preventDefault();

           setErrors(validateLogin(values));
           setIsSubmitting(true);
        };

        useEffect(() => {
          
            if (Object.keys(errors).length === 0 && isSubmitting) {
               callback();
            }

        }, [errors]);

        return {
            handleChange,
            handleSubmit,
            values,
            errors   
         };
};

export default useForm;