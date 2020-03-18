import React from 'react';

//dependencies
import {
  FaYoutube,
  FaTwitter,
  FaFacebookF,
  FaGithub,
  FaInstagram
} from "react-icons/all";

//styles
import "../styles/components/contact/contact.css"


const Contact = () => {
    return (
      <div className="contact" id="subscribe">
        <div className="container">
          <h2>Lets connect</h2>
          <div className="social-media">
            <a href="http://www.youtube.com/">
              <FaYoutube className="icon" />
            </a>
            <a href="http://www.twitter.com/">
              <FaTwitter className="icon" />
            </a>
            <a href="http://www.facebook.com/">
              <FaFacebookF className="icon" />
            </a>
            <a href="http://www.github.com/">
              <FaGithub className="icon" />
            </a>
            <a href="http://www.instagram.com/">
              <FaInstagram className="icon" />
            </a>
          </div>
        </div>
      </div>
    );
}

export default Contact;
