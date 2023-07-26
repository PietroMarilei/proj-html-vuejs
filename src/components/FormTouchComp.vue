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
    <div class="primaryWhiteBg">
        <div class="container">
            <div class="row form_row">
                <div class="left_side form_touch">
                    <div class="form_titles">
                        <p>
                            SEND A MESSAGE
                        </p>

                        <h1>
                            Get in <span>Touch</span>
                        </h1>

                        <p>
                            We will respond to your message as soon as possibile
                        </p>
                    </div>
                    <form @submit.prevent action="">
                        <div class="row">
                            <input type="text" placeholder="Name">

                            <input type="email" placeholder="Email">
                        </div>

                        <div class="row">
                            <input type="tel" placeholder="Phone">


                            <select name="" id="">
                                <option selected value="volvo">More Info</option>
                                <option value="saab">Contacts</option>
                                <option value="mercedes">Works</option>
                                <option value="audi">Issues</option>
                            </select>
                        </div>

                        <div class="row">
                            <textarea id="" name="" rows="4" cols="50">
Message
                        </textarea>
                        </div>

                        <div class="row">
                            <button>
                                SEND
                            </button>
                        </div>
                    </form>
                </div>

                <div class="right_side">
                    <h4>
                        Example Inc.
                    </h4>

                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>

                    <p>
                        A, alias voluptatem aut necessitatibus eaque numquam.
                    </p>

                    <div>
                        <a href="">
                            <i class="fa-solid fa-phone"></i>
                        </a> +1 (305) 1234-5678
                    </div>

                    <div>
                        <a href="">
                            <i class="fa-solid fa-envelope"></i>
                        </a>
                         hello@example.com
                    </div>

                    <div>
                        <a href="">
                            <i class="fa-solid fa-location-dot"></i>
                        </a>
                         Main Avenue, 978
                    </div>

                    <button>
                        VIEW MAP
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;

.container {
    max-width: 900px;
    margin: 0 auto;
    padding: 6rem 0;
}

.row {
    display: flex;
    gap: 0.5rem;
}

.left_side {
    .form_titles {
        padding: 2rem 0;
        padding-top: 0;

        p:first-child {
            color: $lightblue ;
            font-weight: 500;
            font-size: 0.8rem;
            padding: 0.8rem 0;
            padding-top: 0;
        }

        h1 {
            padding: 1rem 0;

            span {
                background-color: $midBlue ;
                color: $darkBlue;
                padding: 0.1rem 1rem;

            }
        }


        p {
            color: $darkGrey;
            font-size: 0.8rem;
            margin-right: 9rem;
        }
    }


    form {
        input {
            width: 50%;
            padding: 0.5rem;
            margin: 0.5rem 0;
            border: none;
            border-radius: 3px;
            background-color: $lightGrey ;
        }

        select {
            width: 50%;
            padding: 0.5rem;
            margin: 0.5rem 0;
            border: none;
            border-radius: 3px;
            background-color: $lightGrey ;
            color: $darkGrey;
        }

        select:focus {
            outline: none;
        }

        textarea {
            width: 100%;
            background-color: $lightGrey ;
            color: $darkGrey;
            border: none;
            padding: 0.5rem;
            font-family: inherit;
        }

        button {
            all: unset;
            background-color: $lightblue;
            color: $primaryWhite ;
            font-weight: 400;
            font-size: 0.8rem;
            padding: 0.3rem 0.7rem;
            border-radius: 3px;
            margin: 0.5rem 0;
            border: 1px solid transparent;
        }

        button:hover {
            background-color:$veryLightBlue ;
            border: 1px solid $lightblue;
            color: $darkBlue;

        }
    }

}



.right_side {
    margin-left: 4rem;

    h4 {
        font-weight: 570;
    }

    p {
        color: $darkGrey;
        font-size: 0.8rem;
        padding: 0.5rem 0;
    }

    div {
        display: flex;
        align-items: center;
        padding: 0.5rem 0;

        a {
            all: unset;
            display: flex;
            text-align: center;
            justify-content: center;
        }
        
        i {
            color:$darkBlue ;
            border-radius: 50%;
            background-color: $blueGrey;
           padding: 0.5rem;
            margin: 0 0.3rem; 
            margin-left: 0;
           width: 30px;
           height: 30px;
           
        }
    }

    button {
            background-color: $primaryWhite ;
            border: 2px solid $lightblue;
            color: $lightblue;
             font-weight: 400;
              font-size: 0.7rem;
              padding: 0.4rem 0.7rem;
              border-radius: 3px;
              margin: 0.6rem;
                    margin-left: 0;
    }
    button:hover {
        background-color:$lightblue ;
        color:$veryLightBlue ;
    }
}
</style>