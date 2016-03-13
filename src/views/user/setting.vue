<style lang="less">

</style>

<template>
    <div class="page-user page-user-setting">
        <header-bar :title="title" back="true"></header-bar>
        
        <div class="content showHeader showFooter">

            <div class="card-header">
                头像
            </div>

            <div class="list-block">
                <ul>
                    <li class="item-content item-link">
                        <div class="item-media"><i class="icon icon-f7"></i></div>
                        <div class="item-inner">
                            <div class="item-title">我的余额</div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="list-block">
                <ul>
                    <li class="item-content item-link">
                        <div class="item-media"><i class="icon icon-f7"></i></div>
                        <div class="item-inner">
                            <div class="item-title">设置</div>
                        </div>
                    </li>
                    <li class="item-content item-link">
                        <div class="item-media"><i class="icon icon-f7"></i></div>
                        <div class="item-inner">
                            <div class="item-title">发布服务</div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="list-block">
                <ul>
                    <li class="item-content item-link">
                        <div class="item-media"><i class="icon icon-f7"></i></div>
                        <div class="item-inner">
                            <div class="item-title">发单任务</div>
                        </div>
                    </li>
                    <li class="item-content item-link">
                        <div class="item-media"><i class="icon icon-f7"></i></div>
                        <div class="item-inner">
                            <div class="item-title">接单任务</div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="list-block">
                <ul>
                    <li class="item-content item-link">
                        <div class="item-media"><i class="icon icon-f7"></i></div>
                        <div class="item-inner">
                            <div class="item-title">在线客服</div>
                        </div>
                    </li>
                </ul>
            </div>
            
            <time-conf :timer.sync="formData.timeConf"></time-conf>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '设置',
                formData: {}
            }
        },
        ready (){
            //setTimeout(() => {
            //   this.$route.router.go({ name: 'list'});
            //},2000);
        },
        components: {
            'headerBar': require('../../components/header.vue'),
            'timeConf': require('../../components/timeConf.vue')
        }
    }
</script>