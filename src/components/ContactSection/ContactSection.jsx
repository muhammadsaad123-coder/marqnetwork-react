import React from 'react';
import './contactSection.css';

const ContactSection = () => {
  return (
    <div className="contact-wrapper">
      {/* Left Form Section */}
      <div className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label>First name*</label>
            <input type="text" placeholder="Jane" />
          </div>
          <div className="form-group">
            <label>Last Name*</label>
            <input type="text" placeholder="Smith" />
          </div>
        </div>

        <div className="form-group">
          <label>How can we reach you?*</label>
          <input type="email" placeholder="jane@framer.com" />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Where Are you from?*</label>
            <select>
              <option>Select your country...</option>
              <option>USA</option>
              <option>UK</option>
            </select>
          </div>
          <div className="form-group">
            <label>What’s the type of your company?*</label>
            <select>
              <option>Select Category</option>
              <option>Startup</option>
              <option>Enterprise</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Message*</label>
          <textarea placeholder="Type your message..." />
        </div>

        <button className="submit-btn">Submit Now</button>
      </div>

      {/* Right Info Cards */}
      <div className="contact-info">
        <div className="info-card">
            <div className="info-icon">
    <img src='/images/email.png' alt="email icon" className="icon" />
  </div>
          <div>
            <p className="info-label">
              Email <span className="pill green">24/7</span>
            </p>
            <p className="info-value">help [at] Landin.com</p>
          </div>
        </div>

        <div className="info-card">
             <div className="info-icon">
    <img src='/images/phone.png' alt="email icon" className="icon" />
  </div>
          <div>
            <p className="info-label">Phone</p>
            <p className="info-value">+1 (717) 550-1675</p>
          </div>
        </div>

        <div className="info-card">
             <div className="info-icon">
    <img src='/images/address.png' alt="email icon" className="icon" />
  </div>
          <div>
            <p className="info-label">
              Address <span className="pill green">REMOTE</span>
            </p>
            <p className="info-value">
              California [CA], 90011<br />
              49th St. Los Angeles<br />
              United States
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
