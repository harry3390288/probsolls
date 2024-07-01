import React, { useRef } from 'react';
import './MessageSection.css';
import emailjs from '@emailjs/browser';

const MessageSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_req8xzp', 'template_ipxm5s8', form.current, 'fcXSeznxMR7rjIPwa')
      .then(
        () => {
          alert('SUCCESS!');
        },
        (error) => {
          alert('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="message-section">
      <h1 className="main-heading">Send me a Message!</h1>
      <p className="subheading">Got a question or proposal, or just want <br /> to say hello? Go ahead.</p>
      <form className="message-form" ref={form} onSubmit={sendEmail}>
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="from_name" placeholder="Your Name" />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="user_email" placeholder="Your Email Address" />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Hi, I think we need a design system for our product at Company X. How soon can you hop on to discuss this."></textarea>
        </div>
        <button className='messagebtn' type="submit" value="Send">Send Message</button>
      </form>
    </div>
  );
};

export default MessageSection;
