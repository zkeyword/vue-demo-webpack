<style lang="less">
@import '../../less/lib/mixins.less';
.page-user-setting{
    
}
</style>

<template>
    <div class="page-user page-user-setting" transition="page">
        <header-bar :title="title" back="true"></header-bar>
        <div class="content showHeader showFooter">
            
            <div class="clearfix">
                <div class="pull-left">头像</div>
                <div class="pull-left photoWrap">
                    <img :src="formData.head_img_url">
                </div>
            </div>
            

            <div class="list-block">
                <ul>
                    <li class="item-content item-link">
                        <div class="item-inner">
                            <div class="item-title">姓名 {{formData.nickname}}</div>
                        </div>
                    </li>
                    <li class="item-content item-link">
                        <div class="item-inner">
                            <div class="item-title">性别 {{formData.sex}}</div>
                        </div>
                    </li>
                    <li class="item-content item-link">
                        <div class="item-inner">
                            <div class="item-title">身高 {{formData.height}}</div>
                        </div>
                    </li>
                    <li class="item-content item-link">
                        <div class="item-inner">
                            <div class="item-title">出生日期 {{formData.birthday}}</div>
                        </div>
                    </li>
                    <li class="item-content item-link">
                        <div class="item-inner">
                            <div class="item-title">邮箱 {{formData.email}}</div>
                        </div>
                    </li>
                    <li class="item-content item-link">
                        <div class="item-inner">
                            <div class="item-title">qq {{formData.qq}}</div>
                        </div>
                    </li>
                </ul>
            </div>
            
            
            <div class="params">
                <bind-mobile :mobile.sync="formData.mobile"></bind-mobile>
            </div>
            
            
            订单接送提醒 {{formData.open}}
            <li>
                <div class="item-content">
                <div class="item-media"><i class="icon icon-form-toggle"></i></div>
                <div class="item-inner">
                    <div class="item-title label">开关</div>
                    <div class="item-input">
                    <label class="label-switch">
                        <input type="checkbox">
                        <div class="checkbox"></div>
                    </label>
                    </div>
                </div>
                </div>
            </li>
            <time-conf :timer.sync="formData.timeConf"></time-conf>
        </div>
        <span 
            class="ui-btn ui-btn-big"
            @click="save"
        >
            保存
        </span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '设置',
                tmpData: {},
                formData: {}
            }
        },
        ready(){
            let self = this;
            
            $.ajax({
                url: "/soytime/account/getSettingInfo",
                type:'GET',
                dataType: 'json',
                success: ((data)=>{
                    self.formData = data.result;
                })
            });
        },
        // watch: {
        //     'formData': {
        //         handler: function (val, oldVal) { 
        //              let self = this;
        //             self.formData = self.tmpData;
        //             console.log(self.formData.timeConf)
        //         },
        //         deep: true
        //     }
        // },
        methods:{
            save(){
                let self = this;
                $.showPreloader('正在努力提交...')
                $.ajax({
                    url: "/soytime/account/saveSetInfo",
                    type:'POST',
                    dataType: 'json',
                    data: self.formData,
                    success: (data)=>{
                        if( data.success ){
                            $.hidePreloader();
                            self.$route.router.go('/user');
                        }
                    },
                    error: ()=>{
                        $.hidePreloader();
                        $.toast('网络不给力，请尝试重新提交！');
                    }
                });
            }
        },
        components: {
            'headerBar': require('../../components/header.vue'),
            'timeConf': require('../../components/timeConf.vue'),
            'bindMobile': require('../../components/bindMobile.vue')
        }
    }
</script>