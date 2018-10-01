<template>
    <div class="hero-head">
        <header class="navbar is-transparent">
          <div class="container is-flex-touch">
            <div class="navbar-brand">
              <a class="navbar-item">
                <img src="logo.svg" alt="Logo">
                <exmin-name class="has-text-white" />
              </a>
            </div>
            <div class="navbar-end is-flex-touch">
              <div class="navbar-item is-flex-touch">
                <language-button language="es" />
                <language-button language="en" />
              </div>
            </div>
          </div>
        </header>
      </div>
</template>

<script>
import ExminName from '@/components/ExminName'
import LanguageButton from '@/components/LanguageButton'

export default {
  components: {
    ExminName,
    LanguageButton
  }
}
</script>

<style lang="scss">
  .navbar {
    font-size: 1.75rem;
    padding-top: 3rem;
  }
  .navbar-brand img {
    margin-right: 5px;
  }
  .navbar-item:hover {
    background-color: transparent !important;
  }
  .navbar .container {
    justify-content: space-between;
  }
  .navbar-end {
    align-items: center;
  }
</style>
