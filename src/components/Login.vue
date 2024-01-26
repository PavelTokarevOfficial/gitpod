<template>
  <div class="login container">
    <h2 class="text-center">Login</h2>
    <LayoutDevelopment/>
  </div>
</template>

<script>
import LayoutDevelopment from "./LayoutDevelopment.vue";

export default {
  name: "Login",
  components: {LayoutDevelopment}
}
</script>

<style scoped lang="scss">
.login {
  min-height: 100vh;

  h2 {
    padding-top: 100px;
  }
}
</style>