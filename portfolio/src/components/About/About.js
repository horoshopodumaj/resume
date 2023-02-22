import { forwardRef } from "react";
import { FormattedMessage } from "react-intl";
import "./about.scss";

const About = forwardRef((props, aboutRef) => {
    return (
        <section id="about" className="about" ref={aboutRef}>
            <div className="container">
                <div className="about__header">
                    <h2 className="about__title">
                        <FormattedMessage id="about" />
                    </h2>
                    <p className="about__subtitle">
                        <FormattedMessage id="knowMeMore" />
                    </p>
                </div>
                <div className="about__inner">
                    <div className="about__content">
                        <h3 className="about__littletitle">
                            <FormattedMessage id="aboutI" />
                            <span>
                                {" "}
                                <FormattedMessage id="frontend" />
                            </span>
                        </h3>
                        <p className="about__desc">
                            <FormattedMessage id="aboutDesc" />
                        </p>
                        <p className="about__desc">
                            <span className="about__caption">
                                <FormattedMessage id="aboutSpec" />
                            </span>
                            <FormattedMessage id="aboutSpecDesc" />
                        </p>
                        <p className="about__desc">
                            <span className="about__caption">
                                <FormattedMessage id="aboutSkills" />
                            </span>
                            - HTML, CSS, SCSS; <br /> - JavaScript, jQuery; <br /> - React.js;{" "}
                            <br /> - <FormattedMessage id="aboutSkillsDesc" />, Materialize, MUI,
                            FlexBox, Grid;
                            <br /> - Gulp
                        </p>
                        <p className="about__desc">
                            <span className="about__caption">
                                <FormattedMessage id="aboutReaspon" />
                            </span>
                            <FormattedMessage id="aboutReasponDesc" />
                        </p>
                    </div>
                    <div className="about__info">
                        <ul className="about__list">
                            <li className="about__name">
                                <span className="about__item">
                                    <FormattedMessage id="aboutName" />:
                                </span>
                                <FormattedMessage id="name" />
                            </li>
                            <li className="about__email">
                                <span className="about__item">Email:</span>
                                <a href="mailto:dianamurtazina.job@gmail.com">
                                    dianamurtazina.job@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="skills">
                    <h2 className="skills__title">
                        <FormattedMessage id="skills" />
                    </h2>
                    <div className="skills__list">
                        <div className="skills__item">
                            <div className="skills__content">
                                <p className="skills__text">HTML</p>
                                <p className="skills__num">95%</p>
                            </div>
                            <div className="skills__bar">
                                <div className="skills__line" style={{ width: "95%" }}></div>
                            </div>
                        </div>
                        <div className="skills__item">
                            <div className="skills__content">
                                <p className="skills__text">CSS</p>
                                <p className="skills__num">80%</p>
                            </div>
                            <div className="skills__bar">
                                <div className="skills__line" style={{ width: "80%" }}></div>
                            </div>
                        </div>
                        <div className="skills__item">
                            <div className="skills__content">
                                <p className="skills__text">Javascript</p>
                                <p className="skills__num">70%</p>
                            </div>
                            <div className="skills__bar">
                                <div className="skills__line" style={{ width: "70%" }}></div>
                            </div>
                        </div>
                        <div className="skills__item">
                            <div className="skills__content">
                                <p className="skills__text">React</p>
                                <p className="skills__num">60%</p>
                            </div>
                            <div className="skills__bar">
                                <div className="skills__line" style={{ width: "60%" }}></div>
                            </div>{" "}
                        </div>
                        <div className="skills__item">
                            <div className="skills__content">
                                <p className="skills__text">MUI</p>
                                <p className="skills__num">70%</p>
                            </div>
                            <div className="skills__bar">
                                <div className="skills__line" style={{ width: "70%" }}></div>
                            </div>
                        </div>
                        <div className="skills__item">
                            <div className="skills__content">
                                <p className="skills__text">Redux Toolkit</p>
                                <p className="skills__num">50%</p>
                            </div>
                            <div className="skills__bar">
                                <div className="skills__line" style={{ width: "50%" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default About;
