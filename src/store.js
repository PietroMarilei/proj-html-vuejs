import { reactive } from "vue";

export const store = reactive(
    {
        allServices: [
            {
                icon: '../assets/img/svgs/svg-1.svg',
                title: 'Audit e Assurance',
            },
            {
                icon: '../assets/img/svgs/svg-2.svg',
                title: 'Financial Advisory',
            },
            {
                icon: '../assets/img/svgs/svg-3.svg',
                title: 'Analytics and M&A',
            },
            {
                icon: '../assets/img/svgs/svg-4.svg',
                title: 'Middle Marketing',
            },
            {
                icon: '../assets/img/svgs/svg-5.svg',
                title: 'Legal Consulting and Saul Goodman Stuff',
            },
            {
                icon: '../assets/img/svgs/svg-6.svg',
                title: 'Regulatory Risk',
            },
        ],
        
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