<style lang="less">
@import '../less/lib/mixins.less';
.page-user-formWrap{
    text-align:left;
    position:relative;

    div{
        .rem(height, 80);
        .rem(line-height, 40) !important;
        .rem(padding, 20, 0) !important;
        .rem(font-size, 24);
    }

    .clearfix{

    }

    .mobileWrap{
        border-bottom:1px solid #dedede;
        .rem(border-bottom-width, 2);
    }


    input{
        display:inline-block;
        border:0 none;
        background:none;
        text-align: left !important;
        .rem(height, 40);
        .rem(line-height, 40);
		.rem(margin-left, 10);

        &#mobile{
            .rem(width, 300);
        }
        &#code{
            .rem(width, 150);
        }
    }

    label{
        display:inline-block;
        .rem(height, 40);
        .rem(line-height, 40);
        border-right:1px solid #dedede;
        .rem(border-right-width, 2);
        .rem(width, 110);
    }

    #getCode{
        background:#54c5ff;
        color:#fff;
        text-align:center;
        .rem(height, 40);
        .rem(line-height, 40);
        .rem(padding, 0, 20);
        .border-radius(8);

        &.disable{
            background:#b2b2b2
        }
    }
    .toastWrap{
        display:block;
        position: absolute;
        top:20%;
        top:20%;
        width:100%;
        .rem(padding, 30);
    }
    .toast{
        display:block;
        width:100%;
        text-align:center;
    }
}
</style>

<template>
    <confirm :show.sync="show" @on-confirm="confirm" title="">
        <div class="page-user-formWrap">
            <div class="mobileWrap clearfix">
                <label class="pull-left">手机</label>
                <input class="pull-left" type="text" id="mobile" placeholder="手机号" v-model="newMobile" />
            </div>
            <div class="codeWrap clearfix">
                <label class="pull-left">验证码</label>
                <input class="pull-left" type="text" id="code" placeholder="验证码" v-model="code"  />
                <span class="pull-right" id="getCode" :class="{'disable': codeTime}">
                    <span id="getCodeText" @click="getCode">{{codeText}}</span>
                    <span id="getCodeTime">{{codeTime}}</span>
                </span>
            </div>
        </div>
    </confirm>
	<toast :show.sync="isShowToast" :time="1000">{{toastText}}</toast>
</template>

<script>
    export default {
        replace:true,
        props: ['mobile', 'show'],
        data(){
            return {
                isDisable: true,
				isShowToast: false,
				toastText: '',
				isCodeDisable: false,
				newMobile:'',
				code: '',
				codeText: '获取验证码',
				codeTime: ''
            }
        },
        methods: {
            confirm(){
                let self = this;

				if( !/1[34578]{1}\d{9}$/.test(self.newMobile) || !self.code ){
                    self.isDisable   = true;
					self.isShowToast = true;
					self.toastText   = '请填写正确的信息！'
                    return;
                }else{
					self.isDisable = false;
				}
				
                if( self.isDisable ){
                    return;
                }

                $.ajax({
                    url: "/soytime/account/saveMobile",
                    type:'POST',
                    data: {
                        mobile: self.newMobile,
                        code: self.code
                    },
                    dataType: 'json',
                    success: (data)=>{
                        if( data.success ){
                            self.show        = false;
							self.isShowToast = true;
							self.toastText   = '保存成功！';
							self.isDisable   = false;
							self.mobile      = self.newMobile;
                        }else{
							self.isShowToast = true;
							self.toastText   = data.result;
							self.isDisable   = true;
                        }
                    },
                    error: ()=>{
						self.isShowToast = true;
						self.toastText   = '网络不给力，请重新尝试！';
                    }
                });
            },
			getCode(){
				let self = this;
				if( self.isCodeDisable ) return;
				if( !/1[34578]{1}\d{9}$/.test(self.newMobile) ){
					self.isShowToast = true;
					self.toastText   = '请填写正确的手机号！'
					return;
				}
				$.ajax({
					url: "/soytime/account/getMobileCode",
					type:'POST',
					data:{
						mobile: self.newMobile
					},
					dataType: 'json',
					success: (data)=>{
						self.isCodeDisable = true;
						if( data.success ){
							let i     = 60,
								timer = null;
							self.codeText = '重新获取';
							self.codeTime = '(60)';
							timer = setInterval(()=>{
								self.codeTime = '('+ (--i) +')';
								if( i === 0 ){
									clearInterval(timer);
									self.codeTime      = '';
									self.isCodeDisable = false;
								};
							}, 1000)
						}else{
							self.isShowToast = true;
							self.toastText   = data.result;
						}
					},
					error: ()=>{
						self.isShowToast = true;
						self.toastText   = '网络不给力，请重新尝试！';
					}
				});
			}
        },
        components: {
            'confirm': require('./confirm'),
			'toast': require('./toast'),
			'loading': require('./loading')
        }
    }
</script>
