<script>
import ServiceComp from './ServiceComp.vue';
import CompanyComp from './CompanyComp.vue';
import ActionComp from './ActionComp.vue';
import { store } from '../store';
export default {
  components: {
    ServiceComp,
    CompanyComp,
    ActionComp
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

    <CompanyComp/>

    <ActionComp/>

  </main>

</template>

<style lang="scss" scoped>
     @use "../assets/scss/partials/variables.scss" as *;
</style>