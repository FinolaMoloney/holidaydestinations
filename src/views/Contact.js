import React from 'react';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import '../components/Contact.css';


function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [userfName, setUserFName] = useState("");
    
    function onSubmit(data, errors) {
       
        if (errors.firstName) {
            alert(errors.firstName.message);
            return;
          }
        
        setFormSubmitted(true);
        setUserEmail(data.email);
        setUserFName(data.firstName)
        
    }

    return (
      <div className="container-fluid gradient-1">
        <div className="row">
            <h1>Contact Us</h1>
            <p>If you would like to get in touch, please leave us a message below. We would love to hear from you!</p>
            </div>
        <div className="row form">
        {formSubmitted ? (
          <p>Thanks for getting in touch {userfName}, we will be in reply to you on {userEmail} shortly!</p>
        ) : (
            <form onSubmit={handleSubmit(onSubmit, errors)}>
            <div><input placeholder="First name" {...register("firstName", { required: "This field is required" } )} /></div>
            <div><input placeholder="Last name" {...register("lastName", { required: true })}/></div>
            <div><input placeholder="Email" {...register("email", { required: true })}/></div>
            <div><input placeholder="Type your message here" {...register("message", { required: true })}/></div>
            <button type="submit">Submit</button>
          </form>
        )}
        </div>
      </div>
    );
  }

export default Contact;