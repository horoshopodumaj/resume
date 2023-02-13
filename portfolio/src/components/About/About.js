import { FormattedMessage } from "react-intl";
import "./about.scss";

export default function About() {
    return (
        <section id="about" className="about">
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
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
                            recusandae itaque excepturi hic consequatur repellendus ad magni
                            molestias assumenda in, perspiciatis eligendi obcaecati nulla veniam
                            dicta? Beatae voluptatum deserunt dolor! Lorem ipsum dolor sit amet
                            consectetur, adipisicing elit. Voluptatem, praesentium tenetur, impedit
                            voluptas vero aliquam recusandae ex nobis earum, tempore voluptatibus
                            est eos enim commodi iure repellat perspiciatis cum facere!
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
                    <h2 className="skills__title">My Skills</h2>
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
}
