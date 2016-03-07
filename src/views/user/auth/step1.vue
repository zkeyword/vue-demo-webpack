<template>
    <header class="bar bar-nav">
        <h1 class="title">认证</h1>
    </header>
    <div class="inside auth-step1">
    	<div class="stepTitle">申请认证</div>
        <div class="iconWrap"></div>
        <div class="stepText">将在一个工作日内审核完成!</div>
        <div class="progress">
            <span class="item cur"><span>1</span>请填写基本信息</span>
            <span class="item"><span>2</span>上传证照</span>
            <span class="item"><span>3</span>服务设置</span>
        </div>
        <div class="params">
            <div class="item" @click="selectCity">
                <span class="fn-left">您的城市</span>
                <span class="fn-right">{{formData.city}}</span>
            </div>
            <div class="item" @click="selectSchool" v-if="formData.city_id">
                <span class="fn-left">您的学校</span>
                <span class="fn-right">{{formData.school}}</span>
            </div>
        </div>
        
    </div>
    <a 
        class="button button-big"
        v-if="formData.city_id && formData.school_id" 
        v-link="{ path: '/auth/step2?city_id='+ formData.city_id +'&school_id=' + formData.school_id }"
    >
        下一步
    </a>
</template>

<script>
    export default {
        data() {
            return {
                formData: {
                    city: null,
                    city_id: null,
                    school_id: null,
                    school: null
                }
            }
        },
        route: {
            data (transition){
                let query = transition.to.query;
                this.formData.city_id   = query.city_id ? query.city_id : null;
                this.formData.city      = query.city_name ? query.city_name : null;
                this.formData.school_id = query.school_id ? query.school_id : null;
                this.formData.school    = query.school_name ? query.school_name : null;
            }
        },
        methods: {
            selectCity(){
                this.$route.router.go({name:'selectCity'});
            },
            selectSchool(){
                this.$route.router.go({name:'selectSchool'});
                return;
                this.$route.router.go({
                    name:'selectSchool',
                    params: {
                        city_id: this.formData.city_id,
                        city_name: this.formData.city,
                    }
                });
            }
        }
    }
</script>

<style lang="less">
    .auth-step1{}
    .progress .item{
        position: relative;
        display: table-cell;
        width: 1%;
        height: 2.5rem;
        color: #929292;
        text-align: center;
        vertical-align: middle;
        font-size: 0.5rem;
    }
</style>








