const validateEmail = ({ email, setEmailError }) => {
    const emailRegular =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email && !email.match(emailRegular) ? setEmailError("emailError") : setEmailError("");
};

const validateName = ({ name, setNameError }) => {
    return name && name.length < 5
        ? setNameError("shortNameError")
        : name && name.length > 50
        ? setNameError("longNameError")
        : setNameError("");
};

const validateMessage = ({ message, setMessageError }) => {
    return message && message.length < 5
        ? setMessageError("shortMessageError")
        : message && message.length > 500
        ? setMessageError("longMessageError")
        : setMessageError("");
};

export { validateEmail, validateName, validateMessage };
