import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { TbMessage } from "react-icons/tb";
import contact from "../images/contact.png";
import { contactForm } from "../constants";

const Contact = () => {

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

      emailjs
        .sendForm("SERVICE_ID", "TEMPLATE_ID", form.current, {
          publicKey: "PUBLIC_KEY",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
  };

  return (
    <div className="contact container">
      <div className="contact_left_side">
        <img src={contact} alt="Contact" />
      </div>
      <div className="contact_right_side">
        <form className="contact_form" ref={form} onSubmit={handleSubmit}>
          {contactForm.map((field) => (
            <div key={field.id} className="input_container">
              <label htmlFor="name">{field.name}</label>
              <div className="input_field">
                {field.icon}
                <input
                  type={field.type}
                  id={field.id}
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.required}
                />
              </div>
            </div>
          ))}
          <div className="input_container">
            <label htmlFor="name">Messsage</label>
            <div className="input_field">
              <TbMessage />
              <textarea
                type="text"
                id="message"
                name="message"
                placeholder="Type your message here"
              />
            </div>
          </div>
          <button type="submit" className="contact btn">
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
