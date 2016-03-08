<style lang="less">
    @import '../../../less/lib/mixins.less';
    .page-authStep1{
        .rem(padding, 0, 26);
        .stepTitle{
            text-align:center;
            .rem(font-size, 29);
        }
        .stepText{
            text-align:center;
            color:#b2b2b2;
            .rem(font-size, 17);
            .rem(margin, 16, 0, 0);
        }
        .progress{
            .rem(margin, 64, 0, 26);
        }
        .params{
            .item{
                background:#fff;
                border:1px solid #f6f6f6;
                .border-radius(8);
                .rem(margin-bottom, 16);
                .rem(font-size, 16);
                .rem(height, 68);
                .rem(line-height, 68);
                .rem(border-width, 2); 
                .rem(padding, 0, 16);
            }
        }
		
		.icon-anquanbaozhang-size{
			.rem(height, 52);
			.rem(width, 52);
			.rem(background-size, 416, 416)
		}
    }
</style>

<template>
    <div class="page-authStep1">
        <header class="bar bar-nav">
            <h1 class="title">认证</h1>
        </header>
        <div class="inside">
            <div class="stepTitle">申请认证</div>
            <div class="iconWrap">
				<i class="icon icon-anquanbaozhang icon-anquanbaozhang-size"></i>
				<i class="icon icon-anquanbaozhang2 icon-anquanbaozhang2-size"></i>
			</div>
            <div class="stepText">将在一个工作日内审核完成!</div>
            <div class="progress">
                <span class="item cur"><span>1</span>请填写基本信息</span>
                <span class="item"><span>2</span>上传证照</span>
                <span class="item"><span>3</span>服务设置</span>
            </div>
            <div class="params">
                <div class="item" @click="selectCity">
                    <span class="pull-left">您的城市</span>
                    <span class="pull-right">{{formData.city}}</span>
                </div>
                <div class="item" @click="selectSchool" v-if="formData.city_id">
                    <span class="pull-left">您的学校</span>
                    <span class="pull-right">{{formData.school}}</span>
                </div>
            </div>
        </div>
        <a 
            class="ui-btn ui-btn-big"
            v-if="formData.city_id && formData.school_id" 
            v-link="{ path: '/auth/step2?city_id='+ formData.city_id +'&school_id=' + formData.school_id }"
        >
            下一步
        </a>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                formData: {
                    city: null,
                    city_id: null,
                    school_id: null,
                    school: null
                }
            }
        },
        route: {
            data (transition){
                let query = transition.to.query;
                this.formData.city_id   = query.city_id ? query.city_id : null;
                this.formData.city      = query.city_name ? query.city_name : null;
                this.formData.school_id = query.school_id ? query.school_id : null;
                this.formData.school    = query.school_name ? query.school_name : null;
            }
        },
        methods: {
            selectCity(){
                this.$route.router.go({name:'selectCity'});
            },
            selectSchool(){
                this.$route.router.go({name:'selectSchool'});
                return;
                this.$route.router.go({
                    name:'selectSchool',
                    params: {
                        city_id: this.formData.city_id,
                        city_name: this.formData.city,
                    }
                });
            }
        }
    }
</script>








