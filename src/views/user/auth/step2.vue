<template>
    <header class="bar bar-nav">
        <h1 class="title">认证</h1>
    </header>
    <div class="inside auth-step2">
        <div class="stepTitle">申请认证</div>
        <div class="iconWrap"></div>
        <div class="stepText">将在一个工作日内审核完成!</div>
        <div class="progress">
            <span class="item"><span>1</span>请填写基本信息</span>
            <span class="item cur"><span>2</span>上传证照</span>
            <span class="item"><span>3</span>服务设置</span>
        </div>
    </div>
    <div class="params">
        <div class="item" @click="getPersionPic">
            <span class="fn-left">个人照片</span>
            <span class="fn-right" v-if="formData.auth_head">
                <img :src="auth_head_url" />
            </span>
        </div>
        <div class="item" @click="getStudentPic">
            <span class="fn-left">学生证</span>
            <span class="fn-right" v-if="formData.auth_student_card">
                <img :src="auth_student_card_url" />
            </span>
        </div>
    </div>
    <span 
        class="button button-big"
        v-if="formData.city_id && formData.school_id" 
        @click="goAuth"
    >
        下一步
    </span>
</template>

<script>
    export default {
        data() {
            return {
				auth_head_url: null,
				auth_student_card_url: null,
                formData: {
                    city_id: null,
                    school_id: null,
                    auth_head: null,
                    auth_student_card: null
                }
            }
        },
        route: {
            data (transition){
                let query = transition.to.query;
                this.formData.city_id   = query.city_id ? query.city_id : null;
                this.formData.school_id = query.school_id ? query.school_id : null;
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
                    self.formData.auth_head     = data.auth_head;
                    self.formData.auth_head_url = '/soytime/file/renzheng?guid=' + data.auth_head;
                })
            },
            getStudentPic(){
                let self = this;
                uploadimg(2, (data)=>{
                    self.formData.auth_student_card    = data.auth_student_card;
                    self.formData.auth_student_card_url = '/soytime/file/renzheng?guid=' + data.auth_student_card;
                })
            }
        }
    }
</script>
