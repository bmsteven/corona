import React from "react";
import { FaHeart } from "react-icons/all";

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        made with <FaHeart className='icon' /> by{" "}
        <a
          href='http://www.twitter.com/bmsteven_'
          target='_blank'
          rel='noopener noreferrer'
        >
          Benedict Steven
        </a>
      </div>
    </footer>
  );
};

export default Footer;
