<template>
  <section class="row intro mb-5 intro">
    <div class="col-12 col-lg-6 my-auto">
      <div class="row my-3">
        <h1>Always<br>Ready to Code.</h1>
        <p class="description">Spin up fresh, automated dev environments<br>for each task, in the cloud, in seconds.</p>
      </div>

      <div class="row information d-flex align-items-center my-4">
        <div class="col-auto">
          <button class="btn" @click="$router.push('/gitpod/pricing')">Try Now</button>
        </div>
        <div class="col-auto">
          <p class="actionDescription m-0">Open a workspace.<br>Start from any Git context.</p>
        </div>
      </div>

      <div class="row">
        <div class="col-auto">
          <img src="../../assets/icons/gitlab.png" class="w-100" alt="">
        </div>
        <div class="col-auto">
          <img src="../../assets/icons/git.png" class="w-100" alt="">
        </div>
        <div class="col-auto">
          <img src="../../assets/icons/Bitbucket.png" class="w-100" alt="">
        </div>
      </div>
    </div>

    <div class="col-6 d-none d-lg-block ">
      <img src="../../assets/scene.png" alt="scene" class="w-100">
    </div>
  </section>
</template>


<style scoped lang="scss">
.intro {
  h1 {
    font-size: calc(3rem + 15 * (100vw - 320px) / 880);
    font-weight: 700;
    line-height: 110%;
  }

  .description {
    color: rgba(18, 16, 12, 0.70);
    font-size: calc(1rem + 2 * (100vw - 320px) / 880);
    font-weight: 400;
    line-height: 138%;
  }
  .information{
    .btn{
      background: #FFAE33;
      padding: 11px 46px;
      border-radius: 16px;
      transition: 0.5s;
      font-weight: 700;
      &:hover{
        background: rgba(255, 174, 51, 0.5);
      }
    }
    .actionDescription {
      color: rgba(18, 16, 12, 0.70);
      font-size: calc(0.7rem + 1.3 * (100vw - 320px) / 880);
      font-weight: 400;
      line-height: 150%;
    }
  }

}
</style>
