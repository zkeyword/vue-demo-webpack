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
        .rem(margin-bottom, 20);
        position:relative;
        
        .photoWrap{
            position:absolute;
            .rem(width, 90);
            .rem(height, 90);
            .border-radius(90);
            img{
                width:100%;
                height:100%;
                .border-radius(120);
            }
        }
    }
    
    .order{
        
        header{
            border-bottom:2px solid #b2b2b2;
            .rem(border-bottom-width, 2);
            
            .photoWrap{
                .rem(left, 20);
                .rem(top, 40);
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
            .rem(margin, 0, 20);
            .rem(padding, 20, 0);
            .rem(font-size, 30);
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
        
        .timeout{
            position:absolute;
            top:0;
            left:0;
            width:100%;
            height:100%;
            background:url(../img/timeout.png) no-repeat center;
            .rem(background-size, 240, 180);
        }
    }
    
    .msg{
        .photoWrap{
            .rem(left, 20);
            .rem(top, 20);
        }
        .textWrap{
            .rem(padding, 20, 20, 20, 120);
        }
        .name{
            .rem(font-size, 30);
            .rem(padding-right, 140);
        }
        .text{
            .rem(font-size, 30);
        }
        .time{
            color:#b2b2b2;
            .rem(font-size, 24);
            position:absolute;
            .rem(top, 20);
            .rem(right, 20);
        }
    }
}
</style>

<template>
    <div class="page-msg">
        <header-bar :title="title"></header-bar>
        <ul class="scenefilter clearfix">
            <li @click="showMsgList(true)">
                <span :class="{'cur': isOrder}">订单邀请</span>
            </li>
            <li @click="showMsgList(false)">
                <span :class="{'cur': !isOrder}">消息</span>
            </li>
        </ul>
        <div class="content showHeader showTab showFooter">
        
            <div class="item order" v-if="isOrder" v-for="order in formData.order" v-link="{name: 'msgOrder'}">
                <div class="timeout" v-if="order.status == 3"></div>
                <span class="tag">{{order.scene_name}}</span>
                <header class="clearfix">
                    <div class="photoWrap">
                        <img :src="order.head_img_url">
                    </div>
                    <div class="textWrap">
                        <div class="header">
                            {{order.create_name}}
                            <span>{{order.create_time}}</span>
                        </div>
                        <div class="text">
                            {{order.detail}}
                        </div>
                    </div>
                </header>
                <footer>
                    <div class="unit">报酬：{{order.unit}}</div>
                    <div class="time">时间：<span>{{order.start_time}}  {{order.end_time}}</span></div>
                    <div class="position">任务位置：<span>{{order.workplace}}</span></div>
                </footer>
            </div>
            
            <div class="item msg" v-if="!isOrder" v-for="msg in formData.msg" @click="goMsg(msg.type, msg.id)">
                <div class="photoWrap">
                    <img :src="msg.head_img_url">
                </div>
                <div class="textWrap">
                    <div class="name" v-if="msg.type == 3">系统</div>
                    <div class="name" v-else>{{msg.nick_name}}</div>
                    <div class="text">{{msg.content}} </div>
                    <span class="time">{{msg.create_time}}</span>
                </div>
            </div>
            
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return {
            title: '消息',
            isOrder: false,
            formData: {
                order: {},
                msg: {}
            }
        }
    },
    route: {
        data (transition){
            let self = this;
            $.ajax({
                url: "/soytime/msg/orderInviteList",
                type:'POST',
                dataType: 'json',
                success: ((data)=>{
                    self.formData.order = data.result;
                })
            });
            $.ajax({
                url: "/soytime/msg/list",
                type:'POST',
                dataType: 'json',
                success: ((data)=>{
                    self.formData.msg = data.result;
                })
            });
        },
        deactivate(){
            this.isOrder = false;
        }
    },
    ready(){
        let self = this;

    },
    methods:{
        showMsgList(arg){
            this.isOrder = arg;
        },
        goMsg(type, id){
            let self = this;
            
            switch(type){
                case 1:
                    self.$route.router.go({name: 'msgComment', query: {id: id}});
                    break;
                case 2:
                    self.$route.router.go({name: 'msgOrder', query: {id: id}});
                    break;
                case 3:
                    self.$route.router.go({name: 'msgSystem', query: {id: id}});
                    break;
            }
            
        }
    },
    components: {
        'headerBar': require('../components/header.vue')
    }
}
</script>








