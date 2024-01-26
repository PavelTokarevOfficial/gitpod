<template>
  <div class="row developers mt-5">
    <swiper
        :modules="modules"
        :slides-per-view="3"
        :space-between="15"
        :autoplay="{
                  delay: 3000,
                  disableOnInteraction: false,
                }"
    >
      <swiper-slide v-for="post in posts">
        <DeveloperItem :post="post"/>
      </swiper-slide>
    </swiper>

  </div>
</template>

<script>
import DeveloperItem from "./DeveloperItem.vue";
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Autoplay, A11y} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'


export default {
  name: "Developers",
  components: {DeveloperItem, Swiper, SwiperSlide},
  data() {
    return {
      posts: [
        {
          nickname: 'Ben Halpern',
          position: 'Creator and Co-founder',
          workplace: 'ThePracticalDev',
          feedback: 'GitPod is incredibly cool. In my opinion, this is a big step in open source software contribution. I\'m excited to see where we go from here.'
        },
        {
          nickname: 'Michael Friedrich',
          position: 'Developer Evangelist',
          workplace: 'GitLab',
          feedback: 'Let\'s say we were overwhelmed how smooth @gitpod workspaces creation & own Docker image for workspaces worked. Plus, installing @code extensions from the store and integrating @gitlab CI. That blew my mind entirely, and that is hard ;)'
        },
        {
          nickname: 'Julius Volz',
          position: 'Creator',
          workplace: 'PrometheusIO',
          feedback: 'Look at any PR (pull request) in a full coding environment where you can edit, build, and test the PR code, by just prepending "gitpod.io#" to the PR URL. Super useful for reviewing/testing stuff without having to check it out locally!'
        },
        {
          nickname: 'David Ressler',
          position: 'Engineering Manager',
          workplace: 'instagram',
          feedback: 'I think I’m in love with @gitpod. It’s such a powerful tool. I’ve learned so much in the past week just from stumbling across Github repos that interest me and appending to the URL. A+ tool all around.'
        },
        {
          nickname: 'Bartłomiej Płotka',
          position: 'Principal Software Engineer',
          workplace: 'RedHat',
          feedback: 'This @gitpod thing is magic! Pretty cool, without any extra configuration.'
        },
        {
          nickname: 'Mrugesh Mohapatra',
          position: 'Technology & Community',
          workplace: 'freeCodeCamp',
          feedback: 'Ya\'all @gitpod is freaking amazing! We integrated it into our workflow for working on @freeCodeCamp\'s codebase and I am honestly loving it. 🔥🔥!'
        },
        {
          nickname: 'Sven Peters',
          position: 'Dev Advocate',
          workplace: 'MongoDB',
          feedback: 'Huge time saver, less frustrations for devs: Automated ready-to-code dev environments with pre-build workspaces. #gitpod #cloudide'
        },
        {
          nickname: 'Jonathan Lister Parsons',
          img: '',
          position: 'CTO',
          workplace: 'PensionBee',
          feedback: 'I\'m really enjoying @gitpod - for me, it\'s made full-stack development in the browser (yes,including mobile) a reality'
        },
        {
          nickname: 'Alejandro',
          position: 'Co-Founder',
          workplace: '4GeeksAcademy',
          feedback: 'My setup is on @gitpod, just like Christopher McCandless, where I go my code goes with me, no setup whatsoever Smiling face with sunglasses 😎 #IntoTheWild'
        },
        {
          nickname: 'ROKU',
          position: 'Engineering Manager',
          workplace: 'GitLab',
          feedback: 'Have to say that @gitpod is just super nice to use. Very impressed by the performance!'
        },
        {
          nickname: 'Hugh Durkin',
          position: 'Platform Ecosystem',
          workplace: 'HubSpot',
          feedback: 'I\'ve been playing around with the "next generation" of Cloud IDEs lately, and @gitpodio is quickly emerging as one of the best 👨‍💻'
        },
        {
          nickname: 'Marcel van Remmerden',
          position: 'Product Design Manager',
          workplace: 'GitLab',
          feedback: 'Can only agree, opening a GitLab repository in gitpod is a magical experience, thanks for the integration @gitpod!'
        },
        {
          nickname: 'Brendan O’Leary',
          position: 'Dev. Evangelist',
          workplace: 'GitLab',
          feedback: 'I just discovered the @gitlab @gitpod integration is alive on http://GitLab.com (released in 13.4 behind a feature flag). And it\'s AMAZING https://docs.gitlab.com/ee/integration.... .'
        },
        {
          nickname: 'Joonas Lehtinen',
          position: 'Co-founder',
          workplace: 'vaadin',
          feedback: 'Wow - @gitpod is a brilliant way of evaluating a framework without installing anything.'
        },
        {
          nickname: 'Yo',
          position: 'Creator',
          workplace: 'Taskord',
          feedback: 'Now contributing to @gitlab is a cakewalk with @gitpod 🎉!'
        },
        {
          nickname: 'Senior Enterprise Geek',
          position: 'Senior Technical Account Manager',
          workplace: 'GitLab',
          feedback: 'Today is a great day, we added the @gitpod support to the @golo_lang repository. So now you can start hacking @golo_lang in almost only one click. Enjoy 🎉'
        },
      ]
    }
  },
  setup() {
    return {
      modules: [Autoplay, A11y],
    };
  },
}
</script>
