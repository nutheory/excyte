import { getEnv } from './utilities'
const publishable_key = getEnv() === 'dev' ? 'pk_test_159TOu12bpPkzIhwcK3a40jO00rYMDhMVb' : 'pk_live_pX4jrl2SXBESnCScj7xWNQMN00ut7ma0g8'
const stripe = Stripe(publishable_key)
export const InitCheckout = {
  mounted() {
    const submitButton = this.el.querySelector('button[type=submit]')
    const successCallback = paymentMethod => { this.pushEvent('payment-method-success', paymentMethod, (reply) => {
      submitButton.disabled = false
      submitButton.querySelector('svg').classList.add("hidden")
      submitButton.querySelector('svg').classList.remove("inline-block")
      submitButton.querySelector('span').innerHTML = "Submit Payment"
    }) }
    init(this.el, submitButton, successCallback)
  }
}

const init = (form, submitButton, successCallback) => {
  const clientSecret = form.dataset.secret
  var elements = stripe.elements()
  var card = elements.create('card', {style: style})
  card.mount('#card-element')
  card.on('change', function(event) {
    var displayError = document.getElementById('card-errors')
    if (event.error) {
      displayError.textContent = event.error.message
    } else {
      displayError.textContent = ''
    }
  })

  form.addEventListener('submit', function(event) {
    event.preventDefault()
    submitButton.disabled = true
    submitButton.querySelector('svg').classList.remove("hidden")
    submitButton.querySelector('svg').classList.add("inline-block")
    submitButton.querySelector('span').innerHTML = "Processing..."
    stripe.createPaymentMethod({
      type: 'card',
      card
    }).then(function(result) {
      if (result.error) {
        console.log(result.error.message)
      } else {
        if (result && result.paymentMethod) {
          successCallback(result.paymentMethod)
        }
      }
    })
  })
}

const style = {
  base: {
    // backgroundColor: '#fff',
    color: '#32325d',
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: 'antialiased',
    fontSize: '16px',
    '::placeholder': {
      color: '#aab7c4'
    }
  },
  invalid: {
    color: '#fc8181',
    iconColor: '#fc8181'
  }
}