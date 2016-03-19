<style lang="less">
@import '../../less/lib/mixins.less';
.page-scene-detail{
    
}
    
</style>

<template>
    <div transition="page" class="page page-scene-detail page-current">
        <header-bar :title="title" :back="true"></header-bar>
        <div class="content showHeader showFooter">
            <header>
                林小兔
                5人已收藏
                厦门大学
                厦门
                我的服务：地推 酒店服务 话务员 物流 家教
            </header>
            介绍服务
            工作时间
            <time-conf :timer="formData.timeConf"></time-conf>
            客户评价
            马小跳6080
            2016-2-22
            查看5条评论
        </div>
        <span 
                class="ui-btn ui-btn-big"
            >
            约TA
        </span>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title: null
        }
    },
    route:{
        data (transition){
            let self  = this,
                query = transition.to.query;
                
            self.title = query.scene_name;
        }  
    },
    ready: function () {
        
    },
    components: {
        'headerBar': require('../../components/header.vue'),
        'timeConf': require('../../components/timeConf.vue')
    }
}
</script>
