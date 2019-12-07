<template>
  <div id="app">
    <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
    <img src="./assets/logo.png">

    <div>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/schools">Schools</router-link></li>
      </ul>
    </div>
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
  color: #42b983;
}
</style>
