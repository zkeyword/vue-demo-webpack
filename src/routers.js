'use strict'

import home from './components/NewsView.vue'
import Counter from './components/Counter.vue'

export default function(router){
	router.map({
		'/': {
			name: 'home',
			component: home
		},
		'*': {
            component: home
        },
		'/counter': {
			component: Counter
		}
	})
}
