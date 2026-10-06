# Страницы

## `/` Главная — `src/pages/Home.jsx`

Порядок блоков:

1. `Hero` — полноэкранное фото, лого, нав, огромный DECOR & EVENT AGENCY, кружки YOUR EVENTS / …
2. `About` — кружки ABOUT US, красный лид, статистика, фото команды
3. `Projects` — кружки + ссылка на /projects, сетка из `catalogProjects` (3 красные карточки)
4. `Services` — табы услуг, заголовок NaN Jaune, фото
5. `SelectedProject` — избранный кейс moscow-2030: большое фото, оверлей «МОСКВА 2030» / «MOSCOW 2030», превью
6. `Reviews`
7. `Clients` — бесконечная лента
8. `OrderBlock` — `#order`
9. `Contacts` — `#contacts`, красный футер

## `/about` О нас — `src/pages/AboutPage.jsx`

Класс страницы: `.about-page`.

1. `AboutHero` — фото, dim, два union-марка, хедер, тонкая линия на всю ширину, огромный ABOUT / О НАС
2. `WhoWeAre` — текст + сетка фото
3. `Facts` — кружки FACTS, цифры на текстурах
4. `Team`
5. `Clients`
6. `OrderBlock`
7. `Contacts`

Ключевые классы hero:

- `.about-page-hero` — full-bleed, 760px
- `.about-page-hero-mark-left` / `-right` — декоративные SVG
- `.about-page-hero-rule` — линия над заголовком
- `.about-page-hero-title`

Правый марк специально выше левого: `top: calc(42% - 40px)`.

## `/services` Услуга — `src/pages/ServicesPage.jsx`

Класс: `.service-page`. Хедер `variant="light"`.

1. `.service-hero` — заголовок PRIVATE EVENT DESIGN / ДЕКОР ИВЕНТОВ ПОД КЛЮЧ, `CategoryList`, статистика, фото + union
2. `.service-about` — кружки ABOUT US / О НАС, красный лид, union-about + два абзаца
3. `.service-benefits` — BENEFITS / ПРЕИМУЩЕСТВА, нумерованный список с SVG-дугами
4. `.service-projects` — кружки SELECTED PROJECTS, сетка `catalogProjects`
5. `OrderBlock`
6. `Contacts`

Тексты блока: `t.servicePage.*` в `copy.js`.

Дуги между цифрами benefits считает `layoutBenefitCurves` (ResizeObserver). Не ломать разметку `.service-benefits-num` внутри `li`.

## `/projects` Каталог — `src/pages/ProjectsPage.jsx`

1. Хедер light
2. Заголовок `.projects-page-title`
3. `CategoryList` с `showCounts`, фильтр через `?cat=`
4. Каталог сегментами: сетки по 3 + фичер moscow-2030
5. Кнопка «показать ещё», если мелких карточек больше 9
6. `OrderBlock`, `Contacts`

Фильтр: `useSearchParams`, валидные id из `CATEGORIES`.

## `/projects/:slug` Кейс — `src/pages/ProjectPage.jsx`

Неизвестный slug → редирект на `/projects`.

1. `.case-hero` — фото, хедер, боковая карточка, заголовок из `heroLines`
2. `.case-intro` — кружки ABOUT, текст `project.copy`, фото
3. `.case-mosaic` — галерея, клик открывает лайтбокс
4. `.case-facts`
5. `OrderBlock`
6. `.case-relevant` — 3 карточки `getRelevant`
7. `Contacts`

Лайтбокс: `ProjectLightbox`.

## Общие куски на внутренних страницах

Почти везде внизу: `OrderBlock` + `Contacts`. Не дублировать футер внутри секций.
