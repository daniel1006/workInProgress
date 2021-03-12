import '../Pages/Contact.css';

export default function validateLogin(values) {
    let errors  = {}

    if (!values.full) {
        errors.full = "Space cannot be blank";
    }
    if (!values.email) { 
        errors.email = "Space cannot be blank"
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
        errors.email = "Not a valid email";
    }
    if (!values.password) {
        errors.password = "Space cannot be blank";
    } 
    return errors;
}