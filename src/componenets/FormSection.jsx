import React, { useState } from "react";
import "./css/FormSection.css";
import shimlaImage from "../assets/shimla.avif";
import celenderSvg from "../assets/celenderSvg.svg";
const FormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    query: "",
    message: ""
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      query: "",
      message: ""
    });
  };

  return (
    <div className="form-section-div">
      <div className="form-section-div-image">
        <img src={shimlaImage} alt="shimla"/>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
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
        </div>

        <div className="form-row">
          <div className="footer-form-input-div">
            <div className="footer-input-div-form1">
              <img src={celenderSvg} alt="celender" />
              <h5 className="footer-form-title">PHONE</h5>
            </div>
            <div className="footer-input-div-form2">
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleFormChange}
              />
            </div>
          </div>

          <div className="footer-form-input-div">
            <div className="footer-input-div-form1">
              <img src={celenderSvg} alt="celender" />
              <h5 className="footer-form-title">DATE</h5>
            </div>
            <div className="footer-input-div-form2">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleFormChange}
              />
            </div>
          </div>
        </div>

        <button type="submit" className="footer-form-btn">SEND</button>
      </form>
    </div>
  );
};

export default FormSection;
