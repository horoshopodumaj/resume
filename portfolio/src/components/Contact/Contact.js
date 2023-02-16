import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useFormatMessage } from "../../hooks/useFormatMessage";
import InlineError from "../InlineError";
import { validateEmail, validateMessage, validateName } from "../Validation";
import "./contact.scss";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [nameError, setNameError] = useState();
    const [emailError, setEmailError] = useState();
    const [messageError, setMessageError] = useState();

    useEffect(() => {
        validateName({ name, setNameError });
        validateEmail({ email, setEmailError });
        validateMessage({ message, setMessageError });
    }, [name, email, message]);
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact__header">
                    <h2 className="contact__title">
                        <FormattedMessage id="contactMe" />
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
                        <h2 className="form__title">
                            <FormattedMessage id="sendNote" />
                        </h2>
                        <form className="form__content">
                            <div className="form__inputcontainer">
                                <input
                                    className="form__input"
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                    required
                                    placeholder={useFormatMessage("yourName")}
                                    type="text"></input>
                                {nameError && <InlineError error={nameError} />}
                            </div>
                            <div className="form__inputcontainer">
                                <input
                                    className="form__input"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    required
                                    placeholder={useFormatMessage("yourEmail")}
                                    type="email"></input>
                                {emailError && <InlineError error={emailError} />}
                            </div>
                            <div className="form__areacontainer">
                                <textarea
                                    className="form__area"
                                    value={message}
                                    onChange={(event) => setMessage(event.target.value)}
                                    required
                                    placeholder={useFormatMessage("yourMessage")}></textarea>
                                {messageError && <InlineError error={messageError} />}
                            </div>

                            <button className="form__btn" type="submit">
                                <FormattedMessage id="send" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
