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
                 border-right:1px solid #b2b2b2;
                 .rem(border-right-width, 2);
            }
            
            span{
                &.cur{
                    color:#54c5ff
                    //border-bottom:1px solid #54c5ff;
                    //.rem(border-bottom-width, 2);
                }
            }
        }
    }
    
    .item{
        position:relative;
        background:#fff;
        .border-radius(8);
        
        header{
            border-bottom:2px solid #b2b2b2;
            .rem(border-bottom-width, 2);
            position:relative;
            
            .photoWrap{
                position:absolute;
                .rem(left, 20);
                .rem(top, 80);
                .rem(width, 90);
                .rem(height, 90);
                .border-radius(90);
                img{
                    width:100%;
                    height:100%;
                    .border-radius(120);
                }
            }
            
            .textWrap{
                .rem(padding, 20, 20, 20, 130);
            }
                .header{
                    position:relative;
                    .rem(font-size, 30);
                    span{
                        position:absolute;
                        right: 0;
                        top:0
                    }
                }
                .text{
                    .rem(font-size, 30);
                    .rem(padding, 10, 0);
                }
        }
        
        footer{
            .unit{}
            .time{}
            .position{}
        }
        
        .tag{
            position:absolute;
            .rem(top, -10);
            .rem(left, -20);
            background:#11cd6e;
            color:#fff;
            transform:rotate(-30deg);
            -webkit-transform:rotate(-30deg);
            .border-radius(8);
            .rem(padding, 10, 20);
            .rem(font-size, 24);
            
            &.over{
                background:#b2b2b2
            }
            
        }
    }
}
</style>

<template>
    <div class="page-msg">
        <header-bar :title="title"></header-bar>
        <ul class="scenefilter clearfix">
            <li>
                <span class="cur">订单邀请</span>
            </li>
            <li>
                <span>消息</span>
            </li>
        </ul>
        <div class="content showHeader showTab showFooter">
            <div class="item">
                <span class="tag">发传单</span>
                <header class="clearfix">
                    <div class="photoWrap">
                        <img :src="{{userInfo.photo}}">
                    </div>
                    <div class="textWrap">
                        <div class="header">
                            麻花科技需要传单员
                            <span>1月20日</span>
                        </div>
                        <div class="text">
                            今天去厦大发传单。今天去厦大发传单。还有什么昵？还有么昵？还有什么昵？随便写写。随便写写随便写写随便写写...
                        </div>
                    </div>
                </header>
                <footer>
                    <div class="unit">报酬：15元/小时</div>
                    <div class="time">时间：<span>1月22日  10：00-12：00  13：00-15：00</span></div>
                    <div class="position">任务位置：<span>厦门大学</span></div>
                </footer>
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








