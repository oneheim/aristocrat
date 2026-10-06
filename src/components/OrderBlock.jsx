import { useLanguage } from '../i18n/LanguageContext'
import orderMarkEn from '../assets/order-mark-en.svg'
import orderMarkRu from '../assets/order-mark-ru.svg'

function OrderBlock() {
  const { lang, t } = useLanguage()

  return (
    <section className="order-block" id="order">
      <div className="order-title">
        <img
          className="order-title-mark"
          src={lang === 'ru' ? orderMarkRu : orderMarkEn}
          alt={t.order.title.join(' ')}
        />
      </div>

      <form
        className="order-form"
        onSubmit={(event) => {
          event.preventDefault()
        }}
      >
        <div className="order-form-row">
          <label>
            <span className="order-field-label">{t.order.name}</span>
            <input type="text" name="name" autoComplete="name" placeholder={t.order.name} />
          </label>
          <label>
            <span className="order-field-label">{t.order.email}</span>
            <input type="email" name="email" autoComplete="email" placeholder={t.order.email} />
          </label>
          <label>
            <span className="order-field-label">{t.order.phone}</span>
            <input type="tel" name="phone" autoComplete="tel" placeholder={t.order.phone} />
          </label>
        </div>
        <label className="order-message">
          <span className="order-field-label">{t.order.message}</span>
          <textarea name="message" rows="1" placeholder={t.order.message} />
        </label>
        <label className="order-consent">
          <input type="checkbox" name="consent" />
          <span>
            {t.order.consentBefore}
            <em>{t.order.consentPersonal}</em>
            {t.order.consentAnd}
            <em>{t.order.consentPrivacy}</em>
            {t.order.consentAfter}
          </span>
        </label>
        <button type="submit">{t.order.send}</button>
      </form>
    </section>
  )
}

export default OrderBlock
