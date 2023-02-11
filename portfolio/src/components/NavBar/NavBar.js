import React from "react";
import "./navbar.scss";
import mainFoto from "../../assets/img/my_photo.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, List, ListItem, ListItemIcon } from "@mui/material";
import { Link } from "react-router-dom";
import LocalePicker from "../../LocalePicker";
import { FormattedMessage } from "react-intl";

export default function NavBar() {
    const navItems = ["home", "about", "projects", "contact"];
    return (
        <header className="header">
            <nav className="navbar">
                <div className="navbar__container">
                    <a className="navbar__frame" href="">
                        <span className="navbar__avatar">
                            <img className="navbar__img" src={mainFoto} alt="photo" />
                        </span>
                        <h2 className="navbar__title">Diana Murtazina</h2>
                    </a>
                    <div className="navbar__menu">
                        <ul className="navbar__list header__nav">
                            {navItems.map((item) => (
                                <li key={item} className="navbar__item">
                                    <a className="navbar__link" href={`#${item}`}>
                                        <FormattedMessage id={`${item}`} />
                                    </a>
                                </li>
                            ))}
                            {/* <li className="navbar__item">
                                <a className="navbar__link" href="#home">
                                    <FormattedMessage id="home" />
                                </a>
                            </li>
                            <li className="navbar__item">
                                <a className="navbar__link" href="#aboutme">
                                    About me
                                </a>
                            </li>
                            <li className="navbar__item">
                                <a className="navbar__link" href="#project">
                                    My projects
                                </a>
                            </li>
                            <li className="navbar__item">
                                <a className="navbar__link" href="#contactme">
                                    Contact Me
                                </a>
                            </li> */}
                        </ul>
                    </div>
                    <Box sx={{ display: "flex" }}>
                        <List className="navbar__social">
                            <ListItem sx={{ padding: 0, paddingRight: "10px" }}>
                                <Link>
                                    <ListItemIcon
                                        sx={{
                                            minWidth: "fit-content",
                                        }}>
                                        <LinkedInIcon
                                            sx={{
                                                "&.MuiSvgIcon-root:hover": {
                                                    color: "#0A66C2",
                                                },
                                                color: "white",
                                            }}
                                        />
                                    </ListItemIcon>
                                </Link>
                            </ListItem>
                            <ListItem sx={{ padding: 0, paddingRight: "10px" }}>
                                <Link>
                                    <ListItemIcon
                                        sx={{
                                            minWidth: "fit-content",
                                        }}>
                                        <GitHubIcon
                                            sx={{
                                                "&.MuiSvgIcon-root:hover": {
                                                    color: "#1f3d5a",
                                                },
                                                color: "white",
                                            }}
                                        />
                                    </ListItemIcon>
                                </Link>
                            </ListItem>
                        </List>
                        <LocalePicker />
                    </Box>

                    <button className="navbar__toggler">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>
        </header>
    );
}
