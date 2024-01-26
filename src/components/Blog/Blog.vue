<template>
  <div class="blog container">
    <h2 class="text-center">Blog</h2>
    <LayoutDevelopment/>
  </div>
</template>

<script>
import LayoutDevelopment from "../LayoutDevelopment.vue";

export default {
  name: "Blog",
  components: {LayoutDevelopment}
}
</script>

<style scoped lang="scss">
.blog {
  min-height: 100vh;

  h2 {
    padding-top: 100px;
  }
}
</style>