<template>
  <div class="services-section">
    <div class="container">
      <div class="row">
        Hallo Welt
      </div>
    </div>
    <div class="scroll-arrow-box">
      <a href="#services"><div class="scroll-arrow scroll-arrow-light"><i class="bi bi-chevron-double-down"></i></div></a>
    </div>
  </div>   
</template>

<script>
export default {
  name: 'SectionServices',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .services-section {
    color: #FFF;
    padding: 10px 20px 20px 10px;
  }
</style>
