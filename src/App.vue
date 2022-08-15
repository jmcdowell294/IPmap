<template>
  <div class="container__app">
    <Navbar/>
    <Search/>
    <div class="container__map" id="map">
      <div v-if="getLat != ''" class="latlng">
        <span>[{{getLat}},{{getLng}}]</span>
      </div>
    </div>
  </div>
</template>

<script>
import Search from './components/Search.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Search,
    Navbar
  },
  computed: {
    getLat(){
      return this.$store.getters.getLat;
    },
    getLng(){
      return this.$store.getters.getLng;
    },
  }
}
</script>

<style scoped>
html{
  font-size: 62.5%;
}
.container__app{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-image: linear-gradient(to bottom right, whitesmoke, grey);

  display: grid;
  grid-template-columns: 16rem 1fr 16rem;
  grid-template-rows: 3rem 5rem minmax(12rem, 4fr) 3rem;
}
.container__map{
  grid-row: 3;
  grid-column: 2;
  border: 1px solid black;
  z-index: 1;
  position: relative;
}
.latlng{
  position: absolute;
  z-index: 1111;
  bottom: 1rem;
  left: 1rem;
}
</style>
