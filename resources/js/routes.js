import Welcome from './pages/Welcome.vue';

export default
{
    mode: 'history',
    routes:[
        {
            path: '/',
            component: Welcome,
            name: 'Welcome'
        }
    ]
}