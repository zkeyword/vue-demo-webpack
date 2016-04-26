<style lang="less">
    @import '../../less/lib/mixins.less';
    .page-scene-orderSuccess{
        .content{
            padding-left: 0.65rem;
            padding-right: 0.65rem;
        }
        .header{
            text-align: center;
            color: #11cd6e;
            .rem(font-size, 34);
            .rem(padding-top, 10);
        }
        .subHeader{
            text-align: center;
            color:#b2b2b2;
            .rem(font-size, 24);
        }
        .jump{
            position: absolute;
            color:#b2b2b2;
            .rem(right, 10);
            .rem(top, 10);
            .rem(font-size, 24);
        }

        .imgWrap{
            .rem(padding, 10);
            img{
                height:100%;
                width:100%;
            }
            -webkit-transform-origin: 50%;
            transform-origin: 50%;
            -webkit-animation: preloader-spin 1s steps(12, end) infinite;
            animation: preloader-spin 1s steps(12, end) infinite;
            border-radius:100%;
        }

        .text{
            text-align: center;
            color:#b2b2b2;
            .rem(font-size, 24);

            p{
            .rem(padding, 5);
                margin:0;
            }
        }

        .userList{

            .list{
                .rem(padding, 10, 0);
            }
                .item{
                    border-bottom:1px solid #dedede;
                    .rem(border-bottom-width, 2);
                    .rem(padding, 6, 0);
                }
                header{
                    .rem(font-size, 24);
                }
                span{
                    display: inline-block;
                    .rem(height, 66);
                    .rem(line-height, 66);
                }
                .ico-xuan{
                    .rem(font-size, 40);
                    float: left;
                    color:#b2b2b2;
                    &.cur{
                        color:#11cd6e;
                     }
                }
                .img{
                    float: left;
                    .rem(width, 66);
                    .border-radius(66);
                    .rem(margin, 0, 20);
                    img{
                        height:100%;
                        width:100%;
                    }
                }
                .name{
                    float: left;
                    .rem(font-size, 24);
                }
                .ico-dianhua3{
                    .rem(font-size, 60);
                    float: right;
                    color: #54c5ff;
                }
        }

        .showOrderDetail{
            text-align: center;
            font-size: .85rem;
            height: 2.4rem;
            line-height: 2.3rem;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            color:#11cd6e;
            background: #fafafa;
            //border-top:1px solid #dedede;
            //.rem(border-top-width, 2);
        }
    }

</style>

<template>
    <div transition="page" class="page-scene-orderSuccess page-current">
        <div class="content  showFooter">
            <div class="header">下单成功!</div>
            <div class="subHeader">需求人数2人</div>
            <span class="jump">跳过</span>
            <div class="imgWrap">
                <img src="../../img/orderSucess.png">
            </div>
            <div class="userList">
                <div class="text">
                    <p>系统已为您推送 203 人</p>
                    <p>已报名人数3人</p>
                </div>
                <div class="list">
                    <header>剩余选择人数：2人</header>
                    <div class="item clearfix">
                        <span class="ico ico-xuan"></span>
                        <span class="img"><img src="../../img/orderSucess.png" alt=""></span>
                        <span class="name">林小兔</span>
                        <span class="ico ico-dianhua3" @click="getPhone(formData.name)"></span>
                    </div>
                </div>
            </div>
            <!--
            <div class="text">
                <p>
                    系统已为您推送 203 人，请耐心等待...
                </p>
                <p>
                    已报名人数0人
                </p>
                <p>
                    若30分钟内订单没有响应，系统将关闭订单
                </p>
            </div>
            -->
        </div>
        <span class="showOrderDetail" v-link="{name: 'userWorkPublishDetail', query:formData }">
            查看订单详情
        </span>
    </div>

    <confirm :show.sync="isShowConfirm" @on-confirm="confirm">
        <div class="page-scene-orderSuccess-formWrap">
            是否要获取{{confirmName}}的联系方式？
        </div>
    </confirm>
</template>

<script>
    export default {
        data(){
        return {
            isShowConfirm: false,
            confirmName: '',
            formData: {}
        }
    },
    route:{
        data (transition){
            let self  = this,
                query = transition.to.query;

            $.extend(self.formData, query);
        }
    },
    methods:{
        confirm(){
            self.isShowConfirm = false;
        },
        getPhone(name){
            let self = this;
            self.isShowConfirm = true;
            self.confirmName   = name;
        }
    },
    components: {
        'headerBar': require('../../components/header.vue'),
        'timeConf': require('../../components/timeConf.vue'),
        'confirm': require('../../components/confirm')
    }
    }
</script>
