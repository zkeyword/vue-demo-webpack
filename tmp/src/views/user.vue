<template>
    user 
	<a external v-link="{ name: 'userEdit', params: { userId: 123 } }">edit</a>
	<router-view></router-view>
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
    .index2{
        width: 100%;
        background-color: #fff;
        margin-top: 40%;
    }
</style>








