function OrderBlock() {
  return (
    <section className="order-block" id="order">
      <div className="order-title">
        <h2>
          ORDER
          <br />
          A PROJECT
        </h2>
      </div>

      <form
        className="order-form"
        onSubmit={(event) => {
          event.preventDefault()
        }}
      >
        <div className="order-form-row">
          <label>
            name
            <input type="text" name="name" autoComplete="name" />
          </label>
          <label>
            e-mail
            <input type="email" name="email" autoComplete="email" />
          </label>
          <label>
            phone
            <input type="tel" name="phone" autoComplete="tel" />
          </label>
        </div>
        <label className="order-message">
          message
          <textarea name="message" rows="1" />
        </label>
        <label className="order-consent">
          <input type="checkbox" name="consent" />
          <span>
            By clicking on the “Send” button, I confirm my consent to the{' '}
            <em>processing of personal data</em> and the provisions of the{' '}
            <em>Privacy Policy</em>.
          </span>
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  )
}

export default OrderBlock
