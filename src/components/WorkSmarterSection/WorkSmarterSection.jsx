import React from "react";
import './WorkSmarterSection.css';

const WorkSmarterSection = () => {
    return (
        <section className="work-smarter">
            <div className="work-smarter__content">
                <span className="work-smarter__tag">• About marQ</span>
                <h2 className="work-smarter__headline">
                    Work Smarter
Scale  Faster <br />
                    <span>Every  Minute  Counts.</span>
                </h2>

                <h4>Guided From Vision to Launch</h4>
                <p className="work-smarter__description">
                We map every milestone—strategy, sprints, QA, and go-live—so  <br />
                you stay focused on growth, not guesswork.
                </p>

                <h4>Support That Never Sleeps</h4>
                <p className="work-smarter__description">
                Post-launch, our 24/5 offshore pods keep improvements shipping  <br />
               while you sleep, ensuring momentum never stalls.
                </p>

                <div className="work-smarter__actions">
                    <button className="work-smarter__button">Book an Appointment</button>
                    <div className="work-smarter__rating">
                        <span className="work-smarter__stars">★★★★★</span>
                        <span className="work-smarter__reviews">900+ client ratings</span>
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
