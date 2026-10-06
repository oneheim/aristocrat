export const CATEGORIES = [
  { id: 'business', en: 'business events', ru: 'деловые события' },
  { id: 'launches', en: 'launches', ru: 'лончи' },
  { id: 'brand', en: 'brand events', ru: 'бренд-события' },
  { id: 'forums', en: 'forums', ru: 'форумы' },
  { id: 'festivals', en: 'festivals', ru: 'фестивали' },
  { id: 'new-year', en: 'new year events', ru: 'новогодние мероприятия' },
  { id: 'awards', en: 'award ceremonies', ru: 'церемонии награждения' },
  { id: 'exhibitions', en: 'exhibitions and museum installations', ru: 'выставки и музейная застройка' },
  { id: 'gala', en: 'gala evenings', ru: 'gala-вечера' },
  { id: 'openings', en: 'openings', ru: 'открытия' },
  { id: 'private', en: 'private events', ru: 'private events' },
]

export function categoryLabel(id, lang) {
  const item = CATEGORIES.find((category) => category.id === id)
  if (!item) return id
  return lang === 'ru' ? item.ru : item.en
}

export function isCategoryId(id) {
  return CATEGORIES.some((category) => category.id === id)
}
