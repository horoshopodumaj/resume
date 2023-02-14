import { Box, IconButton, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import indonesia from "../../assets/img/projects/indonesia.jpg";
import Slider from "react-slick";
import CloseIcon from "@mui/icons-material/Close";

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
                            <h3 className="modal__title">Website For Travel To Indonesia</h3>
                            <div className="modal__inner">
                                <div className="modal__gallery">
                                    <Slider {...settings}>
                                        <img
                                            className="modal__img"
                                            src={indonesia}
                                            alt="indonesia"></img>
                                        <img
                                            className="modal__img"
                                            src={indonesia}
                                            alt="indonesia"></img>
                                        <img
                                            className="modal__img"
                                            src={indonesia}
                                            alt="indonesia"></img>
                                    </Slider>
                                </div>
                                <div className="modal__info">
                                    <div className="modal__tech">HTML, CSS, JS</div>
                                    <div className="modal__desc">
                                        Layout of a website for traveling to Indonesia. The site has
                                        implemented a burger menu, a gallery in pure Javascript. The
                                        layout is adaptive.
                                    </div>
                                    <div className="modal__buttons">
                                        <button className="modal__button">GitHub</button>
                                        <button className="modal__button">Live Site</button>
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
