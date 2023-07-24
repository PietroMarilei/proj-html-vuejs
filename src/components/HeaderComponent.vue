<script>
import { store } from '../store';
export default {
  data() {
    return {
      
    }
  },
  methods: {

  },
}
</script>

<template>
    <!-- header template -->
   <header class="darkBlueBg">
    <div class="container ">
      <div class="row">
        <div class="head_contacts">
          	<div class="head_time">
              <i class="fa-solid fa-clock"></i>
              Open Hours: Mon-Sat-9.00 - 18.00
            </div>

            <div class="head_right">
              <p>
                <i class="fa-solid fa-phone"></i>
                +1 (3447) 123459870
              </p>

              <p>
                <i class="fa-solid fa-envelope"></i>
                hello@info.mail.com
              </p>

              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
        </div>
      </div>
    </div>
  </header>

</template>

<style lang="scss" scoped>
 @use "../assets/scss/partials/variables.scss" as *;

    header {
      .container {
        max-width: 1200px;
        margin: 0 auto;
      }
    }

    .head_contacts {
      height: 40px;
      background-color: $deepDarkblue;
      color: $lightGrey;

      display: flex;
      justify-content: space-between;
      align-items: center;

      .head_right {
        display: flex;

        p {
          margin: 0 0.5rem;
        }

        i {
          margin:0 0.5rem;
        }
      }
    }
</style>