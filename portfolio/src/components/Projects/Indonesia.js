import { IconButton, Modal } from "@mui/material";
import { useState } from "react";
import indonesia from "../../assets/img/projects/indonesia.jpg";
import indonesia2 from "../../assets/img/projects/indonesia2.jpg";
import Slider from "react-slick";
import CloseIcon from "@mui/icons-material/Close";
import { FormattedMessage } from "react-intl";

export default function Indonesia() {
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
    };
    return (
        <div className="project">
            <button className="project__item" onClick={handleOpen}>
                <img className="project__img" src={indonesia} alt="indonesia"></img>
                <div className="project__info">
                    <h6 className="project__subtitle">Indonesia</h6>
                    <p className="project__text">HTML/CSS/JS</p>
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
                        <IconButton onClick={handleClose} sx={{ padding: 0, float: "right" }}>
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
                                <FormattedMessage id="indonesiaTitle" />
                            </h3>
                            <div className="modal__inner">
                                <div className="modal__gallery">
                                    <Slider {...settings}>
                                        <img
                                            className="modal__img"
                                            src={indonesia}
                                            alt="indonesia"></img>
                                        <img
                                            className="modal__img"
                                            src={indonesia2}
                                            alt="indonesia"></img>
                                    </Slider>
                                </div>
                                <div className="modal__info">
                                    <div className="modal__tech">HTML, CSS, JS</div>
                                    <div className="modal__desc">
                                        <FormattedMessage id="indonesiaDesc" />
                                    </div>
                                    <div className="modal__buttons">
                                        <form
                                            action="https://github.com/horoshopodumaj/indonesia"
                                            target="_blank">
                                            <button className="modal__button">GitHub</button>
                                        </form>
                                        <form
                                            action="https://indonesia-green.vercel.app/"
                                            target="_blank">
                                            <button className="modal__button">Live Site</button>
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
