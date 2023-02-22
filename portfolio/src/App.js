import "./App.scss";
import { IntlProvider } from "react-intl";
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";
import GlobalContext from "./context/GlobalContext";
import NavBar from "./components/NavBar/NavBar";
import { useEffect, useState } from "react";
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

    // const [scrollTop, setScrollTop] = useState(0);
    // const [hash, setHash] = useState("");

    // useEffect(() => {
    //     const handleScroll = (event) => {
    //         setScrollTop(window.scrollY);
    //         console.log(event.currentTarget.location);
    //         setHash(event.currentTarget.location.hash.split("#")[1]);
    //         console.log(event.currentTarget.location.hash);
    //     };

    //     window.addEventListener("scroll", handleScroll);

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);

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
                    <NavBar />
                    <Home />
                    <About />
                    <Projects />
                    <Contact />
                    <Footer />
                    <BackToTop />
                </div>
            </IntlProvider>
        </GlobalContext.Provider>
    );
}

export default App;
