let select = document.querySelector("#select");
let allLang = ["en", "ru"];

select.addEventListener("change", changeUrlLanguage);

function changeUrlLanguage() {
    let lang = select.value;

    location.href = window.location.pathname + "#" + lang;
    location.reload();
    console.log(lang);
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    console.log(hash);
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

changeLanguage();
