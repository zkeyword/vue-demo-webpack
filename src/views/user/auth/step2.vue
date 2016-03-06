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
            <span class="fn-right" v-if="formData.authHead">
                <img :src="formData.authHeadUrl" />
            </span>
        </div>
        <div class="item" @click="getStudentPic">
            <span class="fn-left">学生证</span>
            <span class="fn-right" v-if="formData.authStudentCard">
                <img :src="formData.authStudentCardUrl" />
            </span>
        </div>
    </div>
    <a 
        class="button button-big"
        v-if="formData.city_id && formData.school_id" 
        v-link="{ path: '/auth/step3?city_id='+ formData.city_id +'&school_id=' + formData.school_id }"
    >
        下一步
    </a>
    <a href="#" class="button button-big" v-if="formData.serverId && formData.picType">下一步</a>
</template>

<script>
    export default {
        data() {
            return {
                formData: {
                    city_id: null,
                    school_id: null,
                    authHead: null,
                    authHeadUrl: null,
                    authStudentCard: null,
                    authStudentCardUrl: null,
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
            getPersionPic(){
                let self = this;
                uploadimg('auth_head_url', (data)=>{
                    self.formData.authHead     = data.authHead;
                    self.formData.authHeadUrl = '/soytime/file/renzheng?guid=' + data.authHead;
                })
            },
            getStudentPic(){
                let self = this;
                uploadimg('auth_student_card_url', (data)=>{
                    self.formData.authStudentCard    = data.authStudentCard;
                    self.formData.authStudentCardUrl = '/soytime/file/renzheng?guid=' + data.authStudentCard;
                })
            }
        }
    }
</script>
