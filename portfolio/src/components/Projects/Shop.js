import { IconButton, Modal } from "@mui/material";
import { useState } from "react";
import shop from "../../assets/img/projects/furn.jpg";
import shop2 from "../../assets/img/projects/furn2.jpg";
import shop3 from "../../assets/img/projects/furn3.jpg";
import shop4 from "../../assets/img/projects/furn4.jpg";
import shop5 from "../../assets/img/projects/furn5.jpg";
import Slider from "react-slick";
import CloseIcon from "@mui/icons-material/Close";
import { FormattedMessage } from "react-intl";

export default function Shop() {
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
                <img className="project__img" src={shop} alt="shop"></img>
                <div className="project__info">
                    <h6 className="project__subtitle">Shop</h6>
                    <p className="project__text">HTML/CSS/jQuery</p>
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
                                <FormattedMessage id="shopTitle" />
                            </h3>
                            <div className="modal__inner">
                                <div className="modal__gallery">
                                    <Slider {...settings}>
                                        <img className="modal__img" src={shop} alt="shop"></img>
                                        <img className="modal__img" src={shop2} alt="shop"></img>
                                        <img className="modal__img" src={shop3} alt="shop"></img>
                                        {/* <img className="modal__img" src={shop4} alt="shop"></img> */}
                                        <img className="modal__img" src={shop5} alt="shop"></img>
                                    </Slider>
                                </div>
                                <div className="modal__info">
                                    <div className="modal__tech">HTML, CSS, jQuery, Gulp</div>
                                    <div className="modal__desc">
                                        <FormattedMessage id="shopDesc" />
                                    </div>
                                    <div className="modal__buttons">
                                        <form
                                            action="https://github.com/horoshopodumaj/furniture"
                                            target="_blank">
                                            <button className="modal__button">GitHub</button>
                                        </form>
                                        <form
                                            action="https://furniture-five.vercel.app/index.html"
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
