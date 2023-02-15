import { FormattedDate, FormattedMessage } from "react-intl";
import "./footer.scss";

export default function Footer() {
    return (
        <footer className="footer">
            <p className="footer__author">
                <FormattedMessage id="author" />
            </p>
            <p className="footer__year">2023</p>
        </footer>
    );
}
