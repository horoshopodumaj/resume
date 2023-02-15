import { IconButton, Modal } from "@mui/material";
import { useState } from "react";
import sasha from "../../assets/img/projects/sasha11.jpg";
import sasha2 from "../../assets/img/projects/sasha2.jpg";
import sasha3 from "../../assets/img/projects/sasha3.jpg";
import Slider from "react-slick";
import CloseIcon from "@mui/icons-material/Close";
import { FormattedMessage } from "react-intl";

export default function Brechko() {
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
                <img className="project__img" src={sasha} alt="sasha"></img>
                <div className="project__info">
                    <h6 className="project__subtitle">Portfolio</h6>
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
                                        <img className="modal__img" src={sasha} alt="sasha"></img>
                                        <img className="modal__img" src={sasha2} alt="sasha"></img>
                                        <img className="modal__img" src={sasha3} alt="sasha"></img>
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
