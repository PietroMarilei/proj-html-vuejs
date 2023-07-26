<script>
export default {
    data() {
        return {
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
    },
   
}
</script>

<template>
    <div class="card_wrapper">
        <div class="inner_card" >
            <div class="img_wrapper">
              <img :src="getImagePath(imgPath)" alt="test">
            </div>
            <div class="title_wrapper">
                <h2>{{ title }}</h2>

            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
    .card_wrapper {
        width: calc((100% - 2rem) / 3);
        aspect-ratio: 1/1;

    }
    .inner_card {
        position: relative;
        color: $primaryWhite;
         img {
            border-radius: 10px;
             filter: brightness(40%);
         }
    }

    .title_container {
        display: flex;
        flex-direction: column;
         height: 100%;
    }

    h2 {
        position: absolute;
        top: 65%;
        left: 0;
        bottom: 0;
        right: 0;
        padding: 0.8rem;

        font-size: 1.1rem;
    }


</style>