import "./home.scss";
import Typewriter from "typewriter-effect";

export default function Home() {
    return (
        <section id="home">
            <div className="hero">
                <div className="hero__mask"></div>
                <div className="hero__bg"></div>
                <div className="hero__content">
                    <div className="container">
                        <h1 className="hero__title">Welcome to my Portfolio</h1>
                        <h2 className="hero__typewriter">
                            <Typewriter
                                options={{
                                    strings: [
                                        "I'm Murtazina Diana.",
                                        "I'm a front-end developer.",
                                        "I'm a tea lover.",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h2>
                        <a className="hero__button" href="#contact">
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
