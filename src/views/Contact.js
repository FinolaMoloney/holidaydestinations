import { useForm } from "react-hook-form";
import { useState } from 'react';
import '../components/Contact.css';


function Contact() {
    const { register, handleSubmit} = useForm();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [userfName, setUserFName] = useState("");
    const [inputErrors, setInputErrors] = useState({});

    function onSubmit(data) {
        const validate = {};
        let hasErrors = false;
    
        if (data.firstName === "" || data.lastName === "" || data.email ==="" || data.message === "") {
          validate.message = "Please fill in all fields before submitting";
          hasErrors = true;
      
        }
        if (hasErrors) {
            setInputErrors(validate);
        } else {
            setFormSubmitted(true);
            setUserEmail(data.email);
            setUserFName(data.firstName);
    }
    }

    return (
      <div className="container-fluid">
        <div className="row">
            <h1>Contact Us</h1>
            <p>If you would like to get in touch, please leave us a message below. We would love to hear from you!</p>
            </div>
        <div className="row form">
        {formSubmitted ? (
          <p>Thanks for getting in touch {userfName}, we will get back to you on {userEmail} shortly!</p>
        ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input placeholder="First name" {...register("firstName")} />
              {inputErrors.firstName && <span className="error">{inputErrors.firstName}</span>}
            </div>
            <div>
              <input placeholder="Last name" {...register("lastName")} />
              {inputErrors.lastName && <span className="error">{inputErrors.lastName}</span>}
            </div>
            <div>
              <input placeholder="Email" {...register("email")} />
              {inputErrors.email && <span className="error">{inputErrors.email}</span>}
            </div>
            <div>
              <textarea  placeholder="Type your message here" {...register("message")} rows="5" cols="40"  />
              {inputErrors.message && <span className="error">{inputErrors.message}</span>}
            </div>
            <button className="button" type="submit">Submit</button>
          </form>
        )}
        </div>
      </div>
    );
  }

export default Contact;