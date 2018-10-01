<template>
  <div id="app">
    <hero />
    <what-we-do />
    <contact />
    <page-footer />
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import WhatWeDo from '@/components/WhatWeDo'
import Contact from '@/components/Contact'
import PageFooter from '@/components/PageFooter'

export default {
  name: 'app',
  components: {
    Hero,
    WhatWeDo,
    Contact,
    PageFooter
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Armata|Expletus+Sans|Sarpanch');
  $blue: #0C5872;
  $cyan: #24809B;
  $yellow: #FEBE2D;
  $white-bis: #E6E6D4;
  $primary: $blue;
  $navbar-height: 5rem;
  $navbar-item-img-max-height: 4rem;
  $family-sans-serif: 'Armata';
  $box-padding: 2rem;
  @import 'bulma/bulma.sass';
  @import 'bulma-carousel/dist/css/bulma-carousel.sass';
  @import './assets/scss/animations.scss';
  // #app {
  //   background-image: url('~/fondo.jpg');
  //   background-attachment: fixed;
  //   background-repeat: no-repeat;
  //   background-size: cover;
  //   background-position: center bottom;
  // }
  .button:hover {
    transform: scale(1.1);
  }
</style>
