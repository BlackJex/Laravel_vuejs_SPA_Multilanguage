/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
import routes from './routes';
import VueI18n from 'vue-i18n';
import i18n from './i18n.js';
import "../../node_modules/@icon/themify-icons/themify-icons.css";


Vue.use(VueRouter);
Vue.use(VueI18n);
const vue_routes = new VueRouter(routes);
vue_routes.beforeEach((to, from, next) => {
    let language = to.params.lang;
    if(!language)
    {
        language = 'en';
    }
    i18n.locale = language;
    next();
});

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('guest-navbar', require('./layouts/navbars/GuestNavbar.vue').default);
Vue.component('vue-footer', require('./layouts/footers/VueFooter.vue').default);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router: vue_routes,
    i18n: i18n
});
