<style lang="less">
.bar-nav a{
	color:#fff;
}
</style>

<template>
    <header class="bar bar-nav">
        <a class="icon icon-left pull-left" v-if="back" @click="goBack"></a>
        <h1 class="title">{{title}}</h1>
    </header>
</template>

<script>
    export default {
        replace:true,
		props: {
			title: {
				type: String
			},
			back: {
				type: Boolean
			},
            target:{
                type: String
            },
            query: {
                type: Object,
				default: {}
            }
        },
        props: ['title', 'back', 'target', 'query'],
        methods:{
            goBack(){
				let self = this;
				if( self.target ){
					self.$route.router.go({'name': self.target, query: self.query });
				}else{
					history.go(-1)
				}
            }
        }
    }
</script>