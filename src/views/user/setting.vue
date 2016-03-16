<style lang="less">

</style>

<template>
    <div class="page-user page-user-setting">
        <header-bar :title="title" back="true"></header-bar>
        
        <div class="content showHeader showFooter">

            <div @click="showMoblie">
                手机
            </div>
            
            <pop-moblie v-if="isShowPopMoblie"></pop-moblie>
            
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '设置',
                isShowPopMoblie: false,
                formData: {}
            }
        },
        ready (){
            //setTimeout(() => {
            //   this.$route.router.go({ name: 'list'});
            //},2000);
        },
        methods:{
            showMoblie(){
                this.isShowPopMoblie = true;
            }
        },
        components: {
            'headerBar': require('../../components/header.vue'),
            'timeConf': require('../../components/timeConf.vue'),
            'popMoblie': require('../../components/popMoblie.vue')
        }
    }
</script>