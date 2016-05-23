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
        
        /* 消息部分 */
	    '/msg': {
	    	name: 'msg',
	        component: require('./views/msg')
	    },
        '/msg/system': {
	    	name: 'msgSystem',
	        component: require('./views/msg/system')
	    },
        '/msg/comment': {
	    	name: 'msgComment',
	        component: require('./views/msg/comment')
	    },
        '/msg/message': {
	    	name: 'msgMessage',
	        component: require('./views/msg/message')
	    },
        '/msg/order': {
	    	name: 'msgOrder',
	        component: require('./views/msg/order')
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
        '/scene/appraise': {
	    	name: 'sceneAppraise',
	        component: require('./views/scene/appraise')
	    },
        '/scene/inviteOrder': {
	    	name: 'sceneInviteOrder',
	        component: require('./views/scene/inviteOrder')
	    },
        '/scene/oneKeyOrder': {
	    	name: 'sceneOneKeyOrder',
	        component: require('./views/scene/oneKeyOrder')
	    },
		'/scene/orderSuccess': {
			name: 'sceneOrderSuccess',
			component: require('./views/scene/orderSuccess')
		},
		'/scene/address': {
			name: 'sceneAddress',
			component: require('./views/scene/address')
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
		'/user/work/appraise': {
			name: 'userWorkAppraise',
			component: require('./views/user/work/appraise')
		},
        '/user/work/publish': {
	    	name: 'userWorkPublish',
	        component: require('./views/user/work/publish')
	    },
		'/user/work/publishDetail': {
			name: 'userWorkPublishDetail',
			component: require('./views/user/work/publishDetail')
		},
        '/user/work/accept': {
	    	name: 'userWorkAccept',
	        component: require('./views/user/work/accept')
	    },
		'/user/work/acceptDetail': {
			name: 'userWorkAcceptDetail',
			component: require('./views/user/work/acceptDetail')
		},
		'/user/work/acceptBus': {
			name: 'userWorkAcceptBus',
			component: require('./views/user/work/acceptBus')
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
        },
		
		/* 公用页面 */
		'/common/selectCity': {
	    	name: 'selectCity',
	        component: require('./views/common/selectCity')
	    },
		'/common/selectSchool': {
	    	name: 'selectSchool',
	        component: require('./views/common/selectSchool')
	    },
		'/common/selectSex': {
	    	name: 'selectSex',
	        component: require('./views/common/selectSex')
	    },
		'/common/selectSort': {
	    	name: 'selectSort',
	        component: require('./views/common/selectSort')
	    },
		'/common/upload': {
	    	name: 'upload',
	        component: require('./views/common/upload')
	    }
	})
}
