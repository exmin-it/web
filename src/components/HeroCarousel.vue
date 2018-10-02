<template>
    <div class="hero-carousel carousel-animated carousel-animate-fade" data-autoplay="true">
        <div class='carousel-container'>
          <div class="shadow"></div>
          <div class='carousel-item has-background is-active'>
              <img class="is-background" src="https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-0.3.5&s=c20551ce0f9830c4207afc6cad87ec48&auto=format&fit=crop&w=1911&q=80" alt="" />
          </div>
          <div class='carousel-item has-background'>
              <img class="is-background" src="https://images.unsplash.com/photo-1462899006636-339e08d1844e?ixlib=rb-0.3.5&s=75a97dec563d923be5f6cc55422a9165&auto=format&fit=crop&w=1950&q=80" alt="" />
          </div>
          <div class='carousel-item has-background'>
              <img class="is-background" src="https://images.unsplash.com/photo-1535209039648-9524289505fd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=45d8adc00048fe52c719f6f17b5d4641&auto=format&fit=crop&w=1949&q=80" alt="" />
          </div>
          <div class='carousel-item has-background'>
              <img class="is-background" src="https://images.unsplash.com/photo-1531946405499-671fc3a8bbab?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e2fd71a1776590685bf38c65cb850bdd&auto=format&fit=crop&w=1867&q=80" alt="" />
          </div>
          <div class='carousel-item has-background'>
              <img class="is-background" src="https://images.unsplash.com/photo-1484824823018-c36f00489002?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=45f6c16ed89b6c5b4ad7b4e06c26d0ff&auto=format&fit=crop&w=1950&q=80" alt="" />
          </div>
          <div class='carousel-item has-background'>
              <img class="is-background" src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=749f8fec9b7cf4a040ae12df54cc7443&auto=format&fit=crop&w=1950&q=80" alt="" />
          </div>
          <div class='carousel-item has-background'>
              <img class="is-background" src="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=63bdd8a1179751372dd754ef62efb41f&auto=format&fit=crop&w=1950&q=80" alt="" />
          </div>
        </div>
    </div>
</template>

<script>
import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js'

export default {
  data () {
    return {
      carousels: []
    }
  },
  mounted () {
    this.carousels = bulmaCarousel.attach()
  }
}
</script>

<style lang="scss">
  .shadow {
    background-color: rgba(0, 0, 0, .3);
    height: 100%;
    width: 100%;
    z-index: 3;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>

