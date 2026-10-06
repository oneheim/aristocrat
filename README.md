# ARISTOCRAT

Сайт декораторского ивент-агентства. React + Vite, два языка (EN / RU), без бэкенда.

Документация для разработки (в том числе Claude Code): [`CLAUDE.md`](CLAUDE.md), индекс [`docs/README.md`](docs/README.md).

## Запуск

```bash
npm install
npm run dev
```

Откроется Vite, обычно http://localhost:5173.

```bash
npm run build     # продакшен в dist/
npm run preview   # локальный просмотр сборки
npm run lint      # oxlint
```

## Маршруты

| URL | Страница |
|---|---|
| `/` | Главная |
| `/about` | О нас |
| `/services` | Услуга (private events) |
| `/projects` | Каталог проектов |
| `/projects/:slug` | Кейс |

Язык: переключатель в шапке, хранится в `localStorage` как `aristocrat-lang` (`en` по умолчанию).

## Где что править

- Тексты UI — `src/i18n/copy.js`
- Проекты и фото кейсов — `src/data/projects.js` + `src/assets/`
- Вёрстка — `src/App.css`
- Токены и шрифты — `src/index.css`
- Страницы — `src/pages/`
- Блоки — `src/components/`
