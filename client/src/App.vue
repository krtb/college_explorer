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


    <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
          img-width="1024"
    img-height="480"
      >
        <template v-slot:img>
          <img
            class="d-block img-fluid w-60"
            width="100%"
            height="480"
            :src="require('./assets/upchieve.png')"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-60"
            width="100%"
            height="480"
            :src="require('./assets/library.jpg')"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-60"
            width="100%"
            height="480"
            :src="require('./assets/campus.jpg')"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-60"
            width="100%"
            height="480"
            :src="require('./assets/apple.jpg')"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-60"
            width="100%"
            height="480"
            :src="require('./assets/explore.jpg')"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>

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
          BFormInput,
          BCarousel,
          BCarouselSlide
        } from 'bootstrap-vue'
export default {
  data() {
      return {
        slide: 0,
        sliding: null
      }
    },
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
    'b-nav-item': BNavItem,
    'b-carousel': BCarousel,
    'b-carousel-slide': BCarouselSlide
  },
   methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #ffe493
}

html {
  background-color: #ffe493
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #FFF;
}

.bg-info {
  background-color: #16d2aa !important;
}

.b-carousel-slide {
  margin: auto;
}

</style>
