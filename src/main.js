import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routerMap from './routers'
import App from './App'

// install router
Vue.use(VueRouter);
Vue.use(VueResource); //有jq或其他库 可不用该插件

// 过渡钩子
Vue.transition('expand', {
	beforeEnter: function (el) {
		
	},
	enter: function (el) {
		
	},
	afterEnter: function (el) {
		
	},
	enterCancelled: function (el) {
	
	},

	beforeLeave: function (el) {
		
	},
	leave: function (el) {
		
	},
	afterLeave: function (el) {
		
	},
	leaveCancelled: function (el) {
	
	}
});

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
