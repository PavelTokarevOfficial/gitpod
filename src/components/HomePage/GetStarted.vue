<template>
  <section class="row getStarted">
    <h2 class="text-center">Get started now</h2>

    <div class="col-12 col-lg-6 mt-5">
      <div class="card py-5 h-100 d-flex justify-content-center">
        <h3 class="text-center">Connect Git repository</h3>
        <p class="description text-center my-3 px-5">Select a Git provider to start with an existing project from any
          Git context.</p>
        <div class="card-body d-flex flex-column my-3">
          <a
              v-for="link in versionControls"
              class="link d-flex align-items-center justify-content-center mx-auto my-2"
              :style="{backgroundColor: link.bgColor}"
              :href="link.url"
          >
            <img :src="link.img" alt="" class="mx-3">
            <span>{{ link.text }}</span>
          </a>
        </div>
        <p class="text-center my-3 px-5">
          Or prefix any GitLab, GitHub or Bitbucket URL with
        </p>
      </div>
    </div>

    <div class="col-12 col-lg-6 mt-5">
      <div class="card py-5 h-100 d-flex justify-content-center">
        <h3 class="text-center">Launch an example workspace</h3>
        <p class="text-center my-3 px-5">Dive into one of our example workspaces</p>
        <div v-for="item in listTools" class="toolItem card-body d-flex justify-content-between mx-2">
          <div class="d-flex align-items-center">
            <img :src="item.img" alt="" class="mx-2">
            <p class="m-0">{{ item.text }}</p>
          </div>
          <a :href="item.url" class="link">Launch workspace</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import iconGitLab from '../../assets/icons/Gitlub.svg'
import iconGithub from '../../assets/icons/Github.svg'
import iconBitbucket from '../../assets/icons/Bitbucket.svg'

import iconTs from '../../assets/icons/ts.svg'
import iconPyton from '../../assets/icons/python.svg'
import iconGo from '../../assets/icons/go.svg'
import iconRust from '../../assets/icons/rust.svg'
import iconJava from '../../assets/icons/java.svg'
import iconSvelte from '../../assets/icons/svelte.svg'

export default {
  name: "GetStarted",
  data() {
    return {
      versionControls: [
        {
          img: iconGitLab,
          url: '#',
          text: 'Continue with GitLab',
          bgColor: '#FC6D26',
        },
        {
          img: iconGithub,
          url: '#',
          text: 'Continue with GitHub',
          bgColor: '#000000',
        },
        {
          img: iconBitbucket,
          url: '#',
          text: 'Continue with Bitbucket',
          bgColor: '#2684FF',
        },
      ],
      listTools: [
        {
          img: iconTs,
          url: '#',
          text: 'Node or TypeScript',
        },
        {
          img: iconPyton,
          url: '#',
          text: 'Python',
        },
        {
          img: iconGo,
          url: '#',
          text: 'Go',
        },
        {
          img: iconRust,
          url: '#',
          text: 'Rust',
        },
        {
          img: iconJava,
          url: '#',
          text: 'Java',
        },
        {
          img: iconSvelte,
          url: '#',
          text: 'Svelte',
        },
      ],
    };
  },
};

</script>

<style scoped lang="scss">
.getStarted {
  h2 {
    font-size: calc(1.7rem + 8 * (100vw - 320px) / 880);
    font-weight: 700;
    line-height: 133%;
  }

  .link {
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 10px;
    color: white;
  }

  .toolItem {
    display: inline-block;
    background-color: #F9F9F9;
    border-radius: 10px;
    padding: 5px;
    margin: 5px 0;

    a {
      text-decoration: none;
      color: white;
      background-color: black;
      border-radius: 10px;
    }
  }
}

</style>