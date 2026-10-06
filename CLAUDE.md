# ARISTOCRAT — инструкции для Claude Code

Маркетинговый сайт декораторского ивент-агентства ARISTOCRAT. React 19 + Vite 8 + React Router 7. TypeScript нет: исходники `.jsx` / `.js` / `.css`. Бэкенда нет.

Полная карта: [`docs/README.md`](docs/README.md).

## Команды

```bash
npm install
npm run dev      # Vite, обычно http://localhost:5173
npm run build
npm run preview
npm run lint     # oxlint
```

Рабочая директория: корень репозитория `aristocrat`.

## Как устроен проект

| Путь | Зачем |
|---|---|
| `src/pages/` | Страницы-маршруты |
| `src/components/` | Блоки страниц |
| `src/data/` | Проекты, категории, команда |
| `src/i18n/copy.js` | Все тексты UI, EN + RU |
| `src/i18n/LanguageContext.jsx` | Язык, `localStorage` ключ `aristocrat-lang` |
| `src/index.css` | Токены, шрифты, сброс |
| `src/App.css` | Вся вёрстка |
| `src/assets/` | Фото, SVG, шрифт NaN Jaune |

Маршруты в `src/App.jsx`:

- `/` — главная
- `/about` — О нас
- `/services` — Услуга (private events)
- `/projects` — каталог
- `/projects/:slug` — кейс

Язык по умолчанию: **английский**. Переключатель `ru \ en` в хедере. `document.documentElement.lang` ставится в `ru` или `en`.

Тексты UI: `useCopy()` / `useLanguage()`. Проекты: `localizeProject()` / `useLocalizedProjects()`.

## Правила правок

1. **Тексты** — только в `src/i18n/copy.js` (оба языка) или в `src/data/projects.js` (`ru: { ... }`). Не хардкодить строки в JSX, кроме неизменяемых имён вроде ARISTOCRAT.
2. **Стили** — только `src/App.css` и токены в `src/index.css`. CSS-модулей нет. Не вводить Tailwind / styled-components.
3. **Заголовки секций кружками** — компонент `LetterTiles`. Не рисовать кружки вручную.
4. **Красные карточки проектов** — `ProjectCard`. Крупная фичер-карточка на `/projects` — `.project-feature`.
5. **Шрифт витринных заголовков** — `'NaN Jaune Trial', sans-serif`. На русском `--font-display` переключается на Inter (см. ниже). Для заголовков карточек и крупных display-заголовков задавать NaN Jaune явно.
6. **Не ломать** существующие блоки ради локальной правки. Менять только то, что просит пользователь.
7. **Проверять RU и EN**, десктоп и мобилу (`1200px`, `720px`).
8. Форма заказа (`OrderBlock`) сейчас `preventDefault`, бэкенда нет — не «чинить отправку», пока не попросят.

## Критичные ловушки CSS

```css
html[lang='ru'] {
  --font-sans: var(--font-ru);      /* Inter */
  --font-display: var(--font-ru);   /* Inter, не Jaune */
}
html[lang='ru'] body * {
  font-stretch: normal;             /* бьёт font-stretch: 125% */
}
```

Поэтому `font-family: var(--font-display)` на русском даёт Inter. Нужный Jaune пишется так:

```css
html[lang='ru'] .нужный-селектор {
  font-family: 'NaN Jaune Trial', sans-serif;
  font-stretch: 125%; /* если нужен широкий крой, как в EN */
}
```

Специфичность `html[lang='ru'] .foo` должна быть выше, чем `html[lang='ru'] body *` `(0,1,2)`.

**Vite на Windows:** два сохранения `App.css` в одну секунду могут оставить в HMR старый CSS (разрешение mtime). Если стили «не применились» — тронуть файл (`(Get-Item src/App.css).LastWriteTime = Get-Date`) или сохранить ещё раз.

## Дизайн-токены

- `--cream: #f5f4ec`
- `--red: #d43929`
- `--ink: #141414`
- `--font-sans`: Outfit (EN) / Inter (RU)
- `--font-display`: NaN Jaune Trial (EN) / Inter (RU, см. ловушку)
- `--font-ru`: Inter
- Файл шрифта: `src/assets/fonts/NaNJauneTRIAL-MaxiExtraBold.ttf` (stretch 75%–200%, weight 700–800)
- Сетка страницы: `.page` max-width `1920px`
- Горизонтальные поля: `50px` десктоп, `20px` ≤1200px
- Полноэкранные hero/футер: `width: 100vw; margin-left: calc(50% - 50vw)`
- Брейкпоинты: `1200px`, `720px`

## Что недавно закреплено (не откатывать без запроса)

- `/services`, блок после hero: заголовок кружками `ABOUT US` / `О НАС` (`LetterTiles` + `t.servicePage.aboutTiles`).
- Заголовки всех красных карточек проектов на RU: NaN Jaune Trial.
- Карточка `moscow-2030`: класс `is-title-caps` → `МОСКВА 2030` / `MOSCOW 2030`.
- Главная, блок избранного (фото): заголовок NaN Jaune, уже uppercase в JSX.
- `/about` hero: белая линия `.about-page-hero-rule` на всю ширину вьюпорта, `height: 1px`, непрозрачность 40%; правый union-марк `top: calc(42% - 40px)`.

Подробности: [`docs/HANDOFF.md`](docs/HANDOFF.md).
