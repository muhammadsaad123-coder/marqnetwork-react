import React from "react";
import './WorkSmarterSection.css';

const WorkSmarterSection = () => {
    return (
        <section className="work-smarter">
            <div className="work-smarter__content">
                <span className="work-smarter__tag">• About Landin</span>
                <h2 className="work-smarter__headline">
                    Work Smarter, Not Harder <br />
                    <span>in Every Minutes!</span>
                </h2>

                <h4>Guided Every Step</h4>
                <p className="work-smarter__description">
                We ensure a smooth journey from concept to completion, providing  <br />
                expert support to bring your vision to life effortlessly.
                </p>

                <h4>Support Beyond Delivery</h4>
                <p className="work-smarter__description">
                Our commitment doesn’t end at launch—Landin is here to support you , <br />
                with ongoing updates and expertise whenever you need it.
                </p>

                <div className="work-smarter__actions">
                    <button className="work-smarter__button">Book an Appointment</button>
                    <div className="work-smarter__rating">
                        <span className="work-smarter__stars">★★★★★</span>
                        <span className="work-smarter__reviews">900+ People Rated</span>
                    </div>
                </div>
            </div>

            <div className="work-smarter__image">
                <img src="/images/work smarter.png" alt="Work Smarter" />
            </div>
        </section>
    );
};

export default WorkSmarterSection;
