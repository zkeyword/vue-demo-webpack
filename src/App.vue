<style lang="less">
.bar-nav{
    background:#54c5ff;
    .title{color:#fff}
}
.inside{
    padding-top: 2.5rem;
}
 .page-enter {
    z-index: 2002;
    -webkit-animation: pageFromRightToCenter 400ms forwards;
    -o-animation: pageFromRightToCenter 400ms forwards;
    animation: pageFromRightToCenter 400ms forward
}
.page-leave {
    z-index: 2002;
    -webkit-animation: pageFromCenterToRight 400ms forwards;
    -o-animation: pageFromCenterToRight 400ms forwards;
    animation: pageFromCenterToRight 400ms forwards;
}
</style>

<template>
    <div class="page page-current">

        <nav class="bar bar-tab" v-if="isIndex" >
            <a class="tab-item" external v-link="{ path: '/home', activeClass: 'active'}">
                <span class="icon icon-home"></span>
                <span class="tab-label">首页</span>
            </a>
            <a class="tab-item" external  v-link="{ path: '/msg', activeClass: 'active' }">
                <span class="icon icon-message"></span>
                <span class="tab-label">消息</span>
            </a>
            <a class="tab-item" external v-link="{ path: '/user', activeClass: 'active' }">
                <span class="icon icon-me"></span>
                <span class="tab-label">我的</span>
            </a>
        </nav>

        <router-view keep-alive></router-view>
    </div>
</template>

<script>
module.exports = {
    data :function() {
        return {
            authenticating: false,
            isIndex:true
        }
    }
}
</script>
