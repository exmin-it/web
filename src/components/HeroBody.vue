<template>
  <div class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title is-1 has-text-centered has-text-white">
        {{ title }}
      </h1>
      <a href="#" @click="scroll" class="button is-warning is-large animated jackInTheBox">
        {{ cta }}
      </a>
    </div>
  </div>
</template>

<script>
import ExminName from '@/components/ExminName'
import translations from '@/translations/hero-body.json'

export default {
  components: {
    ExminName
  },
  methods: {
    scroll () {
      this.$scrollTo('#contact')
    }
  },
  computed: {
    lang () {
      return this.$store.state.lang
    },
    title () {
      return translations[this.lang].title
    },
    cta () {
      return translations[this.lang].cta
    }
  }
}
</script>
