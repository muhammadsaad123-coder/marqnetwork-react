import React from "react";
import './ClassicSkillSection.css';

const ClassicSkillSection = () => {
    return (
        <section className="classic-skill">
            <div className="classic-skill__image">
                <img src="/images/classic skill.png" alt="skill" />
            </div>

            <div className="classic-skill__content">
                <span className="classic-skill__tag">• About Landin</span>
                <h2 className="classic-skill__headline">
                    An Agency With Classic <br />
                    <span>Revolutionary Skills!</span>
                </h2>

                <h4>Your Success, Our Priority</h4>
                <p className="classic-skill__description">
                At Landin, we believe in empowering our clients to achieve their goals. <br />
                Our team works closely with you.
                </p>

                <h4>Partners You Can Rely On</h4>

                <p className="classic-skill__description">
                Landin is here to ensure your success with expert guidance and  <br />
                collaborative teamwork.
                </p>

                <div className="classic-skill__actions">
                    <button className="classic-skill__button">Book an Appointment</button>
                    <div className="classic-skill__rating">
                        <span className="classic-skill__stars">★★★★★</span>
                        <span className="classic-skill__reviews">200+ Agencies Rated</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClassicSkillSection;
