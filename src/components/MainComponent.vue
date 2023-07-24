<script>
import ServiceComp from './ServiceComp.vue';
import { store } from '../store';
export default {
  components: {
    ServiceComp,
  },
  data() {
    return {
     
      store,
      
    }
  },
  methods: {

  },
}
</script>

<template>
    <!-- main template -->
    <main>
    <ServiceComp/>
  </main>

</template>

<style lang="scss" scoped>
     @use "../assets/scss/partials/variables.scss" as *;
</style>