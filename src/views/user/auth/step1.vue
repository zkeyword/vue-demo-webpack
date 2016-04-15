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
        .moblieWrap{
	        border-bottom:1px solid #dedede;
	        .rem(border-bottom-width, 2);
	    }
	    
	    input{
	        display:inline-block;
	        border:0 none;
	        background:none;
	        -webkit-appearance: none;
	        .rem(height, 40);
	        .rem(line-height, 40);
	        
	        &#moblie{
	            .rem(width, 300);
	        }
	        &#code{
	            .rem(width, 150);
	        }
	    }
	    input::-webkit-outer-spin-button,
		input::-webkit-inner-spin-button{
		    -webkit-appearance: none !important;
		    margin: 0; 
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
	        .rem(padding, 10);
	    }
	    .toast{
	        display:block;
	        width:100%;
	        text-align:center;
	        font-size: 10px;;
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
                <div class="item clearfix" @click="showMobile">
                    <span class="pull-left">手机号</span>
                    <span class="pull-right">{{formData.mobile}}</span>
                </div>
            </div>
        </div>
        <span 
            class="ui-btn ui-btn-big"
            v-if="formData.city_id && formData.school_id && formData.mobile" 
            @click="goAuth"
        >
            下一步
        </span>
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
                <input class="pull-left" type="number" id="mobile" pattern="[0-9]*" mobile placeholder="手机号" />
            </div>
            <div class="codeWrap clearfix">
                <label class="pull-left">验证码</label>
                <input class="pull-left" type="number" id="code" pattern="[0-9]*" mobile placeholder="验证码"  />
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
            title: '认证',
            formData: {
                city_name: null,
                city_id: null,
                school_id: null,
                school_name: null,
                mobile:null
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
                //$.showPreloader('数据加载中...');
                $.ajax({
                    url: "/soytime/ca/caInfo",
                    type:'POST',
                    dataType: 'json',
                    success: (data)=>{
                        let result = data.result,
                            status = result.sutdent_auth;
                            
                        //$.hidePreloader();
                        
                        // 0：未认证，1：已认证，2：认证中，3：认证失败
                        if( status == 1 ){
                            self.$route.router.go('/auth/success');
                                return;
                        }else if( status == 2 ){
                            self.$route.router.go('/auth/checking');
                                return;
                        }else if( status == 3 ){
                            $.alert(result.explain,'认证失败');
                        }

                        $.extend(self.formData, result);
                    },
                    error: ()=>{
                        //$.hidePreloader();
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
        },
        showMobile(){
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
								//$.alert('You clicked second button!')
							}
						},{
							text : '确定',
							close: false,
							onClick : function () {
								let that        = $(this);
								if( that.hasClass('disable') ){
			                        return;
			                    }
								
                                let mobile = $('#mobile').val(),
                                    code   = $('#code').val(),
                                    obj    = {
                                        mobile: mobile,
                                        code: code
                                    };
                                if( !/1[34578]{1}\d{9}$/.test(mobile) || !code ){
                                	that.removeClass('disable');
                                    toast('请填写正确的信息！');
                                    return;
                                }else{
                                	that.addClass('disable');
                                }
                                
                                $.ajax({
                                    url: "/soytime/account/saveMobile",
                                    type:'POST',
                                    data: obj,
                                    dataType: 'json',
                                    success: (data)=>{
                                        if( data.success ){
                                        	self.formData.mobile = mobile;
                                            //$.extend(self.formData, obj);
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
                    let mobile      = $('#mobile').val(),
                        getCodeBtn  = $('#getCode'),
                        getCodeText = $('#getCodeText'),
                        getCodeTime = $('#getCodeTime'),
                        that        = $(this);
                        
                    if( that.hasClass('disable') ){
                        return;
                    }
                        
                    if( !/1[34578]{1}\d{9}$/.test(mobile) ){
                        toast('请填写正确的手机号');
                        that.removeClass('disable');
                        return;
                    } else {
                    	that.addClass('disable');
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
                                    console.log(i)
                                    if( i === 0 ){
                                        clearInterval(timer);
                                        that.removeClass('disable');
                                        getCodeTime.html('');
                                    };
                                }, 1000)
                            }else{
                            	that.removeClass('disable');
                                toast(data.result);
                            }
                        },
                        error: ()=>{
                            $.showPreloader('网络不给力，请重新尝试！');
                        }
                    });
                });
            }
    }
}

</script>
	





