import { LOCALES } from "./locales";

export const messages = {
    [LOCALES.EN]: {
        name: "Diana Murtazina",
        home: "Home",
        about: "About me",
        projects: "My projects",
        contact: "Contact me",
        contactMe: "Contact",
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
        recommendTitle: `Application for reviews of books, movies, games, etc.`,
        recommendDesc: `The site is written in React, Node.js, Express, Postgresql, Sequelize ORM library is used to work with this database. The Redux Toolkit is used as a state manager, queries to the database go through createAsyncThunk and RTK Query.
        Used for registration passport.js. Components from the MUI library are used for styling. Images used in reviews are stored in the Cloudinary cloud. 
        Site visitors see all reviews, comments, likes.
        Only registered users can write a review, comments, rate the review itself with a like or give a rating to the content described in the review.
        Categories of reviews, can only be added by the administrator. The administrator sees a list of all users, can go to their page and edit the review.
        You can register in the application using Google, Twitter, GitHub accounts.
        Each user has their own page where they can view their reviews and edit them.
        The main page displays the latest added reviews, reviews with the highest rating that the author put and the tag cloud.
        The site is bilingual (Russian and English).
        The profile header is sticky, the site is adaptive, there is a burger menu. While waiting for responses from the server, skeletons are displayed.
        `,
        shopTitle: "Layout of a multi-page adaptive website.",
        shopDesc: `Layout of a multi-page adaptive website.
        Grids and flex are used for the layout of the site.
        
        The site has sliders, galleries, each video opens in a separate window, Google maps are connected. The layout is valid and cross-browser.`,
        getInTouch: "Get in Touch",
        sendNote: "SEND ME A NOTE",
        yourName: "Your name",
        yourEmail: "Your email",
        yourMessage: "Your message",
        send: "Send",
        author: "Built by Diana Murtazina",
        aboutDesc: `If you need professional HTML, CSS, JS, React coding, I can help you with this. 
        `,
        aboutSpec: `Specialization:`,
        aboutSpecDesc: `
        Front-end development cross-browser, valid, responsive, clean, and clear code.
        Usability, accessibility, performance, adaptive.`,
        aboutSkills: `Skills:`,
        aboutSkillsDesc: `BEM`,
        aboutReaspon: `Responsibility:
        `,
        aboutReasponDesc: `I always complete the job. I do not violate the terms.`,
        shortNameError: `Name is too short`,
        longNameError: `Name is too long`,
        shortMessageError: `Message is too short`,
        longMessageError: `Message is too long`,
        emailError: `Email not valid`,
    },
    [LOCALES.RU]: {
        name: "Диана Муртазина",
        home: "Главная",
        about: "Обо мне",
        projects: "Мои проекты",
        contact: "Мои контакты",
        contactMe: "Контакты",
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
        recommendTitle: `Приложение для отзывов на книги, фильмы, игры и т.д.`,
        recommendDesc: `Сайт написан на React, Node.js, Express, Postgresql, для работы с базой данной используется ORM-библиотека Sequelize. В качестве менеджера состояний используется Redux Toolkit, запросы к базе данных идут через createAsyncThunk и RTK Query.
        Для регистрации используется passport.js. Для стилизации используется компоненты из библиотеки MUI. Изображения, используемые в отзывах хранятся в облаке Cloudinary.
        Посетители сайта видят все отзывы, комментарии, лайки.
        Только зарегистрированные пользователи могут оставить отзыв, комментарии, оценить сам отзыв лайком или поставить рейтинг тому контенту, который описан в отзыве.
        Категории отзывов, может добавить только администратор. Администратор видит список всех пользователей, может зайти к ним на страницу и отредактировать отзыв.
        Зарегистрироваться в приложении можно, использую аккаунты Google, Twitter, GitHub. У каждого пользователя есть своя страница, где он может посмотреть свои отзывы и отредактировать их.
        На главной странице отображаются последние добавленные отзывы, отзывы с самым большим рейтингом, который поставил автор и облако тэгов.
        Сайт двуязычный (русский и английский). Шапка профиля липкая, сайт адаптивен, есть бургер-меню. Во время ожидания ответов от сервера отображаются скелетоны.
        `,
        shopTitle: "Верстка многостраничного адаптивного веб-сайта.",
        shopDesc: `Верстка многостраничного адаптивного веб-сайта.
        Верска с использованием Grid и flex.
        
        На сайте есть слайдеры, галереи, каждое видео открывается в отдельном окне, подключены карты Google. Валидная и кроссбраузерная верстка.`,
        getInTouch: "Связаться со мной",
        sendNote: "Напишите мне",
        yourName: "Ваше имя",
        yourEmail: "Ваша почта",
        yourMessage: "Ваше сообщение",
        send: "Отправить",
        author: "Автор: Диана Муртазина",
        aboutDesc: `Если вам нужен специалист со знанием HTML, CSS, JS, React, то я могу помочь вам.`,
        aboutSpec: `Моя специализация:`,
        aboutSpecDesc: `
        Интерфейсная разработка, кроссбраузерный, валидный, отзывчивый, чистый и понятный код.
                Удобство использования, доступность, производительность, адаптивность.`,
        aboutSkills: `Мои навыки:`,
        aboutSkillsDesc: `БЭМ`,
        aboutReaspon: `Моя ответственность:`,
        aboutReasponDesc: `Я всегда довожу работу до конца. Я не нарушаю условий.`,
        shortNameError: "Имя слишком короткое",
        longNameError: `Имя слишком длинное`,
        shortMessageError: `Сообщение слишком короткое`,
        longMessageError: `Сообщение слишком длинное`,
        emailError: "Это не email",
    },
};
