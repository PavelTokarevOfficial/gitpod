<template>
  <Header/>
  <router-view/>
  <Footer/>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header, Footer,
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
#app {
  background-color: #f5f4f4;
  color: #12100C;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}
</style>
