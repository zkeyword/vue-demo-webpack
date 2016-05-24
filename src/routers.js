'use strict'

export default (router)=>{
	router.map({
	    '*': {
	        component: function (resolve) {
				require(['./views/home'], resolve)
			}
        },
		'/home': {
			name: 'home',
			component: function (resolve) {
				require(['./views/home'], resolve)
			}
	    },
        
        /* 消息部分 */
	    '/msg': {
	    	name: 'msg',
			component: function (resolve) {
				require(['./views/msg'], resolve)
			}
	    },
        '/msg/system': {
	    	name: 'msgSystem',
			component: function (resolve) {
				require(['./views/msg/system'], resolve)
			}
	    },
        '/msg/comment': {
	    	name: 'msgComment',
			component: function (resolve) {
				require(['./views/msg/comment'], resolve)
			}
	    },
        '/msg/message': {
	    	name: 'msgMessage',
			component: function (resolve) {
				require(['./views/msg/message'], resolve)
			}
	    },
        '/msg/order': {
	    	name: 'msgOrder',
			component: function (resolve) {
				require(['./views/msg/order'], resolve)
			}
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
