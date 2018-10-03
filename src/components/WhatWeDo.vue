<template>
    <div>
        <what-we-do-desktop />
        <what-we-do-mobile />
    </div>
</template>

<script>
import WhatWeDoDesktop from '@/components/WhatWeDoDesktop'
import WhatWeDoMobile from '@/components/WhatWeDoMobile'

export default {
  components: {
      WhatWeDoDesktop,
      WhatWeDoMobile
  }
}
</script>
