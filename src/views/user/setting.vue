<style lang="less">
@import '../../less/lib/mixins.less';
.page-user-setting{
    .block{
        background:#fff;
        
        .rem(padding, 26, 16);
        .rem(margin-bottom, 20);
        
        .clearfix{
            border-bottom:2px solid #dedede;
            .rem(border-bottom-width, 2);
            .rem(padding, 20, 0);
            .rem(font-size, 30);
            .rem(line-height, 40);            
            
            &:first-child{
                .rem(padding-top, 0);
            }
            
            &:last-child{
                border-bottom:0 none;
                .rem(padding-bottom, 0);
            }
            
            input{
                border:0 none;
                text-align:right;
            }
        }
    }
    
    .photoName{
        .rem(height, 120);
        .rem(line-height, 120); 
    }
    
    .photoWrap{
        .rem(width, 120);
        .rem(height, 120);
        .border-radius(120);
        img{
            width:100%;
            height:100%;
            .border-radius(120);
        }
    }
}
</style>

<template>
    <div class="page-user page-user-setting" transition="page">
    
        <header-bar :title="title" back="true"></header-bar>
        
        <div class="content showHeader showFooter">
            
            <div class="block">
                <div class="clearfix">
                    <div class="pull-left photoName">头像</div>
                    <div class="pull-right photoWrap">
                        <img :src="formData.head_img_url">
                    </div>
                </div>
                <div class="clearfix">
                    <div class="pull-left">姓名 </div>
                    <div class="pull-right">
                        <input type="text" v-model="formData.nickname" />
                    </div>
                </div>
                <div class="clearfix">
                    <div class="pull-left">性别</div>
                    <div class="pull-right">{{formData.sex}}</div>
                </div>
                <div class="clearfix">
                    <bind-birthday :birthday.sync="formData.birthday"></bind-birthday>
                </div>
                <div class="clearfix">
                    <div class="pull-left">身高 </div>
                    <div class="pull-right">
                        <input type="text" v-model="formData.height" />
                    </div>
                </div>
            </div>
            
            <div class="block">
                <bind-mobile :mobile.sync="formData.mobile"></bind-mobile>
                <div class="clearfix">
                    <div class="pull-left">邮箱</div>
                    <div class="pull-right">
                        <input type="text" v-model="formData.email" />
                    </div>
                </div>
                <div class="clearfix">
                    <div class="pull-left">QQ</div>
                    <div class="pull-right">
                        <input type="text" v-model="formData.qq" />
                    </div>
                </div>
            </div>
            
            <div class="block">
                <div class="clearfix">
                    <div class="pull-left">订单接送提醒</div>
                    <div class="pull-right">
                        <label class="label-switch">
                            <input type="checkbox" v-model="formData.open" >
                            <div class="checkbox"></div>
                        </label>
                    </div>
                </div>
                <time-conf :timer.sync="formData.timeConf"></time-conf>
            </div>
            
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
                type:'POST',
                dataType: 'json',
                success: ((data)=>{
                    self.formData = data.result;
                })
            });
        },
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
            'bindMobile': require('../../components/bindMobile.vue'),
            'bindBirthday': require('../../components/bindBirthday.vue')
        }
    }
</script>