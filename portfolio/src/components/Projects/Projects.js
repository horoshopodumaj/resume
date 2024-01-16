import React, { forwardRef } from "react";
import { FormattedMessage } from "react-intl";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { projects } from "../../data.js";
import Project from "../Project";
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
                        {projects.map((project) => {
                            return <Project project={project} key={project.id} />;
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Projects;
