<script>
import ServiceComp from './ServiceComp.vue';
import CompanyComp from './CompanyComp.vue';
import ActionComp from './ActionComp.vue';
import ResultsComp from './ResultsComp.vue';
import FormTouchComp from './FormTouchComp.vue';
import { store } from '../store';
export default {
  components: {
    ServiceComp,
    CompanyComp,
    ActionComp,
    ResultsComp,
    FormTouchComp,
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

    <ResultsComp/>

    <FormTouchComp/>

  </main>

</template>

<style lang="scss" scoped>
     @use "../assets/scss/partials/variables.scss" as *;
</style>