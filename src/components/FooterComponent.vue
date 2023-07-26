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
    <footer class="blackGreyBg">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="first_sect">
                        <img src="../assets/img/logo.PNG" alt="">

                        <p>
                            A Functional HTML template <br>for Corporate Business
                        </p>

                        <ul>
                            <li>
                                <a href="">
                                    <i class="fa-solid fa-phone"></i>
                                </a> +1 (305) 1234-5678
                            </li>

                            <li>
                                <a href="">
                                    <i class="fa-solid fa-envelope"></i>
                                </a> hello@example.com
                            </li>

                            <li>
                                <a href="">
                                    <i class="fa-solid fa-location-dot"></i>
                                </a> +1 (305) 1234-5678
                            </li>
                        </ul>

                        <button>
                            GET IN TOUCH
                        </button>
                    </div>

                </div>

                <div class="col">
                    <div class="about card">
                        <h3>About</h3>

                        <ul>
                            <li>
                                <i class="fa-solid fa-chevron-right"></i> The Company
                            </li>
                            <li>
                                <i class="fa-solid fa-chevron-right"></i> Istitutional
                            </li>
                            <li>
                                <i class="fa-solid fa-chevron-right"></i> Social Events
                            </li>

                            <li>
                                <i class="fa-solid fa-chevron-right"></i> Innovation
                            </li>
                            <li>
                                <i class="fa-solid fa-chevron-right"></i> Enviroment
                            </li>
                            <li>
                                <i class="fa-solid fa-chevron-right"></i> Technology
                            </li>
                        </ul>
                    </div>
                </div>

                  <div class="col">
                        <div class="services_footer card">
                            <h3>Services</h3>

                            <ul>
                                <li>
                                    <i class="fa-solid fa-chevron-right"></i> Audit &Assurance
                                </li>
                                <li>
                                    <i class="fa-solid fa-chevron-right"></i> Financial Advisory
                                </li>
                                <li>
                                    <i class="fa-solid fa-chevron-right"></i> Analytics M&A
                                </li>

                                <li>
                                    <i class="fa-solid fa-chevron-right"></i> Middle Marketing
                                </li>
                                <li>
                                    <i class="fa-solid fa-chevron-right"></i> Legal Consulting
                                </li>
                                <li>
                                    <i class="fa-solid fa-chevron-right"></i> regulatory Risk
                                </li>
                            </ul>
                        </div>
                    </div>

                     <div class="col">
                            <div class="Support card">
                                <h3>Services</h3>

                                <ul>
                                    <li>
                                        <i class="fa-solid fa-chevron-right"></i> Resposnability
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-chevron-right"></i> Term of Use
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-chevron-right"></i> About Cookies
                                    </li>

                                    <li>
                                        <i class="fa-solid fa-chevron-right"></i> Privacy policy
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-chevron-right"></i> Accessibility
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-chevron-right"></i> Information
                                    </li>
                                </ul>
                            </div>
                        </div>
            </div>
        </div>
    </footer>

    <div class="end_footer">
        <div class="container">
            <div class="row">
                <p>Enjoy your privacy, we are tracking any intetion of piracy</p>

                <p>
                    <i class="fa-regular fa-copyright"></i> 2023 NEXTGEN is proudly powered by <span>ME</span>
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;

footer {
    color: $primaryWhite;
    font-size: 0.8rem;
}

.container {
    max-width: 900px;
    margin: 0 auto;
}

.row {
    display: flex;
    justify-content: space-between;
    padding: 4rem 0;
    gap: 1rem;


}

.first_sect {
    img {
        width: 30%;
    }

    a {
        all: unset;
        margin-right: 0.3rem
    }

    li {
        color: $primaryWhite;
        font-size: 0.8rem;
        margin: 1rem 0;
    }

    button {
        all: unset;
        color: $primaryWhite ;
        border: 2px solid $darkBlue;
        font-weight: 600;
        font-size: 1rem;
        padding: 0.4rem 0.5rem;
        border-radius: 3px;
    }

    button:hover {
        background-color:$lightblue ;
        color:$backGrey ;
    }
}
.card {
    padding: 1rem;
    background-color: #1f1f29;
    border-radius: 7px;
    padding-right: 2rem;
    width: 200px;

    ul {
        li {
            padding: 0.3rem 0;
        }
    }

}

.end_footer {
    background-color:black ;
    color: $primaryWhite;

    .row {
        display: flex;
        justify-content: space-between;
        padding: 1rem 0;
    }

    p {
        font-size: 0.6rem;

        span {
            color: $darkBlue;
            font-weight: 800;
        }
    }
}
</style>