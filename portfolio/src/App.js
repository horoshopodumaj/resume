import "./App.scss";
import mainFoto from "./assets/img/my_photo.jpg";

function App() {
    return (
        <div className="page">
            <header className="header">
                <nav className="navbar">
                    <div className="navbar__container">
                        <a className="navbar__link" href="">
                            <span className="navbar__frame">
                                <img className="navbar__img" src={mainFoto} alt="" />
                            </span>
                            <h2 className="navbar__title">Diana Murtazina</h2>
                        </a>
                        <ul className="navbar__list header__nav">
                            <li>
                                <a className="navbar__item" href="#home">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="navbar__item" href="#aboutme">
                                    About me
                                </a>
                            </li>
                            <li>
                                <a className="navbar__item" href="#project">
                                    My projects
                                </a>
                            </li>
                            <li>
                                <a className="navbar__item" href="#contactme">
                                    Contact Me
                                </a>
                            </li>
                            <li>
                                <select name="#" id="select" className="navbar__lang">
                                    <option value="ru">RU</option>
                                    <option value="en" selected>
                                        EN
                                    </option>
                                </select>
                            </li>
                        </ul>
                        <button>kkk</button>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default App;
