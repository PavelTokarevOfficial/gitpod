<template>
  <section class="reviews">
    <h2 class="text-center">Used by 400,000+ developers.</h2>
    <Developers/>
    <Company/>
  </section>
</template>

<script>
import Developers from "./Developers.vue";
import Company from "./Company.vue";

export default {
  name: "Reviews",
  components: {Company, Developers}
}
</script>

<style scoped lang="scss">
.reviews{
  h2{
    font-size: calc(1.7rem + 8 * (100vw - 320px) / 880);
    font-weight: 700;
    line-height: 133%;
  }
}
</style>