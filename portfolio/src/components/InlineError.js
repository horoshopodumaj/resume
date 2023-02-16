import { FormattedMessage } from "react-intl";

function InlineError({ error }) {
    return (
        <p className="error">
            <FormattedMessage id={error} />
        </p>
    );
}

export default InlineError;
