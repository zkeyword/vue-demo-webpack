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
			
			.switch{
				.rem(font-size, 50);
				&.ico-open{color:#ff946e;}
				&.ico-close3{color: #b2b2b2;}
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
                    <div class="pull-left">生日</div>
                    <div class="pull-right">
                        <input type="text" id="datetime-picker" v-model="formData.birthday" mobiscroll-datetime="settings" />
                    </div>
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
                    <span
                        class="pull-right switch ico"
                        :class="{'ico-open': formData.open == 1, 'ico-close3': formData.open == 0}"
                        @click="switch"
					></span>
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
	<toast :show.sync="isShowToast" :time="1000">{{toastText}}</toast>
	<loading :show="isShowloading" :text="loadingText"></loading>
</template>

<script>
    export default {
        data() {
            return {
                title: '设置',
				isShowToast: false,
				toastText: '提交失败,请重试！',
				isShowloading: false,
				loadingText: '提交中,请稍后!',
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
                    self.$store.state.getScrollerTime('#datetime-picker', 0);
                })
            });
        },
        methods:{
            save(){
                let self = this;
                self.isShowloading = true;
                $.ajax({
                    url: "/soytime/account/saveSetInfo",
                    type:'POST',
                    dataType: 'json',
                    data: self.formData,
                    success: (data)=>{
                        if( data.success ){
                            self.isShowloading = false;
                            self.$route.router.go('/user');
                        }
                    },
					error: ((data)=>{
						self.isShowToast = true;
						self.isShowloading = false;
					})
                });
            },
			switch(){
				let self = this;
				if( self.formData.open == 1 ){
					self.formData.open = 0;
				}else{
					self.formData.open = 1;
				}
			}
        },
        components: {
            'headerBar': require('../../components/header.vue'),
            'timeConf': require('../../components/timeConf.vue'),
            'bindMobile': require('../../components/bindMobile.vue'),
			'toast': require('../../components/toast'),
			'loading': require('../../components/loading')
        }
    }
</script>