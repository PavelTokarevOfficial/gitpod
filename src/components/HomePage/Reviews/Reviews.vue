<template>
  <div>
    Reviews:
    <Developers/>
    <Company/>
  </div>
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

</style>