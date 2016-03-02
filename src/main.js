import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routerMap from './routers'
import App from './components/App.vue'

// install router
Vue.use(VueRouter);
Vue.use(VueResource);

// routing
let router = new VueRouter({
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true
});

routerMap(router);

router.beforeEach(function () {
	window.scrollTo(0, 0);
});

router.start(App, '#app');