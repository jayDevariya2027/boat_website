import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">Who are we?</div>
          <div className="text">
            During one of their many explorations, our founders Aman Gupta and
            Sameer Mehta discovered that the dopest people of our land were in
            search of affordable, durable and ultra fashionable audio products
            to groove to. Thus, in 2014, they kickstarted a great voyage in
            Indian consumer waters.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              Imagine Marketing Limited Unit no. 204 & 205, 2nd floor, D-wing &
              E-wing, Corporate Avenue, Andheri Ghatkopar Link Road, Mumbai,
              Maharashtra-400093, India
            </div>
          </div>
          {/* <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 8200071394</div>
          </div> */}
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: info@imaginemarketingindia.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text" onClick={() => navigate(`/category/1`)}>
            Headphones
          </span>
          <span className="text" onClick={() => navigate(`/category/4`)}>
            Smart Watches
          </span>
          <span className="text" onClick={() => navigate(`/category/3`)}>
            Bluetooth Speakers
          </span>
          <span className="text" onClick={() => navigate(`/category/2`)}>
            Wireless Earbuds
          </span>
          {/* <span className="text">Home Theatre</span>
                    <span className="text">Projectors</span> */}
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">
            © 2023 Imagine Marketing Limited. All Rights Reserved.
          </span>
          <img src={Payment} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
