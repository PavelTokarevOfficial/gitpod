<template>
  <footer class="mt-5">
    <div class="container pt-5">
      <div class="row d-flex justify-content-between">
        <div class="col-6 col-md-auto">
          <h3>Gitpod</h3>
          <ul class="list-unstyled ">
            <li class="link"><a href="#">Home</a></li>
            <li class="link"><a href="#">Features</a></li>
            <li class="link"><a href="#">Pricing</a></li>
            <li class="link"><a href="#">Changelog</a></li>
            <li class="link"><a href="#">Self-Hosted</a></li>
            <li class="link"><a href="#">Gitpod vs GitHub</a></li>
            <li class="link"><a href="#">Codespaces</a></li>
            <li class="link"><a href="#">Status</a></li>
          </ul>
        </div>

        <div class="col-6 col-md-auto">
          <h3>Developer</h3>
          <ul class="list-unstyled">
            <li class="link"><a href="#">Getting started</a></li>
            <li class="link"><a href="#">Screencasts</a></li>
            <li class="link"><a href="#">Blog</a></li>
            <li class="link"><a href="#">Documentation</a></li>
            <li class="link"><a href="#">Report a bug</a></li>
            <li class="link"><a href="#">Community</a></li>
          </ul>
        </div>

        <div class="col-6 col-md-auto">
          <h3>Company</h3>
          <ul class="list-unstyled">
            <li class="link"><a href="#">About</a></li>
            <li class="link"><a href="#">Careers</a></li>
            <li class="link"><a href="#">Contact</a></li>
            <li class="link"><a href="#">Media Kit</a></li>
          </ul>
        </div>

        <div class="col-6 col-md-auto">
          <h3>Legal</h3>
          <ul class="list-unstyled">
            <li class="link"><a href="#">Imprint</a></li>
            <li class="link"><a href="#">Terms of Service</a></li>
            <li class="link"><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div class="copyright row d-flex justify-content-between align-items-center py-3">
        <div class="col-auto">
          <img src="../assets/icons/logo-mini.svg" alt="logo-mini" class="mx-3">
          <p class="d-inline-block m-0">Copyright © 2021 Gitpod</p>
        </div>
        <div class="col-auto">
          <a href="#" class="p-2"><img src="../assets/icons/twitter.svg" alt="twitter"></a>
          <a href="#" class="p-2"><img src="../assets/icons/github-orang.svg" alt="github"></a>
          <a href="#" class="p-2"><img src="../assets/icons/imessage.svg" alt="imessage"></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
}
</script>

<style scoped lang="scss">
footer {
  background-color: white;
  h3{
    font-weight: 700;
    font-size: calc(1rem + 2 * (100vw - 320px) / 880);
  }
  a {
    text-decoration: none;
    color: black;
    transition: .5s;
    border-radius: 10px;
    padding: 5px;
    margin: -5px;
    &:hover {
      background-color: #FFAE33;
    }
  }
}
</style>
