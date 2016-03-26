<style lang="less">
    @import '../../../less/lib/mixins.less';
    .page-authStep3{
        .itemTitle{
            border-bottom:1px solid #b2b2b2;
            .rem(border-bottom-width, 2);
            .rem(padding, 0, 0, 26);
            .rem(margin-bottom, 10);
        }
    }
</style>

<template>
    <div class="page-authStep1 page-authStep3">
        <header-bar :title="title" :back="true"></header-bar>
        <div class="content showHeader" :class="{showFooter: (formData.sceneIds && formData.timeConf && formData.longitude)}">
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
                <span class="item"><span>2</span>上传证照</span>
                <span class="item cur"><span>3</span>服务设置</span>
            </div>
            <div class="params">
                <div class="item">
                    <div class="itemTitle">请选择工作类别(可多选)</div>
                    <scene-type 
                        :scene-list="indexData.sceneList"
                        :scene-ids.sync="formData.sceneIds"
                    ></scene-type>
                </div>
                <div class="item clearfix" @click="getMap">
                    <span class="pull-left">
                        工作区域(选择)
                    </span>
                    <span class="pull-right">{{formData.workplace}}</span>
                </div>
                <div class="item">
                    <div class="itemTitle">工作时间(可多选 ）</div>
                    <time-conf :timer.sync="formData.timeConf"></time-conf>
                </div>
            </div>
        </div>
        <span 
            class="ui-btn ui-btn-big"
            v-if="(formData.sceneIds && formData.timeConf && formData.longitude)"
            @click="submit"
        >
            下一步
        </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            indexData: indexData,
            title: '认证',
            formData: {
                sceneIds: null,
                timeConf: null,
                longitude: null,
                workplace: null
            }
        }
    },
    route: {
        data (transition){
            let self     = this,
                query    = transition.to.query;
                
            $.extend(self.formData, query);
        }
    },
    components: {
        'timeConf': require('../../../components/timeConf.vue'),
        'sceneType': require('../../../components/sceneType.vue'),
        'headerBar': require('../../../components/header.vue')
    },
    methods: {
        getMap(){
            let self = this;
            self.$route.router.go('/auth/selectMap?' + $.param( self.formData ) );
        },
        submit(){
            let self = this;
            $.showPreloader('正在努力提交...')
            $.ajax({
                url: "/soytime/ca/save",
                type:'POST',
                dataType: 'json',
                data: self.formData,
                success: (data)=>{
                    if( data.success ){
                        $.hidePreloader();
                        self.$route.router.go('/auth/checking');
                    }
                },
                error: ()=>{
                    $.hidePreloader();
                    $.toast('网络不给力，请尝试重新提交！');
                }
            });
        }
    }
}
</script>
