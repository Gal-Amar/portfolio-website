// import React, { useRef, useState } from 'react'
// import "./contact.css"
// import { MdEmail } from 'react-icons/md'
// import { FaFacebookSquare } from 'react-icons/fa'
// import { IoLogoWhatsapp } from 'react-icons/io'
// import emailjs from 'emailjs-com'
// import ReCAPTCHA from 'react-google-recaptcha';

// const RECAPTCHA_KEY = '6Lde7XEpAAAAAPN7Q8LflssyITgMdCGJ5UUHGg0Y'

// const Contact = () => {
//   const form = useRef();
//   const refCaptcha = useRef();
//   const [message, setMessage] = useState('');
//   const [inputText, setInputText] = useState('');

//   const sendEmail = (e) => {
//     e.preventDefault();

//     const submitted_form = {
//       name: form.current.name.value,
//       email: form.current.email.value,
//       message: form.current.message.value,
//       'g-recaptcha-response': refCaptcha.current.getValue(),
//     };

//     console.log(submitted_form)

//     emailjs.send('service_x3qh7jc', 'template_z3h5v0g', submitted_form, 'lLmZJZwxejhPt3Q29')
//       .then((result) => {
//         setMessage('Email sent successfully!');
//         setTimeout(() => {
//           setMessage('');
//         }, 5000);
//       }, (error) => {
//         setMessage((e.message === "reCAPTCHA: The g-recaptcha-response parameter not found")? "Pleace press the 'I'm not a robot button'" : "Error sending message, please try again later");
//         setTimeout(() => {
//           setMessage('');
//         }, 3000);
//         console.log(error.text);
//       });

//     e.target.reset()
//     setInputText('')
//     e.target.message.value = inputText;
//   };

//   const handleInputChange = (e) => {
//     const inputValue = e.target.value;
//     const capitalizedValue = capitalizeFirstLetter(inputValue);
//     setInputText(capitalizedValue);
//   };

//   function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }

//   return (
//     <section id='contact'>
//       <h4>Get In Touch</h4>
//       <h2>Contact Me</h2>

//       <div className="container contact_container">
//         <div className="contact_options">
//           <article className='contact_option'>
//             <MdEmail size={20} className='contact_option_icon' />
//             <h4>Email</h4>
//             <h5>galamar22@gmail.com</h5>
//             <a href='mailto:galamar22@gmail.com' target='_blank'>Send me a message</a>
//           </article>

//           <article className='contact_option'>
//             <IoLogoWhatsapp size={20} className='contact_option_icon' />
//             <h4>Whatsapp</h4>
//             <a href='https://wa.me/+972505429789' target='_blank'>Send me a message</a>
//           </article>

//           <article className='contact_option'>
//             <FaFacebookSquare size={18} className='contact_option_icon' />
//             <h4>Facebook</h4>
//             <a href='https://m.me/gala22/' target='_blank'>Send me a message</a>
//           </article>
//         </div>
//         {/* END OF CONTACT OPTION */}

//         <form ref={form} onSubmit={sendEmail} id="theForm">
//           <input type='text' name='name' placeholder='Your Full Name' required />
//           <input type='email' name='email' placeholder='Your Email' required />
//           <textarea name='message' rows={7} placeholder='Your Message' onChange={handleInputChange} value={inputText} required></textarea>
//           <ReCAPTCHA
//             sitekey={RECAPTCHA_KEY}
//             // size="invisible"
//             ref={refCaptcha}
//           />
//           <button type='submit' data-badge="inline" className='btn btn-primary b'>Send Messge</button>

//           {message && <div className="message">{message}</div>}
//         </form>

//       </div>
//     </section>
//   )
// }

// export default Contact

import React, { useRef, useState } from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [inputText, setInputText] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_x3qh7jc",
        "template_z3h5v0g",
        form.current,
        "lLmZJZwxejhPt3Q29"
      )
      .then(
        (result) => {
          setMessage("Email sent successfully!");
          setTimeout(() => {
            setMessage("");
          }, 3000);
        },
        (error) => {
          setMessage("Error sending email. Please try again later.");
          setTimeout(() => {
            setMessage("");
          }, 3000);
          console.log(error.text);
        }
      );

    e.target.reset();
    setInputText("");
    e.target.message.value = inputText;
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const capitalizedValue = capitalizeFirstLetter(inputValue);
    setInputText(capitalizedValue);
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <section id="contact">
      <h4>Get In Touch</h4>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdEmail size={20} className="contact_option_icon" />
            <h4>Email</h4>
            <h5>galamar22@gmail.com</h5>
            <a
              href="mailto:galamar22@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send me a message
            </a>
          </article>

          <article className="contact_option">
            <IoLogoWhatsapp size={20} className="contact_option_icon" />
            <h4>Whatsapp</h4>
            <a
              href="https://wa.me/+972505429789"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <FaFacebookSquare size={18} className="contact_option_icon" />
            <h4>Facebook</h4>
            <a href="https://m.me/gala22/" target="_blank" rel="noreferrer">
              Send me a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows={7}
            placeholder="Your Message"
            onChange={handleInputChange}
            value={inputText}
            required
          ></textarea>
          <button type="submit" className="btn btn-primary b">
            Send Message
          </button>
          {message && <div className="message">{message}</div>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
