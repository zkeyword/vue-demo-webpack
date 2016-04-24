<style lang="less">
    @import '../../../less/lib/mixins.less';
    .page-user-work-publishDetail{
        .rem(font-size, 30);

        .header{
            background:#fff;
            .border-radius(8);
            .rem(margin, 0, 0, 30);
            header{
                text-align:center;
                border-bottom:1px solid #dedede;
                .rem(border-bottom-width, 2);
                .rem(height, 80);
                .rem(line-height, 80);
                .rem(font-size, 30);
                .rem(margin, 0, 20);
            }
            section{
                font-style: normal;
                .rem(padding, 20);
                i{color:#b2b2b2;font-style: normal}
            }
            footer{
                border-top:1px solid #dedede;
                .rem(border-top-width, 2);
                .rem(padding, 20);
                background:#fff;
            }
        }

        .item{
            .rem(margin, 0, 0, 30);
            background:#fff;
            .border-radius(8);
            header{
                border-bottom:2px solid #dedede;
                .rem(border-bottom-width, 2);
                .rem(padding, 20);
                .rem(font-size, 30);

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

                .school{
                    .rem(font-size, 24);
                    color:#5e5e5e;
                }

                .ico-dianhua{
                    color: #b2b2b2;
                    .rem(margin-top, 10);
                    .rem(font-size, 80);
                    &.cur{
                        color: #11cd6e;
                    }
                }
            }

            section{
                border-bottom:1px solid #dedede;
                .rem(border-bottom-width, 2);
                .rem(padding, 20);
            }

            footer{
                .rem(height, 50);
                .rem(line-height, 50);
                span{
                    display: inline-block;
                    text-align: center;
                }
                .no{
                    width: 50%;
                    float: left;
                    color: #5e5e5e;;
                }
                .yes{
                    width: 50%;
                    float: left;
                    background: #11cd6e;
                    color: #fff;
                }
                .pass{
                    width: 100%;
                    background:#54c5ff;
                    color: #fff;
                }
            }
        }
    }
</style>

<template>
    <div class="page-user-work-publishDetail">
        <header-bar :title="title" :back="true"></header-bar>

        <div class="content showHeader">
            <div class="header clearfix">
                <header>{{formData.scene_name}}</header>
                <section>
                    <ul>
                        <li class="clearfix">
                            <span class="label">公司地址：</span>
                            <span class="field">{{formData.workplace}}</span>
                        </li>
                        <li class="clearfix">
                            <span class="label">工作任务：</span>
                            <span class="field">{{formData.scene_name}}</span>
                        </li>
                        <li class="clearfix">
                            <span class="label">需要人数：</span>
                            <span class="field">{{formData.number}}人<i>(指定{{formData.stu_name}})</i><span>
                        </li>
                        <li class="clearfix">
                            <span class="label">工作时间：</span>
                            <span class="field">{{formData.start_time}}-{{formData.end_time}}</span>
                        </li>
                        <li class="clearfix">
                            <span class="label">时间段：</span>
                            <span class="field">{{formData.period_times}}</span>
                        </li>
                    </ul>
                    <div>50元/天</div>
                </section>
                <footer>
                    <div>工作内容：</div>
                    <div>{{formData.detail}}</div>
                </footer>
            </div>
            <div class="item clearfix" v-for="item in formData.orderResponses">
                 <header class="clearfix">
                    <div class="pull-left photoWrap">
                        <img :src="item.head_img_url">
                    </div>
                    <div class="pull-left nameWrap">
                        <div class="name">
                            <i class="icon"
                               :class="{'icon-xingbienan2': item.sex == 1, 'icon-xingbienv2': item.sex == 2}"
                            ></i>
                            {{item.usernick}}
                        </div>
                        <div class="school clearfix">
                            {{item.school_name}}
                        </div>
                    </div>
                    <i class="ico ico-dianhua pull-right"></i>
                </header>
                <section>
                    辅导孩子完成家庭作业，并且进行课外辅导！让孩子在理解能力跟读题能力有所提高！
                </section>
                <footer class="clearfix">
                    <span class="no">拒绝</span>
                    <span class="yes">约TA</span>
                    <span class="pass">已约</span>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '订单详细',
                formData: {}
            }
        },
        route: {
            data (transition){
                let self     = this,
                    query    = transition.to.query;

                $.extend(self.formData, query);

                $.ajax({
                    url: "/soytime/order/demandDetail",
                    type:'POST',
                    dataType: 'json',
                    data: {
                        order_id: self.formData.order_id
                    },
                    success: ((data)=>{
                        self.formData = data.result;
                    })
                });
            }
        },
        methods:{

        },
        components: {
            'headerBar': require('../../../components/header.vue')
        }
    }
</script>