import React from "react";
import { FormattedMessage } from "react-intl";
import "./projects.scss";
import Indonesia from "./Indonesia";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sup from "./Sup";
import Brechko from "./Brechko";
import Recommend from "./Recommend";
import Login from "./Login";

export default function Projects() {
    return (
        <section className="projects" id="projects">
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
                        <Indonesia />
                        <Sup />
                        <Brechko />
                        <Recommend />
                        <Login />
                    </div>
                </div>
            </div>
        </section>
    );
}
