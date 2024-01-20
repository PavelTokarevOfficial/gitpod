<template>
  <main class="container homePage">
    <Intro/>
    <Slogan/>
    <Advantages/>
    <AdvantageRemoteControl/>
    <Reviews/>
    <GetStarted/>
    woqeroiqejoirjiqeirjgiqijorgjqirgjqerog
  </main>
</template>

<script>
import Intro from "./Intro.vue";
import Slogan from "./Slogan.vue";
import Advantages from "./Advantages.vue";
import AdvantageRemoteControl from "./AdvantageRemoteControl.vue";
import Reviews from "./Reviews/Reviews.vue";
import GetStarted from "./GetStarted.vue";

export default {
  name: "HomePage",
  components: {GetStarted, Reviews, AdvantageRemoteControl, Advantages, Slogan, Intro}
}
</script>

<style scoped lang="scss">
.homePage{
  padding-top: 120px;
}
</style>