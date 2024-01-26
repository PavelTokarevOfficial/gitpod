<template>
  <div class="docs container">
    <h2 class="text-center">Docs</h2>
    <LayoutDevelopment/>
  </div>
</template>

<script>
import LayoutDevelopment from "../LayoutDevelopment.vue";

export default {
  name: "Docs",
  components: {LayoutDevelopment}
}
</script>

<style scoped lang="scss">
.docs {
  min-height: 100vh;

  h2 {
    padding-top: 100px;
  }
}
</style>