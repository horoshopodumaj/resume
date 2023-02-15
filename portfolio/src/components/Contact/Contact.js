import React from "react";
import { FormattedMessage } from "react-intl";
import "./contact.scss";

export default function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact__header">
                    <h2 className="contact__title">
                        <FormattedMessage id="contact" />
                    </h2>
                    <p className="contact__subtitle">
                        <FormattedMessage id="getInTouch" />
                    </p>
                </div>
                <div className="contact__inner">
                    <div className="contact__info">
                        {/* <p className="contact__item">
                            <span className="contact__email">Email:</span>
                            <a href="mailto:dianamurtazina.job@gmail.com">
                                dianamurtazina.job@gmail.com
                            </a>
                        </p> */}
                    </div>
                    <div className="contact__form form">
                        <h2 className="form__title">SEND ME A NOTE</h2>
                        <form className="form__content">
                            <input className="form__input" type="text"></input>
                            <input className="form__input" type="text"></input>
                            <textarea className="form__area"></textarea>
                            <button className="form__btn" type="submit">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
