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
            return new URL(`${imgPath}`, import.meta.url).href;
        },
    },
    props: {
        iconPath: String,
        title: String,
    }
}
</script>

<template>
   
    <div class="card">
        <div class="card_cont">
            <div class="left_side">
                <div class="img_wrapper">
                    <img :src="iconPath" alt="icon here">
                    <!-- <img src="../../public/svgs/svg-0.svg" alt=""> -->
                </div>
                <!-- <img :src="getImagePath(iconPath)" alt="icon here"> -->
                <h3>{{ title }}</h3>
                <div class="right_side">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </p>
                </div>
            </div>
            <button>
                <i class="fa-solid fa-arrow-right"></i>
            </button>
            
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
    .card {
         background-color: white;
         border-radius: 10px;
         padding: 1rem;
        min-height: 100%;
        transition: 0.2s all ease-in ;
        aspect-ratio: 1/1;
        cursor: pointer;

         
    }
    .card:hover{ 
     box-shadow: 3px 8px 20px $blueGrey;

     button {   
        background-color: $lightblue;
        border-radius: 50%;
     }

  }
    .card_cont {
        display: flex;
        justify-content: space-between;
        width: 100%;
        gap: 1rem;

        button {
            all: unset;
            height: 30px;
            width: 30px;
            flex-shrink: 0;
            text-align: center;
            transition: 0.2s all ease-in ;
        }


        .left_side {
            .img_wrapper {
                width: 30px;
                height: 30px;
                margin: 1rem 0;
            }

            h3 {
                margin: 0.3rem 0;
            }     
        }
    }

   
</style>