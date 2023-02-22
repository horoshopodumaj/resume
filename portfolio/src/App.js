import "./App.scss";
import { IntlProvider } from "react-intl";
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";
import GlobalContext from "./context/GlobalContext";
import NavBar from "./components/NavBar/NavBar";
import { useCallback, useEffect, useRef, useState } from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BackToTop from "./components/BackToTop/BackToTop";

export const URL = process.env.REACT_APP_SERVER_URL;

function App() {
    const [currentLocale, setCurrentLocale] = useState(
        localStorage.getItem("language") || LOCALES.EN
    );

    let [activeLink, setActiveLink] = useState(0);

    const onChangeActiveLink = useCallback((index) => {
        setActiveLink((activeLink = index));
        console.log(index);
    }, []);

    const aboutRef = useRef();
    const projectsRef = useRef();
    const contactRef = useRef(null);
    useEffect(() => {
        const handleScroll = (event) => {
            if (window.scrollY === 0) {
                setActiveLink(0);
            } else if (
                aboutRef.current.offsetTop - window.scrollY < window.innerHeight / 2 &&
                projectsRef.current.offsetTop - window.scrollY >= window.innerHeight / 2
            ) {
                setActiveLink(1);
            } else if (
                projectsRef.current.offsetTop - window.scrollY < window.innerHeight / 2 &&
                contactRef.current.offsetTop - window.scrollY >= window.innerHeight / 2
            ) {
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
                defaultLocale={LOCALES.EN}>
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
