<style lang="less">
@import '../../less/lib/mixins.less';
.page-scene-detail{
    .userHeader{
        .rem(max-height, 350);
        overflow:hidden;
        position:relative;
        
        img{
            width:100%;
        }
        
        .userWrap{
            position:absolute;
            left:0;
            width:100%;
            .rem(top, 70);
                        
            .name{
                text-align:center;
                .rem(font-size, 60);
                color:#fff;
            }
        }
    }
}
    
</style>

<template>
    <div class="page-scene-detail page-current">
        <header-bar :title="title" :back="true"></header-bar>
        <div class="content showHeader showFooter">
            <div class="userHeader">
                <img src="/dist/defaultImg/serverDefault.jpg" v-if="!formData.photo_url" />
                <img :src="formData.photo_url" v-else />
                <div class="userWrap">
                    <div class="name">{{formData.usernick}}</div>
                </div>
                5人已收藏
                {{formData.school_name}}
                厦门
            </div>
            <header>
                我的服务：
                <span v-for="item in sceneList" v-if="item | sceneCur sceneArr">{{item.scene_name}}</span>
            </header>
            介绍服务
            {{formData.detail}}
            工作时间
            <time-conf :timer="formData.timeConf"></time-conf>
            客户评价
            {{formData.orderAppraise.content}}
            {{formData.orderAppraise.username}}
            {{formData.orderAppraise.create_time}}
            查看{{formData.orderAppraise.appraise_count}}条评价
        </div>
        <span 
                class="ui-btn ui-btn-big"
            >
            约TA
        </span>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title: null,
            formData: {},
            sceneArr: [],
            sceneList: indexData.sceneList
        }
    },
    route:{
        data (transition){
            let self  = this,
                query = transition.to.query;
                
            self.title = query.scene_name;
            
            $.ajax({
                url: '/soytime/scene/stuInfo',
                type: 'POST',
                dataType: 'json',
                success: ((data)=>{
                    self.formData = data.result;
                    self.title    = data.result.usernick;
                    self.sceneArr = data.result.sceneIds.split('-');
                })
            });
            
            
        }  
    },
    ready: function () {
        
    },
    components: {
        'headerBar': require('../../components/header.vue'),
        'timeConf': require('../../components/timeConf.vue')
    }
}
</script>
