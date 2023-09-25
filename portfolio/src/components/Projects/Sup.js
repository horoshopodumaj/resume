import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Modal } from "@mui/material";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import sup from "../../assets/img/projects/sup11.jpg";
import sup2 from "../../assets/img/projects/sup21.jpg";
import sup3 from "../../assets/img/projects/sup31.jpg";
import sup4 from "../../assets/img/projects/sup41.jpg";
import sup5 from "../../assets/img/projects/sup51.jpg";
import sup6 from "../../assets/img/projects/sup61.jpg";

export default function Sup() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: true,
    };
    return (
        <div className="project">
            <button className="project__item" onClick={handleOpen}>
                <img className="project__img" src={sup} alt="sup"></img>
                <div className="project__info">
                    <h6 className="project__subtitle">SUP</h6>
                    <p className="project__text">HTML/CSS</p>
                </div>
            </button>
            <Modal
                className="modal"
                open={open}
                //onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <div className="modal__container">
                    <div className="modal__body">
                        <IconButton onClick={handleClose} sx={{ padding: 0, paddingLeft: "5px", float: "right" }}>
                            <CloseIcon
                                sx={{
                                    "&:hover": {
                                        color: "#20c997",
                                    },
                                    color: "#fff",
                                }}
                            />
                        </IconButton>
                        <div className="modal__content">
                            <h3 className="modal__title">
                                <FormattedMessage id="landingTitle" />
                            </h3>
                            <div className="modal__inner">
                                <div className="modal__gallery">
                                    <Slider {...settings}>
                                        <img className="modal__img" src={sup} alt="indonesia"></img>
                                        <img className="modal__img" src={sup2} alt="indonesia"></img>
                                        <img className="modal__img" src={sup3} alt="indonesia"></img>
                                        <img className="modal__img" src={sup4} alt="indonesia"></img>
                                        <img className="modal__img" src={sup5} alt="indonesia"></img>
                                        <img className="modal__img" src={sup6} alt="indonesia"></img>
                                    </Slider>
                                </div>
                                <div className="modal__info">
                                    <div className="modal__tech">HTML, CSS, Gulp</div>
                                    <div className="modal__desc">
                                        <FormattedMessage id="supDesc" />
                                    </div>
                                    <div className="modal__buttons">
                                        <form action="https://github.com/horoshopodumaj/sup" target="_blank">
                                            <button className="modal__button">GitHub</button>
                                        </form>
                                        <form action="https://sup-nu-ten.vercel.app/" target="_blank">
                                            <button className="modal__button">
                                                <FormattedMessage id="liveSite" />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
