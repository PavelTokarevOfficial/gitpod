<template>
  <section class="row advantageRemoteControl d-flex justify-content-center">
    <h2 class="text-center my-5">Remote-first. Secure by design.</h2>

    <div class="imgWrapper">
      <img src="../../assets/IDE.png" alt="ide" class="my-2 w-100">
    </div>

    <p class="col-12 col-md-10 text-center">
      You no longer need an over-powered laptop to code, Gitpod works just as smoothly on a Chromebook or iPad. All you
      need is a browser. Gitpod centralizes all source code and never stores it on insecure machines and networks.
    </p>

    <div class="extensions row d-flex justify-content-center">
      <div class="linkWrapper col-auto m-1">
        <a href="#">
          <i class="bi bi-browser-firefox pe-2"/>
          Firefox Extension
        </a>
      </div>
      <div class="linkWrapper col-auto m-1">
        <a href="#">
          <i class="bi bi-browser-chrome pe-2"/>
          Chrome Extension
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AdvantageRemoteControl"
}
</script>

<style scoped lang="scss">
.advantageRemoteControl {
  margin: 100px 0;

  h2 {
    font-size: calc(1.7rem + 8 * (100vw - 320px) / 880);
    font-weight: 700;
    line-height: 133%;
  }

  .imgWrapper {
    position: relative;

    &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      filter: blur(50px);
      background: linear-gradient(-45deg, rgba(255, 0, 40, 0.6), rgba(255, 136, 0, 0.6), rgba(255, 176, 0, 0.6));
      background-size: 400% 400%;
      animation: gradient 3s ease infinite;
    }

    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

    img {
      position: relative;
      border-radius: 0.5rem;
    }
  }

  .extensions{
    .linkWrapper{
      background-color: #12100C;
      padding: 10px 20px;
      border-radius: 10px;
      border: 2px solid white;
      transition: .5s;
      &:hover{
        filter: invert(1);
      }
      a{
        text-decoration: none;
        color: white;
      }
    }
  }

  p {
    margin: 50px 0;
    color: rgba(18, 16, 12, 0.70);
    font-size: calc(1rem + 4 * (100vw - 320px) / 880);
    font-weight: 400;
    line-height: 133%;
  }
}
</style>