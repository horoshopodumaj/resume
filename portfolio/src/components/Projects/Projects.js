import React, { forwardRef } from "react";
import { FormattedMessage } from "react-intl";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Blog from "./Blog";
import Brechko from "./Brechko";
import Login from "./Login";
import Recommend from "./Recommend";
import Shop from "./Shop";
import Sup from "./Sup";
import "./projects.scss";

const Projects = forwardRef((props, projectsRef) => {
    return (
        <section className="projects" id="projects" ref={projectsRef}>
            <div className="container">
                <div className="projects__header">
                    <h2 className="projects__title">
                        <FormattedMessage id="portfolio" />
                    </h2>
                    <p className="projects__subtitle">
                        <FormattedMessage id="projects" />
                    </p>
                </div>
                <div className="projects__inner">
                    <div className="projects__items">
                        <Brechko />
                        <Sup />
                        <Blog />
                        <Recommend />
                        <Login />
                        <Shop />
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Projects;
