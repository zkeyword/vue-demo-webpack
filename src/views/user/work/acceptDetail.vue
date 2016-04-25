<style lang="less">
    @import '../../../less/lib/mixins.less';
    .page-user-work-acceptDetail{
        .content{
            .rem(padding-bottom, 160);
        }
        .header{
            position: relative;
            background:#fffade;
            .box-shadow(3px,3px,3px,#ddd);
            .rem(margin, 20, 0);
            .border-radius(8);
            .headerIcon{
                position: absolute;
                background: url(../../../img/acceptDetail-header.png) no-repeat;
                background-size: 100% 100%;
                .rem(height, 38);
                .rem(width, 38);
                .rem(top, -10);
                .rem(left, -10);
            }
            header{
                text-align: center;
                border-bottom:2px solid #dedede;
                .rem(border-bottom-width, 2);
                .rem(height, 80);
                .rem(line-height, 80);
                .rem(font-size, 34);
            }
            section{
                .rem(padding, 20);
                .rem(font-size, 30);
                div{
                    .rem(height, 60);
                    .rem(line-height, 60);
                    position: relative;
                    .rem(padding-left, 60);
                }
                .ico{
                    .rem(font-size, 50);
                    position: absolute;
                    .rem(top, 5);
                    left:0;
                }
            }
        }
        .map{
            background:url(../../../img/mapImg.png) no-repeat;
            .rem(background-size, 750, 118);
            .rem(height, 118);
            .rem(line-height, 118);
            .border-radius(8);
            position: relative;
            color:#54c5ff;
            div{
                .rem(width, 150);
                margin:0 auto;
                text-align: center;
                position: relative;
            }
            span{
                .rem(font-size, 30);
            }
            .ico-bus{
                position: absolute;
                .rem(font-size, 90);
                .rem(left, -80);
                .rem(top, 16);
            }
            .ico-bofang{
                position: absolute;
                .rem(right, 20);
                .rem(top, 35);
                .rem(font-size, 50);
            }
        }

        .detail{
            position: relative;
            background:#fffbed;
            border:2px solid #f3f2f0;
            .rem(border-width, 2);
            .rem(margin, 20, 0);
            .rem(padding, 30);
            .border-radius(8);
            .detailIcon{
                position: absolute;
                background: url(../../../img/acceptDetail-detail.png) no-repeat;
                background-size: 100% 100%;
                .rem(height, 60);
                .rem(width, 60);
                .rem(top, -15);
                .rem(left, -15);
            }
        }

        .photoWrap{
            .rem(margin-right, 20);
            .rem(width, 90);
            .rem(height, 90);
            .border-radius(90);
            img{
                width:100%;
                height:100%;
                .border-radius(120);
            }
        }
        .user{
            .rem(padding, 15, 20);
            border:2px solid #f1f1f1;
            .rem(border-width, 2);
            background: #fff;
            .border-radius(8);
            .pull-left{
                .photoWrap{
                    float: left;
                }
                .name{
                    float: left;
                    .rem(width, 90);
                    .rem(line-height, 90);
                    .rem(font-size, 28);
                }
            }
            .pull-right{
                .appraise{
                    float:left;
                    div{
                        float: left;
                        text-align:center;
                        .rem(margin-right, 10);
                        .rem(font-size, 28);
                        span{
                            display: block;
                        }
                        i{
                            font-style: normal;
                        }
                        &.goodCount{
                            color:#ff946e;
                        }
                        &.cenCount{
                            color:#888;
                        }
                        &.poolCount{
                            color:#b2b2b2;
                        }
                    }
                }
                .ico{
                    float: left;
                    color:#5e5e5e;
                    .rem(font-size, 60);
                    border-left:2px solid #b2b2b2;
                    .rem(border-left-width, 2);
                    .rem(margin, 20, 0, 0, 15);
                    .rem(padding-left, 20);
                }
            }
        }
        .list{
            .rem(padding, 20, 0);
            .photoWrap{
                float: left;
                .rem(margin, 10, 10, 0, 0);
            }
            .pull-left{
                .rem(font-size, 28);
            }
            .pull-right{
                .rem(font-size, 24);
            }
        }
        .footer{
            background: #fafafa;
            color: #fff;
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            .rem(padding-top, 60);

            .text{
                color:#b2b2b2;
                position: absolute;
                .rem(top, 0);
                .rem(right, 100);
                .rem(font-size, 28);
            }

            .btn{
                .rem(height, 130);
                .rem(line-height, 100);
                float:left;
                span{
                    display: inline-block;
                    height:100%;
                    width:100%;
                    text-align: center;
                    .border-radius(8);
                    .rem(font-size, 34);
                }
                &.no{
                    width:40%;
                    .rem(padding, 0, 20, 30, 30);
                    span{
                        background:#b2b2b2;
                    }
                }
                &.yes{
                    width:60%;
                    .rem(padding, 0, 30, 30, 0);
                    .border-radius(8);
                    span{
                        background:#ff946e;
                    }
                }
            }
        }
    }
</style>

<template>
    <div class="page-user-work-acceptDetail">
        <header-bar :title="title" :back="true"></header-bar>

        <div class="content showHeader">
            <div class="header">
                <i class="headerIcon"></i>
                <header>{{formData.scene_name}}</header>
                <section>
                    <div><i class="ico ico-calendar"></i>{{formData.start_time}} - {{formData.end_time}}</div>
                    <div><i class="ico ico-time"></i>{{formData.period_times}}</div>
                    <div><i class="ico ico-everyone"></i>共{{formData.number}}人</div>
                    <div><i class="ico ico-calendar"></i>{{formData.salary}}元/{{formData.unit}}</div>
                    <div><i class="ico ico-zuobiao"></i>{{formData.comp_addr}}</div>
                </section>
            </div>
            <div class="map" v-link="{name: 'userWorkAcceptBus', query: queryObj}">
                <div>
                    <i class="ico ico-bus"></i>
                    <span>公交路线</span>
                </div>
                <i class="ico ico-bofang"></i>
            </div>
            <div class="detail">
                <i class="detailIcon"></i>
                {{formData.detail}}
            </div>
            <div class="user clearfix">
                <div class="pull-left">
                    <div class="photoWrap">
                        <img :src="formData.head_img_url">
                    </div>
                    <div class="name">
                        {{formData.clientAppraise.creator_name}}
                    </div>
                </div>
                <div class="pull-right">
                    <div class="appraise">
                        <div class="goodCount"><span>{{formData.clientAppraise.goodCount}}</span><i>好评</i></div>
                        <div class="cenCount"><span>{{formData.clientAppraise.cenCount}}</span><i>中评</i></div>
                        <div class="poolCount"><span>{{formData.clientAppraise.poolCount}}</span><i>差评</i></div>
                    </div>
                    <a href="tel:{{formData.clientAppraise.mobile}}" class="ico ico-dianhua2"></a>
                </div>
            </div>
            <div class="list">
                <header class="clearfix">
                    <span class="pull-left">目前已有{{formData.response.length}}人报名</span>
                    <span class="pull-right">差评3次，酱油将无法推送服务</span>
                </header>
                <div class="clearfix">
                    <div class="photoWrap" v-for="item in formData.response">
                        <img :src="item.head_img_url">
                    </div>
                </div>
            </div>
        </div>
        <footer class="footer">
            <span class="text">报名可领取红包哦!!!</span>
            <ul class="clearfix">
                <li class="btn no" @click="back"><span>拒绝</span></li>
                <li class="btn yes" @click="save"><span>报名</span></li>
            </ul>
        </footer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '约单详情',
                formData: {},
                queryObj: {}
            }
        },
        route: {
            data (transition){
                let self     = this,
                    query    = transition.to.query;

                $.extend(self.formData, query);

                $.ajax({
                    url: "/soytime/order/receiveDetail",
                    type:'POST',
                    dataType: 'json',
                    data: query,
                    success: ((data)=>{
                        self.formData = data.result;
                        self.queryObj = {
                            comp_longitude: data.result.comp_longitude,
                            comp_latitude: data.result.comp_latitude,
                            city: data.result.city,
                            work_longitude: data.result.work_longitude,
                            work_latitude: data.result.work_latitude
                        }
                    })
                });
            }
        },
        methods:{
            save(){
                let self = this;
                $.ajax({
                    url: "/soytime/order/agreeOrder",
                    type:'POST',
                    data:self.formData,
                    dataType: 'json',
                    success: ((data)=>{

                    })
                });
            },
            back(){
                self.$route.router.go({name: 'userWorkAccept'});
            }
        },
        components: {
            'headerBar': require('../../../components/header.vue')
        }
    }
</script>