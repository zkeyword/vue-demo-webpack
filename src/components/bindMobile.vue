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
        .rem(width, 120);
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
    <div class="item clearfix" @click="showMobile">
        <span class="pull-left">手机号</span>
        <span class="pull-right">{{mobile}}</span>
    </div>
    <confirm :show.sync="isShowConfirm" @on-confirm="confirm">
        <div class="page-user-formWrap">
            <div class="mobileWrap clearfix">
                <label class="pull-left">手机</label>
                <input class="pull-left" type="text" id="mobile" placeholder="手机号" v-model="mobile" />
            </div>
            <div class="codeWrap clearfix">
                <label class="pull-left">验证码</label>
                <input class="pull-left" type="text" id="code" placeholder="验证码"  />
                <span class="pull-right" id="getCode">
                    <span id="getCodeText">获取验证码</span>
                    <span id="getCodeTime"></span>
                </span>
            </div>
        </div>
    </confirm>
    <script type="text/html" id="toastWrap">
        <span class="toastWrap">
            <span id="toast" class="toast">
                [[content]]
            </span>
        </span>
    </script>
	<script type="text/html" id="mobileWrap">
        <div class="page-user-formWrap">
            <div class="mobileWrap clearfix">
                <label class="pull-left">手机</label>
                <input class="pull-left" type="text" id="mobile" placeholder="手机号" v-model="mobile" />
            </div>
            <div class="codeWrap clearfix">
                <label class="pull-left">验证码</label>
                <input class="pull-left" type="text" id="code" placeholder="验证码"  />
                <span class="pull-right" id="getCode">
                    <span id="getCodeText">获取验证码</span>
                    <span id="getCodeTime"></span>
                </span>
            </div>
        </div>
	</script>
</template>

<script>
    export default {
        replace:true,
        props: ['mobile'],
        data(){
            return {
                isShowConfirm: false,
                isDisable: false
            }
        },
        methods: {
            confirm(){
                let self = this;

                if( self.isDisable ){
                    return;
                }

                let mobile = $('#mobile').val(),
                    code   = $('#code').val(),
                    obj    = {
                        mobile: mobile,
                        code: code
                    };

                if( !/1[34578]{1}\d{9}$/.test(mobile) || !code ){
                    self.isDisable = false;
                    self.toast('请填写正确的信息！');
                    return;
                }else{
                    self.isDisable = true;
                }

                $.ajax({
                    url: "/soytime/account/saveMobile",
                    type:'POST',
                    data: obj,
                    dataType: 'json',
                    success: (data)=>{
                        if( data.success ){
                            self.mobile = mobile;
                            self.isShowConfirm = true;
                        }else{
                            self.toast(data.result);
                        }
                    },
                    error: ()=>{
                        self.toast('网络不给力，请重新尝试！');
                    }
                });
            },
            toast(content){
                let reg       = /\[\[content\]\]/g,
                    toastHtml = $('#toastWrap').html(),
                    formWrap  = $('.page-user-formWrap'),
                    html      = toastHtml.replace(reg, content),
                    toastObj  = $('#toast');

                if( !toastObj.length ){
                    formWrap.append( html );
                }else{
                    toastObj.html(content);
                }
                setTimeout(()=>{
                    formWrap.find('.toastWrap').remove();
                },2000)
            },
			showMobile(){
                let self = this;

                self.isShowConfirm = true;

                $('body').on('click', '#getCode', function(){
                    let mobile      = $('#mobile').val(),
                        getCodeBtn  = $('#getCode'),
                        getCodeText = $('#getCodeText'),
                        getCodeTime = $('#getCodeTime'),
                        that        = $(this);
                        
                    if( that.hasClass('disable') ){
                        return;
                    }
                        
                    if( !/1[34578]{1}\d{9}$/.test(mobile) ){
                        that.addClass('disable')
                        self.toast('请填写正确的手机号');
                        self.isDisable = true;
                        return;
                    } else {
                        that.removeClass('disable')
                        self.isDisable = false;
                    }
                    
                    $.ajax({
                        url: "/soytime/account/getMobileCode",
                        type:'POST',
                        data:{
                            mobile: mobile  
                        },
                        dataType: 'json',
                        success: (data)=>{
                            if( data.success ){
                                let i     = 60,
                                    timer = null;
                                getCodeText.html('重新获取');
                                getCodeTime.html('(60)');
                                timer = setInterval(()=>{
                                    getCodeTime.html('('+ (--i) +')');
                                    if( i === 0 ){
                                        clearInterval(timer);
                                        self.isDisable = false;
                                        that.removeClass('disable');
                                        getCodeTime.html('');
                                    };
                                }, 1000)
                            }else{
                                self.isDisable = true;
                                that.addClass('disable');
                                self.toast(data.result);
                            }
                        },
                        error: ()=>{
                            self.toast('网络不给力，请重新尝试！');
                        }
                    });
                });
            }
        },
        components: {
            'confirm': require('./confirm')
        }
    }
</script>