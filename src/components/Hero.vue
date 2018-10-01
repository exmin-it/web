<template>
    <section class="hero is-fullheight has-carousel">
        <hero-carousel />
        <hero-nav-bar />
        <hero-body />
    </section>
</template>

<script>
import HeroCarousel from '@/components/HeroCarousel'
import HeroNavBar from '@/components/HeroNavBar'
import HeroBody from '@/components/HeroBody'

export default {
  components: {
    HeroCarousel,
    HeroNavBar,
    HeroBody
  }
}
</script>
