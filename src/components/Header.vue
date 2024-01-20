<template>
  <nav class="navbar fixed-top py-3">
    <div class="container">
      <router-link class="navbar-brand" to="/gitpod/">
        <img src="../assets/logo.png" alt="Bootstrap">
      </router-link>

      <ul class="nav">
        <li class="d-none d-lg-block" v-for="route in routes">
          <router-link :to="route.link" class="nav-link routerLink" aria-current="page">{{ route.nameUrl }}</router-link>
        </li>
      </ul>

      <div class="col-auto d-none d-lg-block">
        <button class="btnLogin" @click="this.$router.push({ path: '/gitpod/login' })">login</button>
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
            <li class="nav-item">
              <router-link to="/gitpod/" class="nav-link routerLink" aria-current="page">Home</router-link>
            </li>
            <li v-for="route in routes" class="nav-item">
              <router-link :to="route.link" class="nav-link routerLink" aria-current="page">{{
                  route.nameUrl
                }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/gitpod/login" class="nav-link routerLink" aria-current="page">Login</router-link>
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
        {link: '/gitpod/features', nameUrl: "Features"},
        {link: '/gitpod/pricing', nameUrl: "Pricing"},
        {link: '/gitpod/blog', nameUrl: "Blog"},
        {link: '/gitpod/docs', nameUrl: "Docs"},
        {link: '/gitpod/we-are-hiring', nameUrl: "WeAreHiring"},
      ]
    }
  }
}
</script>
<style scoped lang="scss">
.navbar {
  background-color: rgba(245, 244, 244, 0.9);

  .routerLink {
    color: black;
    border-radius: 10px;
    padding: 10px 20px;
    transition: .5s;

    &:hover {
      background-color: #FFAE33;
    }
  }

  .btnLogin {
    background-color: #12100C;
    color: white;
    padding: 5px 15px;
    border-radius: 10px;
    border: none;
    transition: .5s;

    &:hover {
      filter: invert(1);
    }
  }
}
</style>