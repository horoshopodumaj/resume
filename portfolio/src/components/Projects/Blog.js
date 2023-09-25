import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, Modal } from "@mui/material";
import { useRef, useState } from "react";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import blog1 from "../../assets/img/projects/blog1.jpg";
import blog from "../../assets/img/projects/blog12.jpg";
import blog13 from "../../assets/img/projects/blog13.jpg";
import blog2 from "../../assets/img/projects/blog2.jpg";
import blog3 from "../../assets/img/projects/blog3.jpg";
import { useScrollbar } from "../../hooks/useScrollbar";

export default function Blog() {
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
                <img className="project__img" src={blog13} alt="blog"></img>
                <div className="project__info">
                    <h6 className="project__subtitle">Blog</h6>
                    <p className="project__text">Next.js/Node.js</p>
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
                                <FormattedMessage id="blogTitle" />
                            </h3>
                            <div className="modal__inner">
                                <div className="modal__gallery">
                                    <Slider {...settings}>
                                        <img className="modal__img" src={blog} alt="blog"></img>
                                        <img className="modal__img" src={blog1} alt="blog"></img>
                                        <img className="modal__img" src={blog2} alt="blog"></img>
                                        <img className="modal__img" src={blog3} alt="blog"></img>
                                    </Slider>
                                </div>
                                <div className="modal__info">
                                    <div className="modal__tech">Next.js, Node.js, MongoDB</div>
                                    <div className="modal__desc">
                                        <FormattedMessage id="blogDesc" />
                                    </div>
                                    <div className="modal__buttons">
                                        <form action="https://github.com/horoshopodumaj/blogApp" target="_blank">
                                            <button className="modal__button">GitHub</button>
                                        </form>
                                        <form action="https://blog-kzuyudojj-horoshopodumaj.vercel.app" target="_blank">
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
