<template>
    <div class="hero-carousel carousel-animated carousel-animate-fade" data-autoplay="true" data-delay="8000">
        <div class='carousel-container'>
          <div class='carousel-item has-background is-active'>
              <img class="is-background" src="fondo_glaciar.jpg" alt="" />
          </div>
          <div class='carousel-item has-background'>
              <img class="is-background" src="fondo_lago_arg.jpg" alt="" />
          </div>
          <div class='carousel-item has-background'>
              <img class="is-background" src="fondo_chalten.jpg" alt="" />
          </div>
          <div class='carousel-item has-background'>
              <img class="is-background" src="fondo_condor.jpg" alt="" />
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
