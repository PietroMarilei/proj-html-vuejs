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
    <div class="bg_container">
        <div class="container">
            <div class="row title">
                <p>
                    WHAT WE ARE DOING
                </p>

                <h2>
                    <span>Results</span> in Numbers
                </h2>
            </div>

            <div class="row numbers">
                <div class="numb">
                    <h2>
                        128
                    </h2>
                    <h4>
                        Certifications
                    </h4>
                </div>

                <div class="numb">
                        <h2>
                            230
                        </h2>
                        <h4>
                            Employees
                        </h4>
                    </div>

                    <div class="numb">
                        <h2>
                            517
                        </h2>
                        <h4>
                            Customers
                        </h4>
                    </div>

                    <div class="numb">
                        <h2>
                            94
                        </h2>
                        <h4>
                            Countreies served
                        </h4>
                    </div>
            </div>

           
        </div>
    </div>

    <div class="darkBg_container">
        <div class="container">
             <div class="row lang">
                    <a href="#">
                        <img src="../assets/img/logo-4.png" alt="">
                    </a>

                     <a href="#">
                            <img src="../assets/img/logo-5.png" alt="">
                        </a>

                         <a href="#">
                            <img src="../assets/img/logo-1.png" alt="">
                        </a>

                         <a href="#">
                            <img src="../assets/img/logo-3.png" alt="">
                        </a>
                         <a href="#">
                            <img src="../assets/img/logo-4.png" alt="">
                        </a>
                        
                </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;

.bg_container {
    background-image: url(../assets/img/bg-7.jpg);     
   background-position: center;
    padding: 5rem 0;
}

.container {
    max-width: 900px;
    margin: 0 auto;
}

.title {
    text-align: center;
    p {
        color: $lightblue ;
        font-weight: 500;
        font-size: 0.8rem;
        padding: 0.8rem 0;
    }

    h2 {
        color: $primaryWhite;
        

        span {
            background-color: $darkBlue;
            padding:0 0.4rem;
        }
    }
}

.numbers {
    padding: 2rem 0;
    color: $primaryWhite;

    display: flex;
    justify-content: space-evenly;


    .numb {
        text-align: center;
        padding: 2rem 0;

        h2 {
            color: $lightblue;
        }
    }
}
.darkBg_container {
    background-color: $backGrey;
}
.lang {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4rem;

    img {
        width: 50%;
        filter: brightness(200%);
    }
}
</style>