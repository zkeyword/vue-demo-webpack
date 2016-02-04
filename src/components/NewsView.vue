<template>
  <div class="counter">
    <p>Current count: {{count}}</p>
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
		}, 500)
		this.msg += ' !';
	},
	route:{
		data (transition){
			console.log( transition )
			this.msg += ' world';
		},
		activate(){
			console.log(6)
		},
		deactivate (transition){
			console.log(5)
			transition.next();
		}
	}
}
</script>