import i18n from './i18n.js'
import Welcome from './pages/Welcome.vue';
import About from './pages/About.vue';
import Contacts from './pages/Contacts.vue';
import NotFound from './pages/NotFound.vue';


export default
{
    mode: 'history',
    linkActiveClass: 'font-bold',
    routes:[
        {
            path: '/',
            redirect: `/${i18n.locale}`
        },
        {
            path:'/:lang',
            component: {
                render(c) { return c('router-view') }
            },
            children: [
                {
                    path: '/',
                    component: Welcome,
                    name: 'Welcome'
                },
                {
                    path: 'about',
                    component: About,
                    name: 'About'
                },
                {
                    path: 'contacts',
                    component: Contacts,
                    name: 'Contacts'
                },
                {
                    path: '*',
                    component: NotFound,
                    name: 'NotFound'
                }
            ]
        }
    ]
}
