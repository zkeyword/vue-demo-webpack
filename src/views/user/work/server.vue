<style lang="less">
    @import '../../../less/lib/mixins.less';
    .page-user-work-server{
        .content{
            padding-left:0;
            padding-right:0;
        }
        
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
                    
                    .btn{
                        .rem(width, 150);
                        .rem(height, 150);
                        margin:0 auto;
                        position:relative;
                        
                        .radius{
                            width:100%;
                            height:100%;
                            background:#fff;
                            position:absolute;
                            .border-radius(150);
                            .opacity(0.5);
                        }
                        
                        .icon{
                            text-align:center;
                            position:absolute;
                            .rem(font-size, 100);
                            .rem(line-height,150);
                            .rem(width, 150);
                            .rem(height, 150);
                        }
                    }
                    
                    .name{
                        text-align:center;
                        .rem(font-size, 60);
                        color:#fff;
                    }
                }
            }
            
            .block{
                background:#fff;
                .rem(padding, 26, 16);
                .rem(margin, 0, 26, 20);
                
                .header{
                    .rem(font-size, 30);
                }
                
                textarea{
                    width:100%;
                    border:0 none;
                    .rem(font-size, 30);
                }
            }
    }
</style>

<template>
    <div class="page-user-work-server">
        <header-bar :title="title" back="true"></header-bar>
        
        <div class="content showHeaderNopading showFooter">

            <div class="userHeader">
                <img src="/dist/defaultImg/serverDefault.jpg" v-if="!formData.photo_url" />
                <img :src="formData.photo_url" v-else />
                <div class="userWrap">
                    <div class="btn">
                        <div class="radius"></div>
                        <div class="icon">+</div>
                        <div class="text">添加照片</div>
                    </div>
                    <div class="name">{{formData.usernick}}</div>
                </div>
            </div>
        
            <div class="block">
                <div class="header">请选择工作类别(可多选)</div>
                <scene-type 
                    :scene-list="indexData.sceneList"
                    :scene-ids.sync="formData.sceneIds"
                ></scene-type>
            </div>
            
            <div class="block">
                <div class="header">个人描述</div>
                <textarea placeholder="请填写您的服务描述！">{{formData.detail}}</textarea>
            </div>
            
            <div class="block">
                <div class="header">上传照片</div>
                <ul class="clearfix">
                    <li class="skillImgs" v-for="item in skillImgs">
                        <img :src="item.img_url" />
                    </li>
                    <li v-if="skillImgs.length >= 3">
                        增加照片
                    </li>
                </ul>
            </div>
            
            <div class="block">
                <div class="header">工作区域(选择)</div>
            </div>
            
            <div class="block">
                <div class="header">工作时间</div>
                <time-conf :timer.sync="formData.timeConf"></time-conf>
            </div>
        </div>
        
        <span 
            class="ui-btn ui-btn-big"
        >
            发布
        </span>
        
    </div>
</template>

<script>
export default {
	data() {
		return {
			title: '发布服务',
            indexData: indexData,
			userInfo: {},
			formData: {}
		}
	},
    ready(){
        let self = this;
        $.ajax({
            url: "/soytime/skill/myInfo",
            type:'POST',
            dataType: 'json',
            success: ((data)=>{
                self.formData = data.result;
            })
        });
    },
	components: {
		'headerBar': require('../../../components/header.vue'),
        'timeConf': require('../../../components/timeConf.vue'),
        'sceneType': require('../../../components/sceneType.vue')
	}
}
</script>