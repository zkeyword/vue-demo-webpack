<style lang="less">
@import '../../less/lib/mixins.less';
.page-msg{
    
}
</style>

<template>
    <div class="page-msg-me" transition="page">
        <header-bar :title="title" :back="true"></header-bar>
        <div class="content showHeader">
        
            阿斯顿发达
          
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return {
            title: '约单详情'
        }
    },
    route: {
        data (transition){
            
        }
    },
    ready(){
        
    },
    methods:{
    },
    components: {
        'headerBar': require('../../components/header.vue')
    }
}
</script>