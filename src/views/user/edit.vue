<template>
    <div transition="page" class="page page-current">
		<p>当前路径: {{$route.path}}</p>
		<p>当前路由参数: {{$route.params | json}}</p>
	</div>
</template>

<script>
    export default {
        ready (){
            //setTimeout(() => {
            //   this.$route.router.go({ name: 'list'});
            //},2000);
        }
    }
</script>

<style lang="less">

</style>








