# Handoff последней сессии (Grok → Claude Code)

Дата: 2026-10-06. Репозиторий: `c:\Users\onehe\aristocrat`. Заказчик общается по-русски, правки точечные по вёрстке.

## Что сделано в этой сессии

### 1. Страница Услуга `/services` — блок после hero

Файл: `src/pages/ServicesPage.jsx`, секция `.service-about`.

- Сначала убрали текстовый h2 «ABOUT US».
- Затем вернули заголовок **кружками**: `<LetterTiles text={t.servicePage.aboutTiles} />`.
- Строки: EN `ABOUT US`, RU `О НАС` в `src/i18n/copy.js` → `servicePage.aboutTiles`.
- Лид `.service-about-lead` с `margin-top: 20px` и `text-indent: 210px` (на мобиле indent 0).

Не возвращать сплошной наборный заголовок 78px вместо кружков.

### 2. Красные карточки проектов — шрифт на русском

Проблема: `html[lang='ru'] { --font-display: Inter }` и отдельные правила гнали заголовки карточек в Inter.

Сейчас NaN Jaune Trial на RU:

```css
.project-meta h3 { font-family: 'NaN Jaune Trial', sans-serif; ... }

html[lang='ru'] .project-meta h3 { font-family: 'NaN Jaune Trial', sans-serif; font-stretch: 125%; }
html[lang='ru'] .projects-page .project-meta h3 { ... uppercase; font-stretch: 125%; }
html[lang='ru'] .project-feature-copy h2 { font-family: 'NaN Jaune Trial', sans-serif; }
```

Действует на главной, `/services`, `/projects`, релевантных карточках кейса.

### 3. Москва 2030 — капс в карточке и Jaune на фото избранного

- `ProjectCard`: если `slug === 'moscow-2030'` → класс `is-title-caps`.
- `ProjectsPage` фичер: тот же класс на `.project-feature`.
- CSS: `.is-title-caps` → `text-transform: uppercase`.
- Главная, `SelectedProject`: `h2` уже был `.toUpperCase()`. Шрифт сменён с Inter на NaN Jaune:

```css
.moscow-copy h2 { font-family: 'NaN Jaune Trial', sans-serif; font-stretch: 125%; }
html[lang='ru'] .moscow .moscow-copy h2 { то же }
```

### 4. `/about` hero — белая полоса

`.about-page-hero-rule`:

- ширина `100vw`, вынесена из полей inner (`left: 50%; margin-left: -50vw`)
- `height: 1px` (сделали тоньше по запросу, было 2pt)
- цвет cream с непрозрачностью 40%: `color-mix(in srgb, var(--cream) 40%, transparent)`

### 5. `/about` hero — правый графический элемент

`.about-page-hero-mark-right { top: calc(42% - 40px); right: 50px; }`

Левый марк остался на `top: 42%`.

## Файлы, которые менялись

- `src/pages/ServicesPage.jsx`
- `src/pages/ProjectsPage.jsx`
- `src/components/ProjectCard.jsx`
- `src/i18n/copy.js`
- `src/App.css`

Документация добавлена этой выгрузкой: `CLAUDE.md`, `docs/*`, обновлённый `README.md`.

## Известные шероховатости (не баги сессии, но полезно знать)

- Форма заказа не отправляется.
- Favicon в `index.html` всё ещё `/vite.svg`.
- `dist/` устаревший, не источник истины.
- На узкой мобиле кружки «ABOUT US» могут переносить последнюю букву — так устроен wrap `.letter-tiles`.
- Категория `private` в RU тоже написана латиницей: `private events`.
- Vite на Windows может отдать старый CSS, если `App.css` сохранить дважды за одну секунду.

## Как продолжать визуальные правки

1. Уточнить страницу (главная / о нас / услуга / проекты / кейс) и язык.
2. Найти блок в `docs/PAGES.md`.
3. Править компонент + `App.css`, тексты — в `copy.js` / `projects.js`.
4. Проверить EN и RU, 1440 и ~390 ширины.
5. Display-заголовки на RU не через `--font-display`.
