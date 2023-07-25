<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,

        
        }
    },
    methods: {
        getImagePath: function (imgPath) {
            return new URL(`../assets/img/${imgPath}`, import.meta.url).href;
        },
    },
    props: {
        imgPath: String,
        title: String,
    }
}
</script>

<template>
    <div class="card_wrapper">
        <img :src="getImagePath(imgPath)" alt="test">
        {{ title }}
    </div>
</template>

<style lang="scss" scoped>

</style>