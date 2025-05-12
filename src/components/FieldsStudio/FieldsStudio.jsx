import React from "react";
import './FieldsStudio.css';

const FieldsStudio = () => {
  return (
    <section className="fieldsstudio">
      <div className="fieldsstudio__wrapper">
        <div className="fieldsstudio__content">
          <h1>
            Way <span> Fields</span><br />
            <span>Studios.</span>
          </h1>
          <p>
            Way Field Studios is a cutting-edge creative agency that<br />
            brings innovative designs and strategic solutions to life.
          </p>
          <div className="fieldsstudio__buttons">
            <button className="primary-btn">Connect With Us</button>
            <button className="secondary-btn">What is Landin?</button>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default FieldsStudio;
