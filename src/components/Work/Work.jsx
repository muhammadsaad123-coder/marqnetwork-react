import React from "react";
import './Work.css';

const Work = () => {
    return(

        <div className="container">
        <section className="work">
            <div className="work__content">
                <span className="work__tag">• How We Work?</span>
                <h2 className="work__headline">
                    We Simplify The Journey <br />
                    <span>From Design To Launch</span>
                </h2>
                <p className="work__description">
                We make it easy to bring your ideas to life, guiding you from<br />
                concept to a fully launched product.
                </p>

               
            </div>

            <div className="work__image">
                <img src="/images/work.png" alt="work" />
            </div>
        </section>
        </div>
    );
};

export default Work;
