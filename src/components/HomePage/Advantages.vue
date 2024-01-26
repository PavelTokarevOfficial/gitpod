<template>
  <section class="row advantages my-5">
    <div class="col-12 col-lg-6 order-lg-last">
      <img src="../../assets/tenminal.png" alt="tenminal" class="w-100">
    </div>

    <div class="col-12 col-lg-6 my-5 my-lg-auto">
      <div class="row information">
        <h3>Think CI/CD for dev environments</h3>
        <p class="mb-5">
          We invented prebuilds so application code, configuration and infrastructure can all be stored as
          machine-executable code in your git repositories and applied to dev environments automatically and
          continuously.
        </p>
      </div>

      <div class="row">
        <div class="col-auto my-2">
          <button class="button btnMore" @click="$router.push('/gitpod/features')">More on prebuilds</button>
        </div>

        <div class="col-auto my-2">
          <button class="button btnDocumentation" @click="$router.push('/gitpod/docs')">Documentation</button>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: "Advantages"
}
</script>

<style scoped lang="scss">
.advantages {
  img{
    border-radius: 20px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.08);
  }
  .information {
    padding-right: 30px;
    h3 {
      font-size: calc(1.2rem + 8 * (100vw - 320px) / 880);
      font-weight: 700;
      line-height: 125%;
    }

    p {
      color: rgba(18, 16, 12, 0.70);
      font-size: calc(1rem + 4 * (100vw - 320px) / 880);
      font-weight: 400;
      line-height: 133%;
    }
  }
  .button{
    border: none;
    padding: 11px 20px;
    border-radius: 10px;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.10);
    transition: 0.5s;
  }
  .btnMore{
    background-color: #FFAE33;
    &:hover{
      background-color: rgba(255, 174, 51, 0.5);
    }
  }
  .btnDocumentation{
    background-color: #FFB0AE;
    &:hover{
      background-color: rgba(255, 176, 174, 0.5);
    }
  }
}
</style>