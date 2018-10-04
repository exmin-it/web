<template>
    <section class="section has-background-primary is-hidden-touch">
        <div class="has-text-centered">
            <h1 class="title is-1 has-text-white">{{ title }}</h1>
            <div class="columns is-gapless service consulting">
                <div class="column service-description">
                    <div class="content left">
                        <span class="icon">
                            <font-awesome-icon icon="users" />
                        </span>
                        <p class="title is-3">{{ consulting }}</p>
                        <p class="description">
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
                    <div class="content right">
                        <span class="icon">
                            <font-awesome-icon icon="desktop" />
                        </span>
                        <p class="title is-3">{{ web }}</p>
                        <p class="description">
                            {{ webDesc }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="columns is-gapless service mobile">
                <div class="column service-description">
                    <div class="content left">
                        <span class="icon">
                            <font-awesome-icon icon="mobile-alt" />
                        </span>
                        <p class="title is-3">{{ mobile }}</p>
                        <p class="description">
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
        padding: 0 0 0 0;
    }
    h1.title {
        background: linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, 0));
        margin: 0;
        padding: 3rem;
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
    .is-gapless {
        margin: 0 !important;
    }
    figure {
        transition-duration: .5s;
        &:hover {
            transform: scale(1.2);
        }
    }
    .has-background {
        overflow: hidden;
    }
    .service {
        transition-duration: .5s;
        & img {
            transition-duration: .5s;
            filter: grayscale(1) opacity(.5);
        }
        & > .service-description {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            & > .content {
                border: 3px solid white;
                border-radius: 8px 50px;
                width: 60%;
                z-index: 5;
                background-color: white;
                padding: 5rem 5rem;
                position: absolute;
                transition-duration: .5s;
                &.left {
                    left: 5%;
                }
                &.right {
                    right: 5%;
                }
                * {
                    transition-duration: .5s;
                }
                &:hover {
                    transform: translateY(-5%);
                    box-shadow: 5px 7px 20px black;
                    .title, .icon {
                        transform: scale(1.3);
                    }
                    .description {
                        transform: scale(1.05);
                    }
                    .icon {
                        animation-name: pulse;
                        animation-duration: 1s;
                        animation-iteration-count: infinite;
                    }
                }
            }
            transition-duration: .5s;
        }
        &:hover {
            & img {
                filter: grayscale(0) opacity(1);
            }
            & .shadow {
                opacity: 0;
            }
        }
    }
    @media screen and (min-width: 1350px) {
        .section {
            margin-bottom: -7rem;
        }
        .consulting {
            transform: translateY(4%);
        }
        .web {
            transform: translateY(-9%);
        }
        .mobile {
            transform: translateY(-22%);
        }
    }
    @media screen and (min-width: 1760px) {
        .section {
            margin-bottom: -9.5rem;
        }
    }
    @media screen and (max-width: 1380px) {
        .service > .service-description > .content {
            width: 70%;
            padding: 3rem;
        }
    }
</style>
