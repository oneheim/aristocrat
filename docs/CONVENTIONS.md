# Соглашения вёрстки и контента

## Язык интерфейса заказчика

Пользователь говорит по-русски и называет экраны так:

- «главная»
- «О нас» = `/about`
- «Услуга» = `/services`
- «проекты» = `/projects`
- «карточка» = красная `ProjectCard` или фичер `.project-feature`
- «кружки» / «заголовок в кружках» = `LetterTiles`
- «графический элемент» в hero О нас = `.about-page-hero-mark-*` (union)

## LetterTiles

```jsx
<LetterTiles text={t.about.tiles} />
<LetterTiles text="ABOUT US" variant="filled" />
```

Пробел → `.letter-gap` (пустой слот того же размера). Буквы uppercase через CSS `text-transform`. На outline-варианте ряд сдвинут `margin-left: 210px` (на мобиле 0).

Тексты кружков живут в `copy.js` (`tiles`, `aboutTiles`, `projectsTiles`, …).

## Красные карточки

`ProjectCard`:

- фон `--red`, фото со скруглением 55px
- мета: категория, год, заголовок, место, кнопка
- заголовок: NaN Jaune, 24px, stretch 125%
- на `/projects` в RU заголовки ещё и `text-transform: uppercase`
- `moscow-2030` всегда капсом (`is-title-caps`) на всех страницах

Большая карточка каталога: `.project-feature` + `.project-feature-copy h2`. Для moscow-2030 тоже `is-title-caps`.

## Шрифты

| Роль | EN | RU |
|---|---|---|
| Текст | Outfit | Inter |
| Крупные заголовки / карточки | NaN Jaune Trial | **явно** NaN Jaune Trial (переменная `--font-display` на RU = Inter) |
| Кружки | Inter (`--font-ru`) | Inter 300 |

NaN Jaune умеет кириллицу (уже используется в hero и карточках).

Не ставить `font-family: var(--font-display)` на то, что на русском должно остаться Jaune.

## Full-bleed

Hero главной, hero О нас, избранный проект, футер контактов выходят за `.page` (1920):

```css
width: 100vw;
max-width: 100vw;
margin-left: calc(50% - 50vw);
```

`body { overflow-x: hidden }`.

Линия в about-hero тянется из padded-контейнера:

```css
.about-page-hero-rule {
  position: relative;
  left: 50%;
  width: 100vw;
  margin: 0 0 10px -50vw;
  height: 1px;
  background: color-mix(in srgb, var(--cream) 40%, transparent);
}
```

## Отступы секций

Типичный верх секции: `padding: 160px 50px 0`. Не сжимать, если не просят.

## Брейкпоинты

- `max-width: 1200px` — колонки в столбик, поля 20px, кружки 42px
- `max-width: 720px` — ещё плотнее, кружки wrap

Мобильные правки класть в существующие media, не плодить новые без нужды.

## Цвет и тон

Кремовый фон, красный акцент, тёмный текст. На фото — полупрозрачный dim (чёрный 0.35–0.6). Кнопки на красном: `.btn-ghost` (обводка cream). Кнопки на фото: `.btn-cream`.

## i18n при правке копии

Любой новый ключ — в `copy.en` и `copy.ru` одновременно. Не оставлять английский на русской версии.

## Что не делать

- Не подключать UI-киты
- Не переносить стили в CSS-modules / Tailwind
- Не менять стек (Next, TS) без явной просьбы
- Не оптимизировать «заодно» фото и структуру data
- Не верхний регистр всех карточек на главной — капс только у moscow-2030 и у сетки `/projects` на RU
