<template>
  <section class="row slogan">
    <h2 class="text-center">
      Select project, <br>
      <span>
          check dependencies, checkout branch, view <br>
          readme.txt, install tools, run build, run test, <br>
        </span>
      start coding.
    </h2>
  </section>
</template>

<script>
export default {
  name: "Slogan"
}
</script>

<style scoped lang="scss">
.slogan {
  margin: 7rem 0;

  h2 {
    font-size: calc(1.7rem + 8 * (100vw - 320px) / 880);
    font-weight: 700;
    line-height: 118%;

    span {
      text-decoration: line-through;
      font-weight: 400;
      color: #999795;
      animation: fadeInOut 3s ease-in-out infinite;
    }

    @keyframes fadeInOut {
      0%, 100% {
        opacity: 0.3;
      }
      50% {
        opacity: 1;
      }
    }
  }
}
</style>