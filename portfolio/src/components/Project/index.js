import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Modal } from "@mui/material";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import images from "../../assets/img/projects/images";

const Project = ({ project }) => {
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
                <img className="project__img" src={images[project.images[0].img]} alt="sasha"></img>
                <div className="project__info">
                    <h6 className="project__subtitle">{project.subtitle}</h6>
                    <p className="project__text">{project.text}</p>
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
                                <FormattedMessage id={project.modalTitle} />
                            </h3>
                            <div className="modal__inner">
                                <div className="modal__gallery">
                                    <Slider {...settings}>
                                        {project.images.map((img) => (
                                            <img key={img.id} className="modal__img" src={images[img.img]} alt={img.img}></img>
                                        ))}
                                    </Slider>
                                </div>
                                <div className="modal__info">
                                    <div className="modal__tech">{project.modalTech}</div>
                                    <div className="modal__desc">
                                        <FormattedMessage id={project.modalDesc} />
                                    </div>
                                    <div className="modal__buttons">
                                        <form action={project.git} target="_blank">
                                            <button className="modal__button">GitHub</button>
                                        </form>
                                        <form action={project.site} target="_blank">
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
};

export default Project;
