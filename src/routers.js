'use strict'

export default function(router){
	router.map({
	    '*': {
	        component: require('./views/home')
        },
		'/': {
			name: 'home',
	        component: require('./views/home')
	    },
	    '/msg': {
	    	name: 'name',
	        component: require('./views/list'),
	        //子路由
	        subRoutes:{
	            'detail/:giftId': {
	                name: 'detail', //具名路由
	                component: require('./views/detail')
	            }
	        }
	    },
	    '/user': {
	    	name: 'user',
	        component: require('./views/tab')
	    },
	    '/auth': {
	    	name: 'auth',
	        component: require('./views/user/auth/step1')
	    },
		'/auth/selectCity': {
        	name: 'selectCity',
            component: require('./views/user/auth/selectCity')
        },
		'/auth/selectSchool': {
        	name: 'selectSchool',
            component: require('./views/user/auth/selectSchool')
        },
        '/auth/selectMap': {
        	name: 'selectMap',
            component: require('./views/user/auth/selectMap')
        },
        '/auth/step2': {
        	name: 'authStep2',
            component: require('./views/user/auth/step2')
        },
        '/auth/step3': {
            name: 'authStep3',
            component: require('./views/user/auth/step3')
        },
        '/auth/step4': {
            name: 'authStep4',
            component: require('./views/user/auth/step4')
        }
	})
}
