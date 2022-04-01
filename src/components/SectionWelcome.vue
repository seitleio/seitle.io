<template>
  <div class="welcome-section">
    <div class="row justify-content-center">
      <img class="logo" alt="seitle.io logo" src="../assets/images/logo_dark.svg">
    </div>
    <div class="row mt-5">
      <h1 class="text-center welcome-msg">
        Ihr <span class="text-highlight-bold-underline">PARTNER</span><br/>
        wenn es um die <span class="text-highlight-bold-underline">CLOUD</span> <div class="cloud"><i class="bi bi-cloud-fill text-highlight"></i></div>geht. <br/>        
      </h1>
      <h3 class="text-center mt-5">
        Egal ob Sie auf einen großen Anbieter <br/> oder auf Open Source Lösungen setzen wollen.
      </h3>
    </div>
  </div>
  <div class="scroll-arrow-box">
    <a href="#services"><div class="scroll-arrow scroll-arrow-dark"><i class="bi bi-chevron-double-down"></i></div></a>
  </div>  
</template>

<script>
export default {
  name: 'SectionWelcome',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .welcome-section {
    padding: 24vh 20px 20px 10px;
  }

  @media (max-height: 920px) {
    .welcome-section {
      padding: 50px 20px 20px 10px;
    }
  }

  .logo {
    width: 220px;
    margin: 10px 10px 10px 10px
  }

  .welcome-msg {
    font-size: 3.2em;    
  }

  .cloud {
    width: 50px;
    height: 50px;
    font-size: 0.72em;
    animation: float 2s infinite;
    transition: float ;
    display: inline-flex;
  }
</style>
