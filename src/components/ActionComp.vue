<script>
import { store } from '../store';
import ActionCardComp from './ActionCardComp.vue';
export default {
    components: {
        ActionCardComp,
},
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
    <!-- footer template -->
    <div class="primaryWhiteBg">
        <div class="container">
            <div class="row title">
                <p>
                    WE DO MORE FOR EVERYONE
                </p>

                <h1>Actions & <span>Projects</span></h1>

                <ul>
                    <li>
                        ALL
                    </li>
                    <li>
                        INSTITUTIONAL
                    </li>
                    <li>
                        SOCIAL
                    </li>
                    <li>
                        EVENTS
                    </li>
                    <li>
                        INNOVATIONS
                    </li>
                    <li>
                        ENVIROMENTS
                    </li>
                    <li>
                        TECHNOLOGY
                    </li>
                </ul>

                <div class="card_container">
                    <ActionCardComp v-for="(singleProj,i) in this.store.projectsArr" :key="i"
                    :imgPath="singleProj.img"
                    :title="singleProj.title"/>
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
    padding: 5rem 0;

}

.row.title{
    text-align: center;

    p {
        color:$lightblue ;
        font-weight: 500;
        font-size: 0.8rem;
    }

    h1 {
        padding: 1rem 0;
        span {
            background-color: $blueGrey;
            color: $darkBlue ;
            padding:0 0.4rem;
        }
    }
}

ul {
    display: flex;
    justify-content: center;

    padding: 2rem 0;

    li {
        padding: 0.5rem 1rem;
    }

    li:hover {
        background-color:$midBlue ;
        cursor: pointer;
    }
}
.card_container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    
}

</style>