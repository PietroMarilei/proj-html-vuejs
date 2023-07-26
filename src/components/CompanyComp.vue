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
    <div class="upper_container blackGreyBg">
        <div class="container">
            <div class="row">
                <div class="wrapper">
                    <div class="left_side">
                        <p>ABOUT THE NETWORK</p>
                        <h1> <span>The</span> Company</h1>

                        <p class="description">For 12 years we have been providing audit and warranty, financial advice, taxes and related services to the selected clients</p>

                        <div class="company_values">
                            <div class="values_card">
                                <div class="title_card">
                                    <i class="fa-solid fa-award"></i>
                                    <h2>Tradition</h2>
                                </div>
                                <div class="card_body">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                </div>
                            </div>

                            <div class="values_card">
                                <div class="title_card">
                                    <i class="fa-solid fa-lock"></i>
                                    <h2>Security</h2>
                                </div>
                                <div class="card_body">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                </div>
                            </div>

                            <div class="values_card">
                                <div class="title_card">
                                    <i class="fa-solid fa-pen-to-square"></i>
                                    <h2>Certificate</h2>
                                </div>
                                <div class="card_body">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                </div>
                            </div>

                            <div class="values_card">
                                <div class="title_card">
                                    <i class="fa-solid fa-graduation-cap"></i>
                                    <h2>Expertise</h2>
                                </div>
                                <div class="card_body">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                </div>
                            </div>


                        </div>
                        
                        <div class="button_sect">
                            <button id="get_btn">GET IN TOUCH</button>
                            <button id="read_more">READ MORE</button>
                        </div>
                    </div>
                    <!-- <div class="right_side">
                        <img src="../assets/img/about-4.jpg" alt="">
                    </div> -->

                </div>
            </div>
        </div>

        <!-- <div class="right_side">
            <img src="../assets/img/about-4.jpg" alt="">
        </div> -->

    </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;

.upper_container {
    background-image: url(../assets/img/about-4.jpg);
    background-position:  right;
    background-repeat: no-repeat;
    background-size: 45% ;

}
.container {
    max-width: 800px;
    width: 800px;
    margin: 0 auto;
    // margin-right: 400px;
}

.wrapper {
    // display: flex;
    // justify-content: space-between;
    width: 50%;

    .right_side {
        // border: 2px dashed red;
        height: 400px;
        width: 180%;
    }

    .left_side {
        color: $primaryWhite;
        padding: 4rem 0;
        padding-right: 1rem;

        p {
            color: $lightblue;
        }

        .description {
            padding: 1rem 0;
            color: $primaryWhite;
        }

        span {
            background-color: $darkBlue;
            padding: 0 0.3rem;
        }

    }

    .company_values {
        display: flex;
        flex-wrap: wrap;


        .values_card {
            width: calc(100% / 2);
            padding: 1rem 0rem;
            padding-left: 0;

           .card_body {
            padding: 1rem 0;
            color: $darkGrey;
           }
            .title_card {
                display: flex;
                align-items: center;

                i {
                    padding: 0.3rem;
                    font-size: 1.4rem;
                    color: $lightblue ;
                }

                h2 {
                    padding: 0 0.5rem;
                }
            }
        }
    }

    .button_sect {
        #get_btn {
            
              all:unset;
              background-color: $lightblue;
              color:$lightGrey ;
              font-weight: 600;
              font-size: 1rem;
              padding: 0.4rem 0.7rem;
              border-radius: 3px;
              margin: 0.3rem;
          
        }

        #read_more {   
            all:unset;
              border: 2px solid $lightblue;
              color:$lightGrey ;
              font-weight: 600;
              font-size: 1rem;
              padding: 0.4rem 1rem;
              border-radius: 3px;
              margin: 0.3rem;
          
        }
    }
}
</style>