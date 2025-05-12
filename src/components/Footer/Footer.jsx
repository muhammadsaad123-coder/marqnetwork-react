import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        {/* Left */}
        <div className="footer__left">
          <img src="/images/logo.png" alt="marqnetworks logo" className="footer__logo" />
          
          <div className="footer__subscribe">
            <input type="email" placeholder="Enter Your Email..." />
            <button>Subscribe Us</button>
          </div>
        </div>

        {/* Middle */}
        <div className="footer__middle">
          <h4>Template Pages</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Right */}
        <div className="footer__right">
          <div className="footer__right-top">
            <div className="footer__social-sales">
              <h4>Social</h4>
              <ul>
                <li>Twitter (X)</li>
                <li>Instagram</li>
                <li>Youtube</li>
                <li>Framer</li>
              </ul>

              
              
            </div>

            
           

            <div className="footer__video-wrapper">
  <div className="footer__sales">Sales – 7,360,109</div>
  <div className="video__container">
    <video
      className="footer__video"
      src="/images/footer.mp4"
      type="video/mp4"
      autoPlay
      loop
      muted
      playsInline
    />
  </div>
</div>

          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2024 Mark Networks</p>
        <div className="footer__links">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
