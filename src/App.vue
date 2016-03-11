<style lang="less">
    @import 'less/style.less';
</style>

<template>
    <div class="page page-current">
        <router-view keep-alive></router-view>
        <nv-footer isShow="true"></nv-footer>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            authenticating: false,
            isIndex:true
        }
    },
    components:{
        'nvFooter': require('./components/footer.vue')
    }
}
</script>
