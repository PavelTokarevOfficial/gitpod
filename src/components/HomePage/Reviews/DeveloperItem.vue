<template>
  <div class="item col-9 col-md-6 col-lg-3 m-3 d-flex flex-column justify-content-between">
    <div class="row">
      <p>{{ post.feedback }}</p>
    </div>
    <div class="row">
      <div class="col-3 d-flex align-items-center">
        <img src="https://www.svgrepo.com/show/192247/man-user.svg" alt="user" class="w-100">
      </div>

      <div class="col-9 information">
        <div class="row nick">{{ post.nickname }}</div>
        <div class="row">{{ post.position }}</div>
        <div class="row">@{{ post.workplace }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeveloperItem",
  props: {
    post: {
      nickname: String,
      position: String,
      workplace: String,
      feedback: String,
    }
  }
}
</script>

<style scoped lang="scss">
.item {
  background-color: white;
  border-radius: 1rem;
  padding: 20px;


  .information {
    line-height: 1.3rem;

    .nick {
      font-weight: 700;
    }
  }
}
</style>