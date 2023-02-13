import "./about.scss";

export default function About() {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="about__header">
                    <h2 className="about__title">About me</h2>
                    <p className="about__subtitle">Know me more</p>
                </div>
                <div className="about__inner">
                    <div className="about__content">
                        <h3 className="about__littletitle">
                            I'm Diana, a<span> front-end developer</span>
                        </h3>
                        <p className="about__desc">
                            {" "}
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
                            recusandae itaque excepturi hic consequatur repellendus ad magni
                            molestias assumenda in, perspiciatis eligendi obcaecati nulla veniam
                            dicta? Beatae voluptatum deserunt dolor! Lorem ipsum dolor sit amet
                            consectetur, adipisicing elit. Voluptatem, praesentium tenetur, impedit
                            voluptas vero aliquam recusandae ex nobis earum, tempore voluptatibus
                            est eos enim commodi iure repellat perspiciatis cum facere!{" "}
                        </p>
                    </div>
                    <div className="about__info">
                        <ul className="about__list">
                            <li className="about__name">
                                {" "}
                                <span className="about__item">Name:</span> Murtazina Diana
                            </li>
                            <li className="about__email">
                                {" "}
                                <span className="about__item">Email:</span>{" "}
                                <a href="mailto:dianamurtazina.job@gmail.com">
                                    dianamurtazina.job@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
