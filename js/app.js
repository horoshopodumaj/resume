let select = document.querySelector("#select");
let selectBurger = document.querySelector("#select_burger");
let allLang = ["en", "ru"];

select.addEventListener("change", changeUrlLanguage);
selectBurger.addEventListener("change", changeUrlLanguageBurger);

function changeUrlLanguage() {
    let lang = select.value;

    location.href = window.location.pathname + "#" + lang;
    location.reload();
    console.log(lang);
}
function changeUrlLanguageBurger() {
    let lang = selectBurger.value;

    location.href = window.location.pathname + "#" + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + "/";
        location.reload();
    }

    select.value = hash;
    for (let key in langArr) {
        let elem = document.querySelector(".lng-" + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }
    }
}
function changeLanguageBurger() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + "/";
        location.reload();
    }

    selectBurger.value = hash;
    for (let key in langArr) {
        let elem = document.querySelector(".lng-" + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }
    }
}

const NAVBAR_SCROLLED_CLASS = "navbar_scrolled";
const navbarNode = document.querySelector(".navbar_sticky");
const stickyStartScroll = 250;

toggleBgNavbar();
window.addEventListener("scroll", () => toggleBgNavbar());

function toggleBgNavbar() {
    if (
        window.scrollY >= stickyStartScroll &&
        !navbarNode.classList.contains(NAVBAR_SCROLLED_CLASS)
    ) {
        navbarNode.classList.add(NAVBAR_SCROLLED_CLASS);
    } else if (
        window.scrollY < stickyStartScroll &&
        navbarNode.classList.contains(NAVBAR_SCROLLED_CLASS)
    ) {
        navbarNode.classList.remove(NAVBAR_SCROLLED_CLASS);
    }
}

changeLanguage();
changeLanguageBurger();
