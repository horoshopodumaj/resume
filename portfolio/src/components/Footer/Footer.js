import { FormattedMessage } from "react-intl";
import "./footer.scss";

export default function Footer() {
    return (
        <footer className="footer">
            <p className="footer__author">
                <FormattedMessage id="author" />
            </p>
            <p className="footer__year">{new Date().getFullYear()}</p>
        </footer>
    );
}
