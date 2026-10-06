# Карта файлов

Только исходники. `node_modules/`, `dist/` не документировать.

## Корень

| Файл | Роль |
|---|---|
| `package.json` | Скрипты `dev` / `build` / `lint` / `preview` |
| `vite.config.js` | Плагин React, без алиасов |
| `index.html` | Shell, Google Fonts Inter/Outfit, title |
| `CLAUDE.md` | Бриф для агента |
| `README.md` | Как запустить |

## `src/`

| Файл | Роль |
|---|---|
| `main.jsx` | StrictMode + BrowserRouter |
| `App.jsx` | LanguageProvider + Routes |
| `index.css` | Токены, @font-face, сброс, ru-переменные |
| `App.css` | Вся вёрстка, media 1200 и 720, ru-исключения шрифтов |

## Страницы `src/pages/`

| Файл | Маршрут |
|---|---|
| `Home.jsx` | `/` |
| `AboutPage.jsx` | `/about` |
| `ServicesPage.jsx` | `/services` |
| `ProjectsPage.jsx` | `/projects` |
| `ProjectPage.jsx` | `/projects/:slug` |

## Компоненты `src/components/`

| Файл | Где живёт |
|---|---|
| `Header.jsx` | Все страницы. `variant`: `dark` \| `light` |
| `Logo.jsx` | SVG-логотип |
| `LetterTiles.jsx` | Заголовки кружками. `variant`: `outline` (дефолт) \| `filled` |
| `Hero.jsx` | Главная, первый экран |
| `About.jsx` | Главная, блок about |
| `Projects.jsx` | Главная, 3 карточки |
| `ProjectCard.jsx` | Красная карточка. `moscow-2030` → `is-title-caps` |
| `Services.jsx` | Главная, табы услуг |
| `SelectedProject.jsx` | Главная, избранный moscow-2030 |
| `Reviews.jsx` | Главная |
| `Clients.jsx` | Главная и О нас, лента логотипов |
| `OrderBlock.jsx` | Форма заказа, id=`order` |
| `Contacts.jsx` | Красный футер, id=`contacts` |
| `AboutHero.jsx` | `/about` hero |
| `WhoWeAre.jsx` | `/about` |
| `Facts.jsx` | `/about` |
| `Team.jsx` | `/about` |
| `CategoryList.jsx` | `/services` и `/projects` |
| `ProjectLightbox.jsx` | Кейс, просмотр фото |

## Данные `src/data/`

| Файл | Роль |
|---|---|
| `projects.js` | Импорт фото, makeProject, catalog/extra, localize, getProject, getRelevant |
| `categories.js` | 11 категорий, `categoryLabel`, `isCategoryId` |
| `team.js` | 7 человек + `teamExtraCount = 35` |

## i18n `src/i18n/`

| Файл | Роль |
|---|---|
| `copy.js` | Словари `en` / `ru` |
| `LanguageContext.jsx` | Провайдер и хуки |

Ключи верхнего уровня `copy.js`: `nav`, `hero`, `about`, `who`, `facts`, `team`, `projects`, `services`, `selected`, `reviews`, `clients`, `contacts`, `order`, `aboutPage`, `servicePage`, `case`.

## Ассеты `src/assets/`

- `fonts/NaNJauneTRIAL-MaxiExtraBold.ttf` — display-шрифт
- `logo.svg`, `logo-lockup.svg`, `logo-wordmark.svg`, `wordmark.svg`
- `union.svg`, `union-about.svg`, `about-hero-mark.svg`, `selected-mark-*.svg`, `hero-o.svg`
- `order-mark-en.svg`, `order-mark-ru.svg` — слово «ORDER A PROJECT» / русская версия
- Фото hero/about/services/reviews/who/facts
- Проектные съёмки: `project-{slug}-NN.jpg` (+ webp где есть)
- `public/favicon.svg`, `public/icons.svg`

При добавлении проекта: положить фото в `src/assets/`, импортировать в `projects.js`, описать EN-поля и блок `ru`.
