import { useCallback, useEffect, useRef, useState } from "react";
import { IntlProvider } from "react-intl";
import "./App.scss";
import About from "./components/About/About";
import BackToTop from "./components/BackToTop/BackToTop";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";
import GlobalContext from "./context/GlobalContext";
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";

export const URL = process.env.REACT_APP_SERVER_URL;

function App() {
    const [currentLocale, setCurrentLocale] = useState(localStorage.getItem("language") || LOCALES.RU);

    let [activeLink, setActiveLink] = useState(0);

    const onChangeActiveLink = useCallback((index) => {
        // eslint-disable-next-line
        setActiveLink((activeLink = index));
    }, []);

    const aboutRef = useRef();
    const projectsRef = useRef();
    const contactRef = useRef(null);
    useEffect(() => {
        const handleScroll = (event) => {
            if (window.scrollY === 0) {
                setActiveLink(0);
            } else if (aboutRef.current.offsetTop - window.scrollY < window.innerHeight / 2 && projectsRef.current.offsetTop - window.scrollY >= window.innerHeight / 2) {
                setActiveLink(1);
            } else if (projectsRef.current.offsetTop - window.scrollY < window.innerHeight / 2 && contactRef.current.offsetTop - window.scrollY >= window.innerHeight / 2) {
                setActiveLink(2);
            } else if (contactRef.current.offsetTop - window.scrollY < window.innerHeight / 2) {
                setActiveLink(3);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <GlobalContext.Provider value={{ currentLocale, setCurrentLocale }}>
            <IntlProvider
                onError={(err) => {
                    if (err.code === "MISSING_TRANSLATION") {
                        //console.warn("Missing translation", err.message);
                        return;
                    }
                    throw err;
                }}
                messages={messages[currentLocale]}
                locale={currentLocale}
                defaultLocale={LOCALES.RU}>
                <div className="page">
                    <NavBar onChangeActiveLink={onChangeActiveLink} activeLink={activeLink} />
                    <Home />
                    <About ref={aboutRef} />
                    <Projects ref={projectsRef} />
                    <Contact ref={contactRef} />
                    <Footer />
                    <BackToTop />
                </div>
            </IntlProvider>
        </GlobalContext.Provider>
    );
}

export default App;
