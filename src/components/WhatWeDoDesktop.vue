<template>
    <section class="section is-hidden-touch">
        <div class="has-text-centered">
            <h1 class="title is-1">{{ title }}</h1>
            <div class="columns is-gapless service consulting">
                <div class="column service-description">
                    <span class="icon">
                        <font-awesome-icon icon="users" />
                    </span>
                    <p class="title is-3">{{ consulting }}</p>
                    <div class="content">
                        <p>
                            {{ consultingDesc }}
                        </p>
                    </div>
                </div>
                <div class="column has-background">
                    <figure class="image">
                        <div class="shadow"></div>
                        <img src="https://images.unsplash.com/photo-1536286053831-52e1354eb5b7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b5e03ea0031947e759c50ff15bc413e6&auto=format&fit=crop&w=1950&q=80" class="is-background" alt="">
                    </figure>
                </div>
            </div>
            <div class="columns is-gapless service web">
                <div class="column has-background">
                    <figure class="image">
                        <div class="shadow"></div>
                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5a7430d7bd5676bc7b81f2b8bf8f6a75&auto=format&fit=crop&w=1902&q=80" class="is-background" alt="">
                    </figure>
                </div>
                <div class="column service-description">
                    <span class="icon">
                        <font-awesome-icon icon="desktop" />
                    </span>
                    <p class="title is-3">{{ web }}</p>
                    <div class="content">
                        <p>
                            {{ webDesc }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="columns is-gapless service mobile">
                <div class="column service-description">
                    <span class="icon">
                        <font-awesome-icon icon="mobile-alt" />
                    </span>
                    <p class="title is-3">{{ mobile }}</p>
                    <div class="content">
                        <p>
                            {{ mobileDesc }}
                        </p>
                    </div>
                </div>
                <div class="column has-background">
                    <figure class="image">
                        <div class="shadow"></div>
                        <img src="https://images.unsplash.com/photo-1527067669193-6a36380de229?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=075d07fb2cee915ef07dee0d73cbdd54&auto=format&fit=crop&w=1872&q=80" class="is-background" alt="">
                    </figure>
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
    .section {
        padding: 3rem 0 0 0;
    }
    .shadow {
        background-color: rgba(36, 128, 155, .3);
        height: 100%;
        width: 100%;
        z-index: 3;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        transition-duration: .5s;
    }
    .icon {
        font-size: 2.3rem;
        margin-bottom: 30px;
    }
    .service-description {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        & > .content {
            padding: 0 10rem;
        }
    }
    .is-gapless {
        margin: 0 !important;
    }
    .service {
        transition-duration: .5s;
        & img {
            transition-duration: .5s;
            filter: grayscale(1) opacity(.8);
        }
        & .service-description {
            transition-duration: .5s;
        }
        &:hover {
            & .service-description {
                transform: scale(1.3);
            }
            & .icon {
                animation-name: pulse;
                animation-duration: 1s;
                animation-iteration-count: infinite;
            }
            & img {
                filter: grayscale(0) opacity(1);
            }
            & .shadow {
                opacity: 0;
            }
        }
    }
    @media screen and (min-width: 1216px) {
        .consulting {
            transform: translateY(4%);
        }
        .web {
            transform: translateY(-9%);
        }
        .mobile {
            transform: translateY(-15%);
        }
    }
</style>
