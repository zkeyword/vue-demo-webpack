<style lang="less">
    @import './less/style.less';
</style>

<template>

    <!--<router-view keep-alive></router-view>-->
	<router-view></router-view>
    <vn-footer v-if="isShowTab"></vn-footer>

</template>

<script>
export default {
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
