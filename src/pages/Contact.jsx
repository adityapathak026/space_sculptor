import React, { useState } from "react";
import { TbMessage } from "react-icons/tb";
import contact from "../images/contact.png";
import { contactForm, initialFormData } from "../constants";

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
  }


  return (
    <div className="contact container">
      <div className="contact_left_side">
        <img src={contact} alt="Contact" />
      </div>
      <div className="contact_right_side">
        <form className="contact_form">
          {contactForm.map((field) => (
            <div key={field.id} className="input_container">
              <label htmlFor="name">{field.name}</label>
              <div className="input_field">
                {field.icon}
                <input
                  type={field.type}
                  id={field.id}
                  name={field.name}
                  value={formData[field.name]}
                  placeholder={field.placeholder}
                  required={field.required}
                  onChange={handleChange}
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
                value={formData.message}
                placeholder="Type your message here"
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit" className="contact btn" onClick={handleSubmit}>SEND</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
