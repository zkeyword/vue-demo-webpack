'use strict'

export default function(router){
	router.map({
		'/': {
			name: 'home',
			component: require('./views/home')
		},
		'*': {
            component: require('./views/home')
        },
		'/list': {
			name: 'list',
			component: require('./views/list')
		},
		'/user': {
			name: 'user',
			component: require('./views/user'),
			subRoutes: {
				'/edit/:userId': {
					name:'userEdit',
					component: require('./views/user/edit')
				}
			}
		}
	})
}
