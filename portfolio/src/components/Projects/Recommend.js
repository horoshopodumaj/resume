import { IconButton, Modal } from "@mui/material";
import { useState } from "react";
import recomm from "../../assets/img/projects/recom.jpg";
import recomm2 from "../../assets/img/projects/recom2.jpg";
import recomm3 from "../../assets/img/projects/recom3.jpg";
import recomm4 from "../../assets/img/projects/recom4.jpg";
import Slider from "react-slick";
import CloseIcon from "@mui/icons-material/Close";
import { FormattedMessage } from "react-intl";
import { OverlayScrollbars } from "overlayscrollbars";
import "overlayscrollbars/overlayscrollbars.css";

// const modal = document.querySelector(".modal__container");
// OverlayScrollbars(modal, {
//     resize: "none",
//     scrollbars: {
//         visibility: "auto",
//         autoHide: "move",
//     },
// });

export default function Recommend() {
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
                <img className="project__img" src={recomm} alt="recomm"></img>
                <div className="project__info">
                    <h6 className="project__subtitle">Recommend</h6>
                    <p className="project__text">React/MUI</p>
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
                                <FormattedMessage id="sashaTitle" />
                            </h3>
                            <div className="modal__inner">
                                <div className="modal__gallery">
                                    <Slider {...settings}>
                                        <img className="modal__img" src={recomm} alt="recomm"></img>
                                        <img
                                            className="modal__img"
                                            src={recomm2}
                                            alt="recomm"></img>
                                        <img
                                            className="modal__img"
                                            src={recomm3}
                                            alt="recomm"></img>
                                        <img
                                            className="modal__img"
                                            src={recomm4}
                                            alt="recomm"></img>
                                    </Slider>
                                </div>
                                <div className="modal__info">
                                    <div className="modal__tech">React, MUI</div>
                                    <div className="modal__desc">
                                        <FormattedMessage id="sashaDesc" />
                                    </div>
                                    <div className="modal__buttons">
                                        <form
                                            action="https://github.com/horoshopodumaj/brechko"
                                            target="_blank">
                                            <button className="modal__button">GitHub</button>
                                        </form>
                                        <form action="https://brechko.vercel.app" target="_blank">
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
