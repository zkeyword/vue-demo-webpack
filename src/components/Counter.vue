<template>
  <div class="counter">
    <p>Current count: {{count}}</p>
	{{msg}}
  </div>
</template>

<script>
export default {
	data () {
		return {
			count: 0,
			msg: 'hello'
		}
	},
	ready () {
		this.handle = setInterval(() => {
		this.count++
		}, 1000)
		this.msg += ' world';
		this.msg += ' !';
	},
	route:{
		data (transition){
			console.log( transition )
			//this.getTopics()
		},
		deactivate (transition){
			console.log(5)
			transition.next();
		}
	},
	destroyed () {
		clearInterval(this.handle)
		console.log(4)
	},
	methods:{
		getTopics(){
			console.log('getTopics')
		}
	}
}
</script>


	