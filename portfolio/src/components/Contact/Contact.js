import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { SendEmail } from "../../API";
import { useFormatMessage } from "../../hooks/useFormatMessage";
import InlineError from "../InlineError";
import { validateEmail, validateMessage, validateName } from "../Validation";
import "./contact.scss";
import { toast } from "react-toastify";
import Toast from "../Toast/Toast";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [nameError, setNameError] = useState();
    const [emailError, setEmailError] = useState();
    const [messageError, setMessageError] = useState();
    const [buttonLoading, setButtonLoading] = useState(false);
    const [send, setSend] = useState();

    useEffect(() => {
        validateName({ name, setNameError });
        validateEmail({ email, setEmailError });
        validateMessage({ message, setMessageError });

        if (send) {
            toast.success(send);
            setName("");
            setEmail("");
            setMessage("");
            setSend();
        }
    }, [name, email, message, send]);

    const submitHandler = (e) => {
        e.preventDefault();
        setButtonLoading(true);
        if (!nameError & !emailError & !messageError) {
            SendEmail({ name, email, message, setSend }).then(() => {
                setButtonLoading(false);
            });
        }
    };

    return (
        <>
            <Toast />
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
                            <form className="form__content" onSubmit={submitHandler}>
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

                                <button
                                    className="form__btn"
                                    type="submit"
                                    disabled={buttonLoading && true}>
                                    {buttonLoading ? (
                                        <FormattedMessage id="loading" />
                                    ) : (
                                        <FormattedMessage id="send" />
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
