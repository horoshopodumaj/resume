import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Modal } from "@mui/material";
import "overlayscrollbars/overlayscrollbars.css";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import recomm from "../../assets/img/projects/recom11.jpg";
import recomm2 from "../../assets/img/projects/recom21.jpg";
import recomm3 from "../../assets/img/projects/recom31.jpg";
import recomm4 from "../../assets/img/projects/recom41.jpg";
import recomm5 from "../../assets/img/projects/recom51.jpg";

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
                    <h6 className="project__subtitle">application</h6>
                    <p className="project__text">React/Node.js</p>
                </div>
            </button>
            <Modal className="modal" open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
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
                                <FormattedMessage id="recommendTitle" />
                            </h3>
                            <div className="modal__inner">
                                <div className="modal__gallery">
                                    <Slider {...settings}>
                                        <img className="modal__img" src={recomm} alt="recomm"></img>
                                        <img className="modal__img" src={recomm2} alt="recomm"></img>
                                        <img className="modal__img" src={recomm3} alt="recomm"></img>
                                        <img className="modal__img" src={recomm4} alt="recomm"></img>
                                        <img className="modal__img" src={recomm5} alt="recomm"></img>
                                    </Slider>
                                </div>
                                <div className="modal__info">
                                    <div className="modal__tech">React, Node.js, Express, Postgresql, Sequelize</div>
                                    <div className="modal__desc">
                                        <FormattedMessage id="recommendDesc" />
                                    </div>
                                    <div className="modal__buttons">
                                        <form action="https://github.com/horoshopodumaj/recommendations" target="_blank">
                                            <button className="modal__button">GitHub</button>
                                        </form>
                                        <form action="https://recommendations-sggu.onrender.com/" target="_blank">
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
