<template>  
    <section>
      <SectionWelcome/>
    </section>
    <section class="background-dark" id="services">
      <SectionServices/>
    </section>
    <section>
      <!-- SERVICES -->
    </section>
    <section>
      <!-- CONTACT -->
    </section>
</template>

<script>
import SectionWelcome from './components/SectionWelcome.vue'
import SectionServices from './components/SectionServices.vue'

export default {
  name: 'App',
  components: {
    SectionWelcome,
    SectionServices
  },
  data() {
    return {}
  }
}
</script>

