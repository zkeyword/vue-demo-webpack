<style lang="less">
    @import 'less/style.less';
</style>

<template>
    <div class="page page-current">
        <router-view keep-alive></router-view>
        <vn-footer v-if="isShowTab"></vn-footer>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            isShowTab: true
        }
    },
    components:{
        'vnFooter': require('./components/footer.vue'),
        'vnHeader': require('./components/header.vue')
    }
}
</script>
