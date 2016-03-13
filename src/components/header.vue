<style lang="less">

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
        props: ['title', 'back'],
        methods:{
            goBack(){
                history.go(-1)
            }
        }
    }
</script>