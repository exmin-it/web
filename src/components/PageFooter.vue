<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>
          <exmin-name />
        </strong>
        - La Plata, Buenos Aires, Argentina
      </p>
      <div class="columns social-networks">
        <div class="column is-4 is-offset-4">
          <nav class="level is-mobile">
            <span class="level-item">
              <a href="https://www.linkedin.com/company/exmin/" target="_blank" class="icon linkedin">
                <font-awesome-icon :icon="['fab','linkedin']"  />
              </a>
            </span>
            <span class="level-item">
              <a href="https://github.com/exmin-it" target="_blank" class="icon github">
                <font-awesome-icon :icon="['fab','github']"  />
              </a>
            </span>
            <span class="level-item">
              <a href="https://www.facebook.com/eXmin-278329662777830/" target="_blank" class="icon facebook">
                <font-awesome-icon :icon="['fab','facebook']"  />
              </a>
            </span>
            <span class="level-item">
              <a href="https://www.instagram.com/exmin.it/" target="_blank" class="icon instagram">
                <font-awesome-icon :icon="['fab','instagram']"  />
              </a>
            </span>
          </nav>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import ExminName from '@/components/ExminName'

export default {
  components: {
    ExminName
  }
}
</script>

<style lang="scss" scoped>
  .footer {
    padding: 3rem 1.5rem;
  }
  .social-networks {
    margin-top: 1rem;
  }
  .icon {
    color: #B5B5B5;
    font-size: 1.5rem;
  }
  .linkedin:hover {
    color: #1475B1;
  }
  .github:hover {
    color: #292D31;
  }
  .facebook:hover {
    color: #4665AE;
  }
  .instagram:hover {
    color: #BF2C84;
  }
</style>
