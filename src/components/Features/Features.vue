<template>
  <div class="features container">
    <h2 class="text-center">Features</h2>
    <LayoutDevelopment/>
  </div>
</template>

<script>
import LayoutDevelopment from "../LayoutDevelopment.vue";

export default {
  name: "Features",
  components: {LayoutDevelopment}
}
</script>

<style scoped lang="scss">
.features{
  min-height: 100vh;
  h2{
    padding-top: 100px;
  }
}
</style>