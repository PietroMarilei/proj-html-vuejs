import { reactive } from "vue";

export const store = reactive(
    {
        allServices: [
            {
                icon: 'svgs/svg-1.svg',
                title: 'Audit e Assurance',
            },
            {
                icon: 'svgs/svg-2.svg',
                title: 'Financial Advisory',
            },
            {
                icon: 'svgs/svg-3.svg',
                title: 'Analytics and M&A',
            },
            {
                icon: 'svgs/svg-4.svg',
                title: 'Middle Marketing',
            },
            {
                icon: 'svgs/svg-5.svg',
                title: 'Legal Consulting and Saul Goodman Stuff',
            },
            {
                icon: 'svgs/svg-6.svg',
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

        headerArr: [
            'Home',
            'Services',
            'About',
            'Projects',
            'Results',
        ],
        numbersData: {
            certifications: 128,
            employees: 230,
            customers: 517,
            countries: 94,
        },
        footerData: {
            about: [
                'The Company',
                'Istitutional',
                'Social Events',
                'Innovation',
                'Enviroment',
                'Technology'
            ],
            services: [
                'Audit &Assurance',
                'Financial Advisory',
                'Analytics M&A',
                'Middle Marketing' ,
                'Legal Consulting',
                'regulatory Risk',
            ],
            support: [
                'Responsability',
                'Term of Use',
                'About Cookies',
                'Privacy Policy',
                'Accessibilty',
                'Information',
            ]
        }
    },
)

//could use Pinia ora Vuex