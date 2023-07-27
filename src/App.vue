<script >
import { store } from './store';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent,
  },
  data(){
    return {
      store,
      i: 0,
      //like to state management
    }
  }, 
  methods: {
 

  },
  mounted() {
   
  },
}
</script>

<template>

  <HeaderComponent/>

  <MainComponent/>

  <FooterComponent/>

</template>

<style lang="scss">
  @use "./assets/scss/partials/variables.scss" as *;
  @import "./assets/scss/main.scss" ;
  
  body {
    background-color: lightslategray;
  }
</style>
