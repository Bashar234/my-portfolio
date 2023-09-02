import React from "react";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocial = () => {
  return (
    <div className="header_socials">
      <a href="https://linkedin.com">
        <BsLinkedin></BsLinkedin>
      </a>
      <a href="https://github.com">
        <FaGithub></FaGithub>
      </a>
      <a href="https://facebook.com">
        <BsFacebook></BsFacebook>
      </a>
    </div>
  );
};

export default HeaderSocial;
