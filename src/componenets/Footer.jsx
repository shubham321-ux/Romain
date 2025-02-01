import React, { useState } from "react";
import "./css/Footer.css";
import Contact from "../pages/Contact";
import celenderSvg from "../assets/celenderSvg.svg";
import { footerdata } from "../data/footerdata";
const Footer = () => {
  // Form data state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: ''
  });

  // Newsletter email state
  const [newsletterEmail, setNewsletterEmail] = useState('');

  // Handle form input changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setFormData({
      name: '',
      email: '',
      query: ''
    });
  };

  // Handle newsletter submission
  const handleNewsletterSubmit = () => {
    console.log("Newsletter Email:", newsletterEmail);
  };

;

  const copyright = "Copyright © 2023 Kamperen. All rights reserved.";
  const copyright2 = "Designed by Qode Interactive";

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer>
      <div className="footer-div">
        <div className="absolute-div">
          <form onSubmit={handleSubmit}>
            <div className="footer-form-input-div">
              <div className="footer-input-div-form1">
                <img src={celenderSvg} alt="celender" />
                <h5 className="footer-form-title">NAME</h5>
              </div>
              <div className="footer-input-div-form2">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Enter your name" 
                  value={formData.name}
                  onChange={handleFormChange}
                />
              </div>
            </div>
            <div className="footer-form-input-div">
              <div className="footer-input-div-form1">
                <img src={celenderSvg} alt="celender" />
                <h5 className="footer-form-title">EMAIL</h5>
              </div>
              <div className="footer-input-div-form2">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Enter your email address" 
                  value={formData.email}
                  onChange={handleFormChange}
                />
              </div>
            </div>
            <div className="footer-form-input-div">
              <div className="footer-input-div-form1">
                <img src={celenderSvg} alt="celender" />
                <h5 className="footer-form-title">QUERY</h5>
              </div>
              <div className="footer-input-div-form2">
                <input 
                  type="text" 
                  name="query"
                  placeholder="Enter your Query" 
                  value={formData.query}
                  onChange={handleFormChange}
                />
              </div>
            </div>
            <button type="submit" className="footer-form-btn">SEND</button>
          </form>
        </div>

        <div className="footer-div1">
          {footerdata.map((item, index) => (
            <div key={index} className="footer-section">
              <h3 className="footer-title">{item.title}</h3>
              {item.para && <p>{item.para}</p>}
              {item.title2 && (
                <div className="social-icons">
                  <h4 className="footer-title">{item.title2}</h4>
                  <div className="icons">
                    {item.logo1 && <span className="social-icon">{item.logo1}</span>}
                    {item.logo2 && <span className="social-icon">{item.logo2}</span>}
                    {item.logo3 && <span className="social-icon">{item.logo3}</span>}
                  </div>
                </div>
              )}
              {item.Contactinfo && (
                <div className="contact-info">
                  <p>{item.Contactinfo.A}</p>
                  <p>{item.Contactinfo.P}</p>
                  <p>{item.Contactinfo.APP}</p>
                  <p>{item.Contactinfo.E}</p>
                </div>
              )}
              {item.links && (
                <div className="footer-links">
                  <p>{item.links.link1}</p>
                  <p>{item.links.link2}</p>
                  <p>{item.links.link3}</p>
                  <p>{item.links.link4}</p>
                </div>
              )}
              {item.inputplaceholder && (
                <div className="footer-input">
                  <input 
                    type="text" 
                    placeholder={item.inputplaceholder}
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                  />
                  <span 
                    className="arrow-icon" 
                    onClick={handleNewsletterSubmit}
                  >
                    {item.inputlogo}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="footer-div2-main">
          <div className="footer-btn-div">
            <button className="footer-btn" onClick={scrollToTop}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M7.01711 13.2013C6.77384 13.4446 6.37812 13.4446 6.13485 13.2013C5.89157 12.9581 5.89157 12.5627 6.13485 12.3195L10.1809 8.27346C10.3033 8.15104 10.4627 8.09139 10.6237 8.09139C10.7848 8.09139 10.9442 8.15104 11.0666 8.27346L15.1126 12.3195C15.3559 12.5627 15.3559 12.9581 15.1126 13.2013C14.8694 13.4446 14.4736 13.4446 14.2304 13.2013L10.6237 9.59471L7.01711 13.2013Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <div className="footer-div2">
            <p className="copyright">{copyright}</p>
            <p className="copyright">{copyright2}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
