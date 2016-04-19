<style lang="less">
    @import '../../../less/lib/mixins.less';
    .page-user-work-accept{
        .item{
            position: relative;
            background:#fff;
            .border-radius(8);
            .rem(margin-bottom, 20);
            .rem(padding, 20);
        }
            header{
                border-bottom:2px solid #dedede;
                .rem(border-bottom-width, 2);
                .rem(padding-bottom, 10);
                .rem(margin-bottom, 10);
            }
                .photoWrap{
                    position: absolute;
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
                .textWrap{
                    .rem(padding-left, 110);
                    .header{
                        .rem(padding-bottom, 10)
                    }
                        .time{
                            color:#b2b2b2
                        }
                }

            .info{
                .salary{
                    color: #ff946e;
                }
                span{
                    color: #b2b2b2;
                }
                .btn{
                    border:2px solid #2fd380;
                    .rem(border-width, 2);
                    .border-radius(8);
                    color:#2fd380;
                    font-style:normal;
                    .rem(font-size, 30);
                    .rem(padding, 0, 10);
                    &.disable{
                        color:#b2b2b2;
                        border-color: #b2b2b2;
                    }
                }
            }
    }
</style>

<template>
    <div class="page-user-work-accept pullRreshwrap">
        <header-bar :title="title" :back="true"></header-bar>

        <div class="content showHeader">
            <pull-refresh @on-scroll-lodding="getData">
                <div class="item" v-for="item in formData">
                    <header class="clearfix" v-link="{name: 'userWorkAcceptDetail', query: {'order_id': item.order_id}}">
                        <div class="photoWrap">
                            <img :src="item.head_img_url">
                        </div>
                        <div class="textWrap">
                            <div class="header clearfix">
                                <span class="name">{{item.scene_name}}</span>
                                <span class="time pull-right">{{item.create_time}}</span>
                            </div>
                            <div class="text">{{item.detail}}</div>
                        </div>
                    </header>
                    <div class="info">
                        <div class="salary clearfix">
                            <div class="pull-left">报酬: {{item.salary}}元/{{item.unit}}</div>
                            <div class="pull-right">
                                <i class="btn">评价</i>
                                <i class="btn disable">已评价</i>
                            </div>
                        </div>
                        <div>
                            时间: <span>{{item.start_time}} {{item.end_time}} {{item.period_times}}</span>
                        </div>
                        <div>
                            服务位置: <span>{{item.workplace}}</span>
                        </div>
                    </div>
                </div>
            </pull-refresh>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '发单任务',
                formData:[],
                appraiseText:['评价','已评价']
            }
        },
        route: {
            data (transition){
                let self     = this,
                    query    = transition.to.query;

                $.extend(self.formData, query);
            }
        },
        methods:{
            getData(index, callback){
                let self = this;
                $.ajax({
                    url: "/soytime/order/receiveList",
                    type:'POST',
                    data:{
                        currentPage: index
                    },
                    dataType: 'json',
                    success: ((data)=>{
                        let arr = data.result,
                            len = arr.length;
                        for(let i = 0; i<len; i++){
                            self.formData.push(arr[i]);
                        }
                        callback && callback();
                    })
                });
            }
        },
        components: {
            'headerBar': require('../../../components/header.vue'),
            'pullRefresh': require('../../../components/pullRefresh.vue')
        }
    }
</script>