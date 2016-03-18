<style lang="less">
@import '../../less/lib/mixins.less';
.page-user-setting{
    
}
.page-user-formWrap{
    text-align:left;
    position:relative;
    
    div{
        .rem(height, 80);
        .rem(line-height, 40);
        .rem(padding, 20, 0);
        .rem(font-size, 24);
    }
    
    .moblieWrap{
        border-bottom:1px solid #dedede;
        .rem(border-bottom-width, 2);
    }
    
    input{
        display:inline-block;
        border:0 none;
        background:none;
        .rem(height, 40);
        .rem(line-height, 40);
        
        &#moblie{
            .rem(width, 300);
        }
        &#code{
            .rem(width, 150);
        }
    }
    
    label{
        display:inline-block;
        height:100%;
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
    <div class="page-user page-user-setting">
        <header-bar :title="title" back="true"></header-bar>
        
        <div class="content showHeader showFooter">

            <div @click="showMoblie">
                手机
            </div>
            
            {{formData.moblie}}
            
        </div>
    </div>
    <script type="text/html" id="toastWrap">
        <span class="toastWrap">
            <span id="toast" class="toast">
                [[content]]
            </span>
        </span>
    </script>
	<script type="text/html" id="moblieWrap">
        <div class="page-user-formWrap">
            <div class="moblieWrap clearfix">
                <label class="pull-left">手机</label>
                <input class="pull-left" type="text" id="moblie" placeholder="手机号" />
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
        data() {
            return {
                title: '设置',
                isShowPopMoblie: false,
                formData: {}
            }
        },
		route: {
			data (transition){
				
			}
		},
        ready (){
            //setTimeout(() => {
            //   this.$route.router.go({ name: 'list'});
            //},2000);
        },
        methods:{
            showMoblie(){
                let self      = this,
                    reg       = /\[\[content\]\]/g,
                    toastHtml = $('#toastWrap').html(),
                    toast     = (content)=>{
                                    let formWrap = $('.page-user-formWrap'),
                                        html     = toastHtml.replace(reg, content),
                                        toastObj = $('#toast');
                                    if( !toastObj.length ){
                                        formWrap.append( html );
                                    }else{
                                        toastObj.html(content);
                                    }
                                    setTimeout(()=>{
                                       formWrap.find('.toastWrap').remove();
                                    },2000)
                                }

                $.modal({
					text : $('#moblieWrap').html(),
					buttons : [
						{
							text : '取消',
							onClick : function () {
								$.alert('You clicked second button!')
							}
						},{
							text : '确定',
							close: false,
							onClick : function () {
                                let moblie = $('#moblie').val(),
                                    code   = $('#code').val(),
                                    obj    = {
                                        moblie: moblie,
                                        code: code
                                    };
                                    
                                if( !/1[34578]{1}\d{9}$/.test(moblie) || !code ){
                                    toast('请填写正确的信息！');
                                    return;
                                }
                                
                                $.ajax({
                                    url: "/soytime/account/saveMobile",
                                    type:'GET',
                                    data: obj,
                                    dataType: 'json',
                                    success: (data)=>{
                                        if( data.success ){
                                            $.extend(self.formData, obj);
                                            $.closeModal()
                                        }else{
                                            toast(data.result);
                                        }
                                    },
                                    error: ()=>{
                                        toast('网络不给力，请重新尝试！');
                                    }
                                });
							}
						}
					]
				});

                $('body').on('click', '#getCode', function(){
                    let moblie      = $('#moblie').val(),
                        getCodeBtn  = $('#getCode'),
                        getCodeText = $('#getCodeText'),
                        getCodeTime = $('#getCodeTime'),
                        that        = $(this);
                        
                    if( that.hasClass('disable') ){
                        return;
                    }
                        
                    if( !/1[34578]{1}\d{9}$/.test(moblie) ){
                        toast('请填写正确的手机号');
                        return;
                    }
                    
                    $.ajax({
                        url: "/soytime/message/getMobileCode",
                        type:'GET',
                        data:{
                            moblie: moblie  
                        },
                        dataType: 'json',
                        success: (data)=>{
                            if( data.success ){
                                let i     = 60,
                                    timer = null;
                                    
                                getCodeText.html('重新获取');
                                getCodeTime.html('(60)');
                                that.addClass('disable');
                                timer = setInterval(()=>{
                                    getCodeTime.html('('+ (--i) +')');
                                    console.log(i)
                                    if( i === 0 ){
                                        clearInterval(timer);
                                        that.removeClass('disable');
                                        getCodeTime.html('');
										getCodeText.html('获取验证码');
                                    };
                                }, 1000)
                            }else{
                                toast(data.result);
                            }
                        },
                        error: ()=>{
                            $.showPreloader('网络不给力，请重新尝试！');
                        }
                    });
                });
            }
        },
        components: {
            'headerBar': require('../../components/header.vue'),
            'timeConf': require('../../components/timeConf.vue')
        }
    }
</script>