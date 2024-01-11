import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Modal } from "@mui/material";
import "overlayscrollbars/overlayscrollbars.css";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import kanban from "../../assets/img/projects/kanban.jpg";
import kanban1 from "../../assets/img/projects/kanban1.jpg";
import kanban2 from "../../assets/img/projects/kanban2.jpg";

export default function KanbanBoard() {
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
                <img className="project__img" src={kanban} alt="kanban"></img>
                <div className="project__info">
                    <h6 className="project__subtitle">kanban board</h6>
                    <p className="project__text">React/Vite</p>
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
                                <FormattedMessage id="kanbanTitle" />
                            </h3>
                            <div className="modal__inner">
                                <div className="modal__gallery">
                                    <Slider {...settings}>
                                        <img className="modal__img" src={kanban} alt="kanban"></img>
                                        <img className="modal__img" src={kanban1} alt="kanban"></img>
                                        <img className="modal__img" src={kanban2} alt="kanban"></img>
                                    </Slider>
                                </div>
                                <div className="modal__info">
                                    <div className="modal__tech">React, Vite, Tailwindcss, Redux Toolkit</div>
                                    <div className="modal__desc">
                                        <FormattedMessage id="kanbanDesc" />
                                    </div>
                                    <div className="modal__buttons">
                                        <form action="https://github.com/horoshopodumaj/kanban_board" target="_blank">
                                            <button className="modal__button">GitHub</button>
                                        </form>
                                        <form action="https://kanban-board-snowy-psi.vercel.app/" target="_blank">
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
