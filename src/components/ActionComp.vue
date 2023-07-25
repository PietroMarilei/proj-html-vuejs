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
            <div class="row">
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

                <div class="card_wrapper">
                    <ActionCardComp v-for="(singleProj,i) in this.store.projectsArr" :key="i"
                    :imgPath="singleProj.img"
                    :title="singleProj.title"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    max-width: 900px;
    margin: 0 auto;
}

.row {
    text-align: center;
}

ul {
    display: flex;
    justify-content: center;

    padding: 2rem 0;

    li {
        padding: 0 1rem;
    }
}
</style>