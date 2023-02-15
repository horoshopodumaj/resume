import "./back.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function BackToTop() {
    return (
        <a className="backToTop" href="#home">
            <KeyboardArrowUpIcon fontSize="large" />
        </a>
    );
}
