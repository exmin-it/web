<template>
    <section class="section is-medium has-background-primary" id="contact">
        <div class="container has-text-centered">
            <h1 class="title has-text-white is-2">{{ title }}</h1>
            <div v-if="success" class="notification is-success column is-8 is-offset-2">
                {{ successMsg }}
            </div>
            <div v-if="error" class="notification is-danger column is-8 is-offset-2">
                {{ failMsg }}
            </div>
            <div class="columns">
                <form id="contact-form" class="column is-8 is-offset-2" @submit.prevent="sendEmail">
                    <div class="field">
                        <div class="control">
                            <input required class="input" type="text" name="user_name" :placeholder="name">
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <input required class="input" type="email" name="user_email" :placeholder="email">
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <textarea required class="textarea" name="text" :placeholder="message"></textarea>
                        </div>
                    </div>
                    <div class="field">
                      <div class="g-recaptcha" data-sitekey="6LerY3MUAAAAAPI6HX0IgCp0jgtZ-naxQjXazJTr"></div>
                    </div>
                    <div class="field">
                        <div class="control has-text-centered">
                            <button v-if="sending" class="button is-warning is-medium is-loading">
                                Loading
                            </button>
                            <button v-else class="button is-warning is-medium">
                                {{ send }}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import { sendForm } from 'emailjs-com'
import translations from '@/translations/contact.json'

export default {
  data () {
    return {
      sending: false,
      success: false,
      error: false
    }
  },
  methods: {
    sendEmail (e) {
      this.success = false
      this.error = false
      const form = e.target
      if (this.validate(form)) {
        this.sending = true
        sendForm('contact_service', 'contact_form', form, 'user_yvJYxSMPqJb3zkSruk8Tq')
          .then((response) => {
            this.sending = false
            form.reset()
            grecaptcha.reset()
            this.success = true
          })
          .catch(() => {
            this.sending = false
            this.error = true
          })
      }
    },
    validate (form) {
      const name = form.user_name.value.trim()
      const email = form.user_email.value.trim()
      const message = form.text.value.trim()

      return (name !== '' && email !== '' && message !== '')
    }
  },
  computed: {
    lang () {
      return this.$store.state.lang
    },
    title () {
      return translations[this.lang].title
    },
    successMsg () {
      return translations[this.lang].success
    },
    failMsg () {
      return translations[this.lang].fail
    },
    name () {
      return translations[this.lang].name
    },
    email () {
      return translations[this.lang].email
    },
    message () {
      return translations[this.lang].message
    },
    send () {
      return translations[this.lang].send
    }
  }
}
</script>
