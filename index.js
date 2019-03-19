class SubscribeForm extends HTMLElement {
  constructor() {
    super()

    // Retrieve attributes
    this.name = this.getAttribute('name') || 'email'
    this.label = this.getAttribute('label') || 'Email'
    this.type = 'email'
    this.placeholder = this.getAttribute('placeholder') || ''

    // Define element's markup
    this.innerHTML = `
      <form>
        <label for="${this.name}">${this.label}</label>
        <input type="${this.type}" aria-required="true" required id="${this.name}" placeholder="${this.placeholder}">
        <input type="submit" value="Subscribe" />
      </form>
      <div role="alert" hidden class="success">
        <p>You successfuly subscribed!</p>
        <button role="button" aria-label="Close">
          &times;
        </button>
      </div>
    `

    // Add events listeners
    const form = this.querySelector('form')
    const alert = this.querySelector("[role='alert']")
    const alertButton = alert.querySelector("button")

    form.addEventListener('submit', e => {
      e.preventDefault()
      alert.hidden = false
    })

    alertButton.addEventListener('click', () => {
      alert.hidden = true
    })
  }
}

// Register the elements into `window`
window.customElements.define('subscribe-form', SubscribeForm)
