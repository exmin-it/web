<template>
    <p class="control">
        <button :class="`language ${active}`" @click="changeLang">
            {{ language }}
        </button>
    </p>
</template>

<script>
export default {
  props: ['language'],
  computed: {
    active () {
      return this.$store.state.lang === this.language ? 'active' : ''
    }
  },
  methods: {
    changeLang () {
      this.$store.commit('change', this.language)
    }
  }
}
</script>

<style lang="scss">
  .language {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1.3rem;
  }
  .language:hover {
    background-color: white;
    border-radius: 10px;
    color: black;
  }
  .active {
    border-bottom: 3px solid white;
  }
</style>
