'use strict'

export default (router)=>{
	router.map({
	    '*': {
	        component: require('./views/home')
        },
		'/home': {
			name: 'home',
	        component: require('./views/home')
	    },
	    '/msg': {
	    	name: 'msg',
	        component: require('./views/msg')
	        //子路由
	        //subRoutes:{
	         //   'detail/:giftId': {
	        //        name: 'detail', //具名路由
	        //        component: require('./views/detail')
	         //   }
	       // }
	    },
        /* 场景部分 */
        '/scene/': {
	    	name: 'scene',
	        component: require('./views/scene')
	    },
        '/scene/detail': {
	    	name: 'sceneDetail',
	        component: require('./views/scene/detail')
	    },
        
        /* 用户部分 */
	    '/user': {
	    	name: 'user',
	        component: require('./views/user')
	    },
        '/user/setting': {
	    	name: 'userSetting',
	        component: require('./views/user/setting')
	    },
        '/user/money': {
	    	name: 'userMoney',
	        component: require('./views/user/money')
	    },
        '/user/work/server': {
	    	name: 'userWorkServer',
	        component: require('./views/user/work/server')
	    },
        '/user/work/publish': {
	    	name: 'userWorkPublish',
	        component: require('./views/user/work/publish')
	    },
        '/user/work/accept': {
	    	name: 'userWorkAccept',
	        component: require('./views/user/work/accept')
	    },
        
        /* 客服 */
        '/service/': {
	    	name: 'service',
	        component: require('./views/service')
	    },
        
        /* 认证部分 */
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
        '/auth/checking': {
            name: 'authChecking',
            component: require('./views/user/auth/checking')
        },
        '/auth/success': {
            name: 'authSuccess',
            component: require('./views/user/auth/success')
        }
	})
}
