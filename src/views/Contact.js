import { useForm } from "react-hook-form";
import { useState } from 'react';
import '../components/Contact.css';
import holidayDestinationsLinkedInLogo from '../images/holidayDestinationsLinkedinLogo.png';
import holidayDestinationsInstagramLogo from '../images/holidayDestinationsInstagramLogo.png'

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userfName, setUserFName] = useState("");

  const onSubmit = (data) => {
    setFormSubmitted(true);
    setUserEmail(data.email);
    setUserFName(data.name);
  };

    return (
      <div>
        <header className="headerContact">
          <h1 className="header-title">Contact Us</h1>
        </header>
        <div className="container contactBox">
          <div className="contact-form">
            <div className="row">
              <p>If you would like to get in touch, please send us a message below. We would love to hear from you!</p>
            </div>
              {formSubmitted ? (
                <div className="row">
                  <p>Thanks for getting in touch {userfName}, we will get back to you on {userEmail} shortly!</p>
                </div>
              ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <input 
                    type="text" 
                    className="form-control"
                    placeholder="First Name"
                    {...register("name", { required: "First Name is required" })} />
                  {errors.name && (<small>{errors.name.message}</small>)}
                </div>
                <div>
                  <input 
                    type="text" 
                    className="form-control"
                    placeholder="Last Name" 
                    {...register("lastName", { required: "Last Name is required" })} />
                  {errors.lastName && (<small>{errors.lastName.message}</small>)}
                </div>
                <div>
                  <input 
                    type="text" 
                    className="form-control"
                    placeholder="Email" 
                    {...register("email", {
                      required: "Email is required", 
                      pattern: {
                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
                        message: "A valid email is required"
                      }
                    })}/>
                  {errors.email && (<small>{errors.email.message}</small>)}
                </div>
                <div>
                  <textarea 
                    type="text" 
                    className="form-control"
                    placeholder="Type your message here" 
                    {...register("message" , { required: "Enter your message before submitting" })} rows="5" cols="40"  />
                  {errors.message && (<small>{errors.message.message}</small>)}
                </div>
                <br></br>
                <button className="buttonType" type="submit">Submit</button>
              </form>
              )}
            
            <div className="row">
              <h6>Contact Details</h6>
                <p>
                  Phone: +1221 345 7896<br/>
                  Email: contact@holidaydestinations.com<br/>
                  Address: 12 Baker Ln,<br/>O' Connell Street Lower,<br/>Dublin 1.
                </p>
              <h6>Find us on our socials!</h6>
              <div><a href="https://www.linkedin.com"><img className="logos" src={holidayDestinationsLinkedInLogo} alt="LinkedIn Logo" /></a>
              <a href="https://www.instagram.com"><img className="logos" src={holidayDestinationsInstagramLogo} alt="Instagram Logo" /></a>
              </div>
            </div>
            </div>
        </div>
      </div>
    );
  }

export default Contact;