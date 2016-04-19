<style lang="less">
    @import '../../../less/lib/mixins.less';
    .page-user-work-acceptDetail{
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
                .rem(font-size, 90);
                position: absolute;
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

    }
</style>

<template>
    <div class="page-user-work-acceptDetail">
        <header-bar :title="title" :back="true"></header-bar>

        <div class="content showHeader">
            <div>
                <header>{{formData.scene_name}}</header>
                <section>
                    <div>{{formData.start_time}} - {{formData.end_time}}</div>
                    <div>{{formData.period_times}}</div>
                    <div>共{{formData.number}}人</div>
                    <div>{{formData.salary}}元/{{formData.unit}}</div>
                    <div>{{formData.comp_addr}}</div>
                </section>
            </div>
            <div class="map" v-link="{name: 'userWorkAcceptDetail', query: queryObj}">
                <div>
                    <i class="ico ico-bus"></i>
                    <span>公交路线</span>
                </div>
                <i class="ico ico-bofang"></i>
            </div>
            <div>
                {{formData.detail}}
            </div>
            <div>
                <section>
                    <div class="photoWrap">
                        <img :src="formData.head_img_url">
                    </div>
                </section>
            </div>
            <footer class="clearfix">
                <span>拒绝</span>
                <span>报名</span>
            </footer>
        </div>
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
                            workplace: data.result.workplace,
                            work_longitude: data.result.work_longitude,
                            work_latitude: data.result.work_latitude
                        }
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