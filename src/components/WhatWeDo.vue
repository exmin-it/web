<template>
    <section class="section has-background-info">
        <div class="has-text-centered">
            <h1 class="title has-text-white is-2">{{ title }}</h1>
            <div class="columns">
                <div class="column">
                    <div class="box consulting">
                        <span class="icon">
                            <font-awesome-icon icon="users" />
                        </span>
                        <p class="title is-4">{{ consulting }}</p>
                        <div class="content">
                            <p>
                                {{ consultingDesc }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="box web">
                        <span class="icon">
                            <font-awesome-icon icon="desktop" />
                        </span>
                        <p class="title is-4">{{ web }}</p>
                        <div class="content">
                            <p>
                                {{ webDesc }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="box mobile">
                        <span class="icon">
                            <font-awesome-icon icon="mobile-alt" />
                        </span>
                        <p class="title is-4">{{ mobile }}</p>
                        <div class="content">
                            <p>
                                {{ mobileDesc }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import translations from '@/translations/what-we-do.json'

export default {
  computed: {
    lang () {
      return this.$store.state.lang
    },
    title () {
      return translations[this.lang].title
    },
    web () {
      return translations[this.lang].web
    },
    webDesc () {
      return translations[this.lang].web_desc
    },
    consulting () {
      return translations[this.lang].consulting
    },
    consultingDesc () {
      return translations[this.lang].consulting_desc
    },
    mobile () {
      return translations[this.lang].mobile
    },
    mobileDesc () {
      return translations[this.lang].mobile_desc
    }
  }
}
</script>

<style lang="scss" scoped>
    .box {
        height: 100%;
        transition-duration: .5s;
    }
    .box:hover {
        transform: scale(1.05);
        z-index: 5;
        box-shadow: 0px 10px 10px #333;
    }
    .box:hover .icon {
        animation-name: pulse;
        animation-duration: 1s;
        animation-delay: .5s;
        animation-iteration-count: infinite;
    }
    .icon {
        font-size: 2.3rem;
        margin-bottom: 30px;
    }
</style>
