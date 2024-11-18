import React from "react";
import styes from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styes.footer}>
      <div className={styes.footerContainer}>
        <div className={styes.footerRow}>
          <div className={styes.footerCol}>
            <h4 className={styes.footerTitle}>Categories</h4>
            <ul>
              <li>Nutrition and diet</li>
              <li>Fitness training</li>
              <li>Mindfullness</li>
              <li>Mental health</li>
              <li>Personal growth</li>
              <li>Social well-being</li>
            </ul>
          </div>
          <div className={styes.footerCol}>
            <h4 className={styes.footerTitle}>About</h4>
            <ul>
              <li>About Us</li>
              <li>Our partners</li>
              <li>investors</li>
              <li>Career</li>
            </ul>
          </div>
          <div className={styes.footerCol}>
            <h4 className={styes.footerTitle}>Resources</h4>
            <ul>
              <li>FAQ</li>
              <li>Refund policies</li>
              <li>Terms and conditions</li>
              <li>Cookie</li>
              <li> Latest posts</li>
            </ul>
          </div>
          <div className={styes.footerCol}>
            <h4 className={styes.footerTitle}>Support</h4>
            <ul>
              <li>Get in touch</li>
              <li>Visit our forum</li>
            </ul>
          </div>
        </div>
        <div>
          <div className={styes.footerSocial}>
            <h5>Join our official channels</h5>
            <ul>
              <li>
                <i className="fab fa-facebook-f">Facebook</i>
              </li>
              <li>
                <i className="fab fa-twitter">X</i>
              </li>
              <li>
                <i className="fab fa-instagram">Instagram</i>
              </li>
              <li>
                <i className="fab fa-linkedin-in">Discord</i>
              </li>
            </ul>
          </div>
        </div>
        <div className={styes.footerCopyRight}>
          <p>
          &copy; 2024 EduPath. All rights reserved.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
