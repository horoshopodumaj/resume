import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, Modal } from "@mui/material";
import { useRef, useState } from "react";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import indonesia from "../../assets/img/projects/indonesia11.jpg";
import indonesia2 from "../../assets/img/projects/indonesia2.jpg";
import indonesia4 from "../../assets/img/projects/indonesia4.jpg";
import { useScrollbar } from "../../hooks/useScrollbar";

export default function Indonesia() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const modal = useRef(null);
    useScrollbar(modal);
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
                <img className="project__img" src={indonesia} alt="indonesia"></img>
                <div className="project__info">
                    <h6 className="project__subtitle">Indonesia</h6>
                    <p className="project__text">HTML/CSS/JS</p>
                </div>
            </button>
            <Modal
                className="modal"
                open={open}
                //ref={modal}
                //onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box className="modal__container" ref={modal}>
                    <div className="modal__body">
                        <IconButton onClick={handleClose} sx={{ padding: "5px", float: "right" }}>
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
                                        <img className="modal__img" src={indonesia} alt="indonesia"></img>
                                        <img className="modal__img" src={indonesia2} alt="indonesia"></img>
                                        <img className="modal__img" src={indonesia4} alt="indonesia"></img>
                                    </Slider>
                                </div>
                                <div className="modal__info">
                                    <div className="modal__tech">HTML, CSS, JS</div>
                                    <div className="modal__desc">
                                        <FormattedMessage id="indonesiaDesc" />
                                    </div>
                                    <div className="modal__buttons">
                                        <form action="https://github.com/horoshopodumaj/indonesia" target="_blank">
                                            <button className="modal__button">GitHub</button>
                                        </form>
                                        <form action="https://indonesia-green.vercel.app/" target="_blank">
                                            <button className="modal__button">
                                                <FormattedMessage id="liveSite" />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
