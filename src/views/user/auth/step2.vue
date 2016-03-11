<style lang="less">
@import '../../../less/lib/mixins.less';
.page-authStep2{
    .item{
        .pull-left{
            .rem(height, 142);
            .rem(line-height, 142);
        }
    }
    .icon-anonymous2{
        background:url(../../../img/anonymous2.svg) no-repeat;
        .rem(background-size, 82, 82);
        .rem(height, 82);
        .rem(width, 82);
        
    }
    .addPhoto{
        border:1px dotted #68ccff;
        .rem(padding, 28);
        .rem(border-width, 2);
    }
    img{
        display:inline-block;
        .rem(width, 142);
        .rem(height, 142);
    }
}
</style>

<template>
    <div class="page-authStep1 page-authStep2">
        <header class="bar bar-nav">
            <h1 class="title">认证</h1>
        </header>
        <div class="inside">
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
                <span class="item"><span>1</span>请填写基本信息</span>
                <span class="item cur"><span>2</span>上传证照</span>
                <span class="item"><span>3</span>服务设置</span>
            </div>
            <div class="params">
                <div class="item clearfix" @click="getPersionPic">
                    <span class="pull-left">个人照片</span>
                    <span class="pull-right" v-if="tmpUrlData.auth_head_url">
                        <img :src="tmpUrlData.auth_head_url" />
                    </span>
                    <span class="pull-right addPhoto" v-else="!tmpUrlData.auth_head_url">
                        <i class="icon icon-anonymous2"></i>
                    </span>
                </div>
                <div class="item clearfix" @click="getStudentPic">
                    <span class="pull-left">学生证</span>
                    <span class="pull-right" v-if="tmpUrlData.auth_student_card_url">
                        <img :src="tmpUrlData.auth_student_card_url" />
                    </span>
                    <span class="pull-right addPhoto" v-else="!tmpUrlData.auth_student_card_url">
                        <i class="icon icon-anonymous2"></i>
                    </span>
                </div>
            </div>
        </div>
        <span 
            class="ui-btn ui-btn-big"
            v-if="tmpUrlData.auth_head_url && tmpUrlData.auth_student_card_url" 
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
                formData: {},
                tmpUrlData:{}
            }
        },
        route: {
            data (transition){
                let self    = this,
                    query   = transition.to.query;
                    
                self.tmpUrlData = {
                    auth_head_url: (query.auth_head_url ? ('/soytime/file/renzheng/' + query.auth_head_url) : null),
                    auth_student_card_url: (query.auth_student_card_url ? ('/soytime/file/renzheng/' + query.auth_student_card_url) : null)
                };
                
                $.extend(self.formData, query);  
            }
        },
        methods: {
			goAuth(){
				let self = this;
				self.$route.router.go('/auth/step3?' + $.param( self.formData ) );
			},
            getPersionPic(){
                let self = this;
                uploadimg(1, (data)=>{
                    self.formData.auth_head_url   = data;
                    self.tmpUrlData.auth_head_url = '/soytime/file/renzheng/' + data;
                })
            },
            getStudentPic(){
                let self = this;
                uploadimg(2, (data)=>{
                    self.formData.auth_student_card_url   = data;
                    self.tmpUrlData.auth_student_card_url = '/soytime/file/renzheng/' + data;
                })
            }
        }
    }
</script>
