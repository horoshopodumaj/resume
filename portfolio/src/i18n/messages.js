import { LOCALES } from "./locales";

export const messages = {
    [LOCALES.EN]: {
        name: "Diana Murtazina",
        home: "Home",
        about: "About me",
        projects: "My projects",
        contact: "Contact me",
        welcome: "Welcome to My Portfolio",
        heroContact: "Contact Me",
        knowMeMore: "Know me more",
        aboutName: "Name",
        aboutI: "I'm Diana, a",
        frontend: "front-end developer",
        skills: "My skills",
        portfolio: "portfolio",
        indonesiaTitle: "Website For Travel To Indonesia",
        indonesiaDesc:
            "Layout of a website for traveling to Indonesia. The site has implemented a burger menu, a gallery in pure Javascript. The layout is adaptive.",
        landingTitle: "Landing Page Layout",
        supDesc: `Layout of a beautiful adaptive landing page for sale of sup board. The landing page contains two galleries of images with an unusual design. Grids were used in the layout. Gulp was used when building the project.`,
        sashaTitle: "Portfolio layout",
        sashaDesc:
            "The portfolio is written in React, using the MUI library. It is possible to switch languages.",
        loginTitle: "Table with users",
        loginDesc: `The application is implemented using technologies: React,
        Node.js, Express, MongoDB. Unauthenticated users do not have
        access to user management (access only to the registration
        form or authentication form). Authenticated users see the
        "users" table (ID, name, soap, registration date, last login
        date, status) with users. The table in the left column
        contains checkboxes for multiple selection, in the column
        header there is a check box "select all/deselect". Above the
        toolbar table with actions: Block, Unblock, Delete. The user
        can delete or block himself — at the same time, he must be
        logged out immediately. If someone else blocks or deletes
        the user, then at any next action the user is redirected to
        the login page. When registering, it should be possible to
        use any password, even from a single character. The blocked
        user cannot log in, the deleted user can re-register.`,
    },
    [LOCALES.RU]: {
        name: "Диана Муртазина",
        home: "Главная",
        about: "Обо мне",
        projects: "Мои проекты",
        contact: "Мои контакты",
        welcome: "Добро пожаловать на страницу моего портфолио",
        heroContact: "Свяжитесь со мной",
        knowMeMore: "Немного обо мне",
        aboutName: "Имя",
        aboutI: "Меня зовут Диана, я",
        frontend: "фронтенд разработчица ",
        skills: "Мои навыки",
        portfolio: "портфолио",
        indonesiaTitle: "Сайт для путешествий в Индонезию",
        indonesiaDesc:
            "Верстка сайт для путешествий в Индонезию. На сайте реализовано бургер  меню, галерея на чистом Javascript. Верстка адаптивная.",
        landingTitle: "Верстка лендинга",
        supDesc: `Верстка красивого адаптивного лендинга для продажи сап борда. Лендинг содержит две галереи изображений с необычным дизайном. При верстке использованы гриды. При сборке проекта использован Gulp.`,
        sashaTitle: "Верстка портфолио",
        sashaDesc:
            "Портфолио написано на React, с использованием библиотеки MUI. Есть возможность переключения языков.",
        loginTitle: "Таблица пользователей",
        loginDesc: `Приложение реализовано с помощью технологий: React, Node.js, Express, MongoDB. Неаутентифицированные пользователи не имеют доступа к управлению пользователями (доступ только к форме регистрации или форме аутентификации). Аутентифицированные пользователи видят таблицу "пользователи" (идентификатор, именем, мылом, датой регистрации, датой последнего логина, статусом) с пользователями. Таблица левой колонкой содержит чек-боксы для множественного выделения, в заголовке колонки чек-бокс "выделить все/снять выделение". Над таблицей тулбар с действиями: Block, Unblock, Delete.
        Пользователь может удалить или заблокировать себя — при этом сразу должен быть разлогинен. Если кто-то другой блокирует или удаляет пользователя, то при любом следующем действии пользователь переправляется на страницу логина. При регистрации должна быть возможность использовать любой пароль, даже из одного символа. Заблокированный пользователь не может войти, удаленный может заново зарегистрироваться.`,
    },
};
