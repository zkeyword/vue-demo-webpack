<style lang="less">
@import '../less/lib/mixins.less';
.bar-tab{
    background:#fff;
    border-top: 1px solid #b2b2b2;
    .rem(border-top-width, 2);
}
</style>

<template>
    <nav class="bar bar-tab">
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
            <span class="tab-label">我的{{currentView}}</span>
        </a>
    </nav>
</template>

<script>
    export default {
        replace:true,
        props: ['isShow'],
        ready: function () {
            //console.log(this.isShow)
        }
    }
</script>