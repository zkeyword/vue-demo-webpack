<style lang="less">
    @import '../../../less/lib/mixins.less';
    .page-authStep1{
        .rem(padding, 0, 26);
        .stepTitle{
            text-align:center;
            .rem(font-size, 30);
        }
        .stepText{
            text-align:center;
            color:#b2b2b2;
            .rem(font-size, 20);
            .rem(margin, 16, 0, 0);
        }
        .progress{
            .rem(margin, 64, 0, 26);
        }
        .params{
            .item{
                background:#fff;
                border:1px solid #f6f6f6;
                vertical-align:middle;
                .border-radius(8);
                .rem(margin-bottom, 16);
                .rem(font-size, 24);
                .rem(border-width, 2); 
                .rem(padding, 26, 16);
            }
        }
        .ui-floatCenter{
            .rem(height, 32);
            .rem(margin-top, 18);
        }
        .ui-floatCenter-item{
            .rem(margin, 0, 5);
            
            &.link{
                position:relative;
                .rem(height, 32);
                .rem(width, 34);
                &:before{
                    content:' ';
                    display: inline-block;
                    position:absolute;
                    background:#b2b2b2;
                    .rem(top, 14);
                    .rem(height, 2); 
                    .rem(width, 32);
                }
            }
        }  
    }
</style>

<template>
    <div class="page-authStep1">
        <header-bar :title="title" :back="true"></header-bar>
        <div class="content showHeader">
            <div class="stepTitle">申请认证</div>
            <div class="ui-floatCenter">
                <div class="ui-sl-floatCenter">
                    <i class="ui-floatCenter-item icon icon-anquanbaozhang"></i>
                    <i class="ui-floatCenter-item icon link"></i>
                    <i class="ui-floatCenter-item icon icon-anquanbaozhang icon-anquanbaozhang2"></i>
                </div>
			</div>
            <div class="stepText">将在一个工作日内审核完成!</div>
            <div class="progress">
                <span class="item cur"><span>1</span>请填写基本信息</span>
                <span class="item"><span>2</span>上传证照</span>
                <span class="item"><span>3</span>服务设置</span>
            </div>
            <div class="params">
                <div class="item clearfix" @click="selectCity">
                    <span class="pull-left">您的城市</span>
                    <span class="pull-right">{{formData.city_name}}</span>
                </div>
                <div class="item clearfix" @click="selectSchool" v-if="formData.city_id">
                    <span class="pull-left">您的学校</span>
                    <span class="pull-right">{{formData.school_name}}</span>
                </div>
            </div>
        </div>
        <span 
            class="ui-btn ui-btn-big"
            v-if="formData.city_id && formData.school_id" 
            @click="goAuth"
        >
            下一步
        </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '认证',
            formData: {
                city_name: null,
                city_id: null,
                school_id: null,
                school_name: null
            }
        }
    },
    route: {
        data (transition){
            let self     = this,
                query    = transition.to.query;
            
            if( query.city_id ){
                $.extend(self.formData, query);
                //self.formData.city_id     = query.city_id ? query.city_id : self.formData.city_id;
                //self.formData.city_name   = query.city_name ? query.city_name : self.formData.city_name;
                //self.formData.school_id   = query.school_id ? query.school_id : self.formData.school_id;
                //self.formData.school_name = query.school_name ? query.school_name : self.formData.school_name;
            }else{
                $.showPreloader('正在努力提交...');
                $.ajax({
                    url: "/soytime/ca/caInfo",
                    type:'POST',
                    dataType: 'json',
                    success: (data)=>{
                        let result = data.result,
                            status = result.sutdent_auth;
                            
                        $.hidePreloader();
                        
                        // 0：未认证，1：已认证，2：认证中，3：认证失败
                        if( status == 1 ){
                            self.$route.router.go('/auth/success');
                                return;
                        }else if( status == 2 ){
                            self.$route.router.go('/auth/checking');
                                return;
                        }else if( status == 3 ){
                            $.alert('您的身份核对有误！请您重新填写认证信息。','认证失败');
                        }

                        $.extend(self.formData, result);
                    },
                    error: ()=>{
                        $.hidePreloader();
                        $.toast('网络不给力，请重新尝试！');
                    }
                });
            }
            
        }
    },
    components: {
        'headerBar': require('../../../components/header.vue')
    },
    methods: {
        goAuth(){
            let self = this;
            self.$route.router.go('/auth/step2?' + $.param( self.formData ) );
        },
        selectCity(){
            let self = this;
            self.$route.router.go('/auth/selectCity?' + $.param( self.formData ) );
        },
        selectSchool(){
            let self = this;
            self.$route.router.go('/auth/selectSchool?' + $.param( self.formData ) );
        }
    }
}
</script>








