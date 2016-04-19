import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from './store/store'
import RouterMap from './routers'
import App from './App'
import Filters from './filters'

Vue.use(VueRouter);

//添加过滤
Object.keys(Filters).forEach(k => Vue.filter(k, Filters[k]));

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
    if( toPath.replace(/[^/]/g,"").length > 1 || /auth/.test(toPath) || /scene/.test(toPath) ){
        router.app.isShowTab = false;
    }else{
        router.app.isShowTab = true;
    }
    transition.next();
});

//注册路由切换后
router.afterEach(function (transition) {
    if (/Android/gi.test(navigator.userAgent)) {
        window.addEventListener('resize', function () {
            if (document.activeElement.tagName == 'INPUT' || document.activeElement.tagName == 'TEXTAREA') {
                window.setTimeout(function () {
                    document.activeElement.scrollIntoViewIfNeeded();
                }, 0);
            }
        })
    }
})

App.store = Store;

router.start(App, '#app');

//暴漏路由调试接口
window.router = router;