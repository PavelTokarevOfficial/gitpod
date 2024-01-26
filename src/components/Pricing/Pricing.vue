<template>
  <div class="pricing container">
    <h2 class="text-center">Pricing</h2>
    <LayoutDevelopment/>
  </div>
</template>

<script>
import LayoutDevelopment from "../LayoutDevelopment.vue";

export default {
  name: "Pricing",
  components: {LayoutDevelopment}
}
</script>

<style scoped lang="scss">
.pricing {
  min-height: 100vh;

  h2 {
    padding-top: 100px;
  }
}
</style>