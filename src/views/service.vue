<style lang="less">

</style>

<template>
    <div class="page-user">
        <header-bar :title="title"></header-bar>
        
        <div class="content showHeader showFooter">
            <a external v-link="">edit</a>


            <div class="card-header">
                <img src="">
                名字

                未认证，点此认证！
                
                好评   1
                中评
                差评   1
                收藏
            </div>

            <div class="list-block">
                <ul>
                    <li class="item-content item-link">
                        <a external v-link="{name: 'userMoney'}">
                            <div class="item-media"><i class="icon icon-f7"></i></div>
                            <div class="item-inner">
                                <div class="item-title">我的余额</div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="list-block">
                <ul>
                    <li class="item-content item-link">
                        <a external v-link="{name: 'userSetting'}">
                            <div class="item-media"><i class="icon icon-f7"></i></div>
                            <div class="item-inner">
                                <div class="item-title">设置</div>
                            </div>
                        </a>
                    </li>
                    <li class="item-content item-link">
                        <a external v-link="{name: 'userWorkServer'}">
                            <div class="item-media"><i class="icon icon-f7"></i></div>
                            <div class="item-inner">
                                <div class="item-title">发布服务</div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="list-block">
                <ul>
                    <li class="item-content item-link">
                        <a external v-link="{name: 'userWorkPublish'}">
                            <div class="item-media"><i class="icon icon-f7"></i></div>
                            <div class="item-inner">
                                <div class="item-title">发单任务</div>
                            </div>
                        </a>
                    </li>
                    <li class="item-content item-link">
                        <a external v-link="{name: 'userWorkAccept'}">
                            <div class="item-media"><i class="icon icon-f7"></i></div>
                            <div class="item-inner">
                                <div class="item-title">接单任务</div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="list-block">
                <ul>
                    <li class="item-content item-link">
                        <a external v-link="{name: 'service'}">
                            <div class="item-media"><i class="icon icon-f7"></i></div>
                            <div class="item-inner">
                                <div class="item-title">在线客服</div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '我的'
            }
        },
        ready (){
            //setTimeout(() => {
            //   this.$route.router.go({ name: 'list'});
            //},2000);
        },
        components: {
            'headerBar': require('../components/header.vue')
        }
    }
</script>