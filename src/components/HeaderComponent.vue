<script>
import { store } from '../store';

export default {

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
  <!-- header template -->
  <header class="darkBlueBg">
    <div class="container ">
      <div class="row">
        <!-- very top header -->
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

  <div class="jumbo_bg primaryWhiteBg">
    <div class="container">
      <div class="row">

        <div class="header_jumbo">


          <div class="navbar">
            <img src="../assets/img/logo.png" alt="">

            <ul>
              <li v-for="singleData in this.store.headerArr">{{singleData}}</li>
        
              <button>
                GET IN TOUCH
              </button>
            </ul>

          </div>
          <div class="img_wrapper">
            <img id="faces" src="../assets/img/bg-parallaxCropped.png" alt="a">
          </div>
          

          <div class="jumbo_center">
            <h1>
              Ready <span>TEAM</span>

            </h1>

            <p>
              No matter what your company needs: we will be ready to assist you in the best possibile way
            </p>

            <div class="button_wrap">
              <button>GET IN TOUCH</button>
              <button id="readMoreBtn">READ MORE</button>
            </div>
          </div>


        </div>

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;

.container {
  max-width: 1200px;
  margin: 0 auto;
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
      margin: 0 0.5rem;
    }
  }
}

.header_jumbo {
  background-image: url(../assets/img/SquareBG.png);
  // background-image: url("../assets/img/bg-parallax\ cropped.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;

  height: 500px;
  position: relative;

  .img_wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    // border: 2px dashed red;
    height: 500px;
    width: 800px;
  }

  #faces {
    width: 100%;
    position: relative;
    left: 10px;
  }


  .navbar {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      


      li {
        margin: 0 0.5rem;
        color: $darkGrey;
        font-size: 0.9rem;
        text-transform: uppercase;
      }

      button {
        all: unset;
        background-color: $lightblue;
        color: $primaryWhite ;
        padding: 0.4rem 0.5rem;
        border-radius: 3px;
      }

      button:hover {
        background-color:#07afaf;
      }
    }

    img {
      width: 130px;
    }
  }

  .jumbo_center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: $deepDarkblue;
    font-size: 1.4rem;
    font-weight: 600;

    h1 span {
      background-color: $midBlue ;
      color: $darkBlue ;
      padding: 0.5rem 1rem;
      text-align: center;
      border-radius: 5px;
    }

    ;

    p {
      margin: 1rem 0;
      color: $darkGrey;
      font-weight: 100;
      font-size: 0.8rem;
      width: 300px;
    }

    .button_wrap {
      display: flex;
      justify-content: center;

      button {
        all: unset;
        background-color: $lightblue;
        color: $primaryWhite ;
        font-weight: 600;
        font-size: 1rem;
        padding: 0.4rem 0.5rem;
        border-radius: 3px;
        margin: 0.3rem;
      }

      button:hover {
        background-color:#07afaf;
      }

      #readMoreBtn {
        background-color: $primaryWhite ;
        border: 2px solid $lightblue;
        color: $lightblue;
      }

      #readMoreBtn:hover {
        background-color:#d9f0f0;
      }
    }
  }

}
</style>