import { reactive } from "vue";

export const store = reactive(
    {
        projectsArr: [
            {
                img: 'project-1.jpg',
                title: 'Academic professionals program in social media'
            },
            {
                img: 'project-2.jpg',
                title: 'Preseident speech at the annual meeting'
            },
            {
                img: 'project-3.jpg',
                title: 'international business trip in Shangai'
            },
            {
                img: 'project-4.jpg',
                title: 'Technology workshop with education theme'
            },
            {
                img: 'project-5.jpg',
                title: 'Donations of clothes and food to the partner NGO'
            },
            {
                img: 'project-6.jpg',
                title: 'Confraternization of the procurement team'
            },
        ],
    },
)

//could use Pinia ora Vuex