<script>
import { store } from '../store';
export default {
    data() {
        return {
            greeting: 'Hello World!',
            store,
        }
    },
    methods: {

    },
}
</script>

<template>
  <div class="container">
    <div class="row form_row">
        <div class="form_touch">

            <form action="">
                <input type="text">
            </form>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
    .container {
        max-width: 900px;
        margin: 0 auto;
    }
    .row {
        display: flex;
    }
</style>