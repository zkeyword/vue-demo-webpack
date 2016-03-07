<style lang="less">
@import 'less/style.less';
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
