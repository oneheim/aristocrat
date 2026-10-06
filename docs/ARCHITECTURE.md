# Архитектура

## Стек

- React 19 (функции, хуки, без TS)
- Vite 8 (`@vitejs/plugin-react`, Oxc)
- React Router 7 (`BrowserRouter` в `src/main.jsx`, `Routes` в `src/App.jsx`)
- Oxlint
- Статика, без API и без CMS

Точка входа: `index.html` → `src/main.jsx` → `App`.

## Слои

```
pages/          маршрут = композиция секций
components/     секция или переиспользуемый кусок
data/           проекты, категории, команда
i18n/           словари + контекст языка
index.css       токены и сброс
App.css         вся вёрстка (~2700 строк)
assets/         фото, SVG, шрифт
```

Страница почти никогда не содержит своей разметки секций — только импорт блоков.

## Язык

`LanguageProvider` оборачивает все маршруты.

- Состояние: `lang` = `'en' | 'ru'`
- Старт: `localStorage['aristocrat-lang']`, иначе `'en'`
- Побочные эффекты: `html lang`, `document.title`, запись в localStorage
- `useCopy()` → `copy[lang]` из `src/i18n/copy.js`
- `useLocalizedProject(project)` / `useLocalizedProjects(list)` мержат `project.ru`

Структура `copy.js`: объект `{ en: {...}, ru: {...} }` с одинаковыми ключами. Новые строки добавлять в оба дерева.

Категории живут отдельно в `src/data/categories.js` (`en` / `ru` на элементе), не в `copy.js`.

Команда: `src/data/team.js`, поле `role` / `roleRu`.

## Проекты

Файл: `src/data/projects.js`.

Два списка:

- `catalogProjects` — три карточки на главной и на `/services`: moscow-2030, orion-soft, yandex-park-live
- `extraProjects` — остальные для каталога и кейсов
- `allProjects` = оба списка

Фабрика `makeProject({ ... })` нормализует поля, подставляет дефолтные facts, собирает `tag`.

Локализация `localizeProject(project, lang)`:

- всегда подставляет локализованный `tag` категории (`/фестивали` и т.д.)
- при `lang === 'ru'` перекрывает title, heroLines, subtitle, place, city, venue, copy, facts из `project.ru`

Хелперы:

- `getProject(slug)`
- `getRelevant(slug)` — сначала та же категория, затем остальные, максимум 3
- `compareByDate` — `MM.YYYY` по убыванию

Slug’и:

| slug | EN title |
|---|---|
| `moscow-2030` | Moscow 2030 |
| `orion-soft` | Orion Digital Day |
| `yandex-park-live` | YANDEX Park Live |
| `museum-of-heroism` | Museum of Heroism |
| `bosco-expedition` | BOSCO Expedition |
| `gazprom-atlantes` | Gazprom Atlantes |
| `millennium-of-russia` | Millennium of Russia |
| `russian-troika` | Russian Troika |
| `matryoshka` | Matryoshka |
| `facades-winter-in-moscow` | Facades “Winter in Moscow” |

Фичер в каталоге: `FEATURED_SLUGS = ['moscow-2030']` в `ProjectsPage.jsx`. На `/projects` этот проект рендерится большой красной карточкой `.project-feature`, не сеткой.

## Навигация и якоря

Хедер: логотип → CTA «order a project» → about / services / projects / contacts → ru\en.

- `Header variant="dark"` — светлый текст (поверх фото)
- `Header variant="light"` — тёмный текст (кремовый фон)

CTA на светлом хедере ведёт на `#order` текущей страницы, на тёмном — на `/#contacts`.

Якоря на главной: `#home`, `#about`, `#projects`, `#services`, `#order`, `#contacts`.

## Состояние UI (локальное)

Нет глобального стора кроме языка. Локально:

- табы услуг на главной (`Services`)
- активный слайд избранного проекта (`SelectedProject`)
- фильтр категории и «показать ещё» на `/projects`
- лайтбокс на кейсе (`ProjectLightbox`)
- кривые между цифрами benefits на `/services` (ResizeObserver)

Форма заказа не отправляется.
