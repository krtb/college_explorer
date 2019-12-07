<template>
  <div id="app">
    <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">College Explorer</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#"><router-link to="/">Home</router-link></b-nav-item>
        <b-nav-item href="#"><router-link to="/schools">Schools</router-link></b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>


      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import { BNavbar, 
          BNavbarBrand, 
          BNavbarNav, 
          BNavForm,
          BButton,
          BCollapse,
          BNavItem,
          BNavbarToggle,
          BNavItemDropdown,
          BFormInput
        } from 'bootstrap-vue'
export default {
  name: 'App',
  components: {
    'b-navbar': BNavbar,
    'b-navbar-brand': BNavbarBrand,
    'b-navbar-nav': BNavbarNav,
    'b-nav-form': BNavForm,
    'b-button': BButton,
    'b-collapse': BCollapse,
    'b-nav-item': BNavItem,
    'b-navbar-toggle': BNavbarToggle,
    'b-nav-item-dropdown': BNavItemDropdown,
    'b-dropdown-item': BNavItemDropdown,
    'b-form-input': BFormInput,
    'b-nav-item': BNavItem
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

ul {
  list-style-type: none;
  padding: 0;
}li {
  display: inline-block;
  margin: 0 10px;
}a {
  color: #FFF;
}
</style>
