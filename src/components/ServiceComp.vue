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

<template >
    <div class="veryLightBlueBg">
        <div class="container">
            <div class="row">

           <div class="services">
             <p>
                    OUR BUSINESS AREA
                </p>
                    <h2>
                       Excellence in <span>Services</span>
                    </h2>
           </div>

           <div class="leaders_section">
                <p>
                We are leaders in providing consulatncy  with a set of cutting edge technologies and team of experienced professionals. There are some options that you can hire. 
                </p>

                <button>
                    SEE ALL
                </button>
           </div>

            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
 @use "../assets/scss/partials/variables.scss" as *;

 .container {
    max-width: 800px;
    margin: 0 auto;  
 }

 .services {
    padding: 2rem 0;
    p {
        color: $darkBlue;
        font-size: 0.7rem;
        padding: 1rem 0;
    }
    h2 {
        span {
            background-color:$midBlue ;
            color: $darkBlue;
            padding:0.2rem 1rem;
            border-radius: 5px;
        }
    }

 }

  .leaders_section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;

        p {
            color: $darkGrey;
            font-size: 0.8rem;
            width: 70%
        };

         button {
              all:unset;
              background-color: $lightblue;
              color:$primaryWhite ;
              font-weight: 600;
              font-size: 1rem;
              padding: 0.4rem 0.5rem;
              border-radius: 3px;
              margin: 0.3rem;
          }
    }
</style>