<template>
  <div class="weAreHiring container">
    <h2 class="text-center">WeAreHiring</h2>
    <LayoutDevelopment/>
  </div>
</template>

<script>
import LayoutDevelopment from "../LayoutDevelopment.vue";

export default {
  name: "WeAreHiring",
  components: {LayoutDevelopment}
}
</script>

<style scoped lang="scss">
.weAreHiring {
  min-height: 100vh;

  h2 {
    padding-top: 100px;
  }
}
</style>