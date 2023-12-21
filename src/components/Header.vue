<template>
  <nav class="navbar fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.png" alt="Bootstrap">
      </a>

      <ul class="nav ">
        <li class="d-none d-lg-block" v-for="route in routes">
          <router-link :to="route.link" class="nav-link routerLink" aria-current="page">{{ route.nameUrl }}</router-link>
        </li>
      </ul>

      <div class="col-auto d-none d-lg-block">
        <button class="btnLogin" @click="this.$router.push({ path: '/login' })">login</button>
      </div>

      <!--кнопка меню-->
      <button class="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!--боковое меню-->
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li v-for="route in routes" class="nav-item">
              <router-link :to="route.link" class="nav-link routerLink" aria-current="page">{{
                  route.nameUrl
                }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      routes: [
        {link: '/', nameUrl: "Features"},
        {link: '/pricing', nameUrl: "Pricing"},
        {link: '/blog', nameUrl: "Blog"},
        {link: '/docs', nameUrl: "Docs"},
        {link: '/changelog', nameUrl: "WeAreHiring"},
      ]

    }
  }
}
</script>

<style scoped lang="scss">
.navbar {
  .routerLink{
    color:black;
    border-radius: 10px;
    padding: 10px 20px;
    &:hover{
      background-color: #FFAE33;
    }
  }
  .btnLogin{
    background-color: #12100C;
    color: white;
    padding: 5px 15px;
    border-radius: 10px;
    border: none;
    transition: .5s;
    &:hover{
      filter: invert(1);
    }
  }
}
</style>