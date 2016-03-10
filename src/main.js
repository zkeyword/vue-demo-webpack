import Vue from 'vue'
import Vuex from 'Vuex'
import VueRouter from 'vue-router'
import RouterMap from './routers'
import App from './App'
import filters from './filters'

Vue.use(Vuex);
Vue.use(VueRouter);

//添加过滤
//Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

Vue.filter('sceneCur', filters['sceneCur'])



// routing
let router = new VueRouter({
    hashbang: false,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true
});

RouterMap(router);

//注册路由切换前
//使底部菜单栏在一级路由切换时一直保持显示
//在二级页时隐藏
router.beforeEach(function (transition) {
    var toPath = transition.to.path;
    if( toPath.replace(/[^/]/g,"").length > 1 || /auth/.test(toPath) ){
        router.app.isIndex = false;
    }else{
        router.app.isIndex = true;
    }
    transition.next();
});

//注册路由切换后
router.afterEach(function (transition) {
    $.refreshScroller();
})

router.start(App, '#app');

//暴漏路由调试接口
window.router = router;