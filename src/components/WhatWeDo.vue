<template>
    <div id="whatWeDo">
        <what-we-do-mobile />
        <what-we-do-desktop />
    </div>
</template>

<script>
import WhatWeDoMobile from '@/components/WhatWeDoMobile'
import WhatWeDoDesktop from '@/components/WhatWeDoDesktop'

export default {
  components: {
      WhatWeDoMobile,
      WhatWeDoDesktop
  }
}
</script>
