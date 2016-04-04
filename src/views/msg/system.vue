
<style lang="less">
@import '../../less/lib/mixins.less';
.page-msg-system{
    .systemTitle{
        .rem(font-size, 30);
        .rem(padding, 20, 20, 40);
        text-align:center;
    }
    .systemContent{
        .rem(font-size, 24);
        .rem(padding, 0, 20);
    }
}
</style>

<template>
    <div class="page-msg-system" transition="page">
        <header-bar :title="title" :back="true"></header-bar>
        <div class="content showHeader">
        
            <div class="systemTitle">阿斯顿发达</div>
            <div class="systemContent">adsfasdfa</div>
          
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return {
            title: '系统消息'
        }
    },
    route: {
        data (transition){
            let self     = this,
                query    = transition.to.query;
                
            console.log(query)
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