import React from "react";
import { useNavigate } from "react-router-dom";

const HeaderNav = () => {
  const nav = useNavigate();
  const send = (e) => {
    nav(e);
  };
  return (
    <nav>
      <div class="links">
        <a href="https://facebook.com" target="blank">
          <i className="fa fa-facebook-f i-fb text-orange-500"></i>
        </a>
        <a href="https://x.com" target="blank">
          <i className="fa fa-twitter i-tw text-orange-500"></i>
        </a>
        <a href="https://linkedin.com" target="blank">
          <i className="fa fa-linkedin i-ln text-orange-500"></i>
        </a>
        <a href="https://instagram.com" target="blank">
          <i className="fa fa-instagram i-ig text-orange-500"></i>
        </a>
      </div>
    </nav>
  );
};

export default HeaderNav;
