<style lang="less">
@import '../less/lib/mixins.less';
.page-msg{
    .scenefilter{
        position: absolute;
        left: 0;
        top: 2.2rem;
        z-index: 10;
        height: 2.2rem;
        background:#fff;
        width:100%;
        border-bottom:2px solid #b2b2b2;
        .rem(border-bottom-width, 2);
        
        li{
            width:50%;
            float:left;
            text-align:center;
            line-height:1.4rem;
            margin:0.4rem 0;
            .rem(font-size, 30);
            &:first-child{
                 border-right:2px solid #b2b2b2;
                .rem(border-right-width, 2);
            }
            &:last-child{
                 border-left:2px solid #b2b2b2;
                .rem(border-left-width, 2);
            }
            .icon{
                .rem(margin-left, 10);
            }
        }
    }
    
    .item{
        background:#fff;
        .border-radius(8);
    }
}
</style>

<template>
    <div class="page-msg">
        <header-bar :title="title"></header-bar>
        <ul class="scenefilter clearfix">
            <li>
                订单邀请
            </li>
            <li>
                消息
            </li>
        </ul>
        <div class="content showHeader showTab showFooter">
            <div class="item">
                麻花科技需要传单员1月20日
                今天去厦大发传单。今天去厦大发传单。还有什么昵？还有么昵？还有什么昵？随便写写。随便写写随便写写随便写写...
                报酬：15元/小时
                时间：1月22日  10：00-12：00  13：00-15：00
                任务位置：厦门大学
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return {
            title: '消息'
        }
    },
    route: {
        data (transition){
            console.log(this)
        },
        deactivate(){
            console.log(121212)  
        }
    },
    ready(){
        let self = this;

    },
    components: {
        'headerBar': require('../components/header.vue')
    }
}
</script>








