<style lang="less">
@import '../../less/lib/mixins.less';
.page-scene-detail{
    .content {
        padding-left: 0;
        padding-right: 0;
    }
    
        .userContent{
            padding-left: 0.65rem;
            padding-right: 0.65rem;
        }
        
            .userHeader{
                .rem(height, 350);
                overflow:hidden;
                position:relative;
                z-index:1;
                
                img{
                    height:100%;
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
                            overflow:hidden;
                            border:1px solid #fff;
                            .border-radius(150);
                            .rem(border-width, 10);
                            img{
                                .border-radius(150);
                            }
                        }
                        
                    }
                }
                
                .collection{
                    position:absolute;
                    .rem(right, 20);
                    .rem(top, 20);
                    i{
                        display:inline-block;
                        float:left;
                        color:#ff946e;
                        .rem(font-size, 38);
                        .rem(height, 38);
                        .rem(line-height, 38);
                        .rem(padding-right, 10)
                    }
                    span{
                        display:inline-block;
                        float:left;
                        background:#000;
                        .opacity(0.5);
                        .border-radius(8);
                        .rem(padding, 0, 10);
                        .rem(font-size, 24);
                        .rem(height, 38);
                        .rem(line-height, 38);
                        color:#fff;
                    }
                }
            }
            
            .userInfo{
                position:relative;
                text-align:center;
                z-index:2;
                .rem(margin-top, -25);
                .school{
                    position:relative;
                    display:inline-block;
                    background:#fff;
                    border:1px solid #dedede;
                    .rem(border-width, 2);
                    .rem(padding, 0, 50);
                    .rem(height, 50);
                    .rem(line-height, 50);
                    .border-radius(50);
                    .box-shadow(0, 0, 0.2rem, #ddd);
                    .rem(font-size, 30);
                    
                    .ico-renzheng{
                        color:#11cd6e;
                        transform: rotate(-30deg);
                        -webkit-transform: rotate(-30deg);
                        position:absolute;
                        .rem(font-size, 60);
                        .rem(left, -20);
                        .rem(top, -20);
                    }
                }
                .workplace{
                    .rem(font-size, 30);
                    .rem(height, 64);
                    .rem(line-height, 64);
                }
            }
            
            .userService{
                border:1px solid #dedede;
                .rem(font-size, 30);
                .rem(height, 80);
                .rem(line-height, 80);
                .rem(border-width, 2);
                .rem(margin-bottom, 20);
                border-left: 0 none;
                border-right: 0 none;
                
                i{
                    float:left;
                    font-style:normal;
                }
                span{
                    float:left;
                    color:#b2b2b2;
                    .rem(margin, 0, 10, 0, 0);
                }
            }
            
            .block{
                background:#fff;
                border:1px solid #dedede;
                .rem(border-width, 2);
                .border-radius(8);
                .rem(padding, 0, 30, 20, 30);
                .rem(margin-bottom, 20);
                header{
                    border-bottom:1px solid #dedede;
                    .rem(border-bottom-width, 2);
                    .rem(height, 65);
                    .rem(line-height, 65);
                    .rem(font-size, 30);
                }
                .main{
                    .rem(font-size, 24);
                    .rem(padding-top, 10);
                    table{
                        margin-top:0;
                    }
                    .appraiseContent{
                        .rem(padding-bottom, 10);
                    }
                    .appraiseCount{
                        text-align:center;
                        
                        .ui-floatCenter{
                            .rem(height, 90);
                        }
                            .user{
                                .img{
                                    .rem(width, 70);
                                    .rem(height, 70);
                                    .border-radius(70);
                                    img{
                                        .border-radius(70);
                                        width:100%;
                                    }
                                }
                                .nameWrap{
                                    .time{
                                        .rem(font-size, 20);
                                        color:#b2b2b2;
                                    }
                                }
                            }
                            
                        .btn{
                            display:inline-block;
                            background:#ff946e;
                            color:#fff;
                            .rem(padding, 0, 20);
                            .rem(height, 50);
                            .rem(line-height, 50);
                            .border-radius(50);
                        }
                    }
                }
            }
}
    
</style>

<template>
    <div class="page-scene-detail page-current">
        <header-bar :title="title" :back="true"></header-bar>
        <div class="content showHeaderNopading showFooter">
            <div class="userHeader">
                <img src="/dist/defaultImg/serverDefault.jpg" v-if="!formData.photo_url" />
                <img :src="formData.photo_url" v-else />
                <div class="userWrap">
                    <div class="btn">
                        <div class="radius" v-if="!formData.photo_url">
                            <img :src="formData.head_img_url" />
                        </div>
                    </div>
                    <div class="name">{{formData.usernick}}</div>
                </div>
                <div class="collection clearfix">
                    <i class="ico ico-aixin"></i>
                    <span>5人已收藏</span>
                </div>
            </div>
            
            <div class="userContent">
                <div class="userInfo">
                    <span class="school">
                        <i class="ico ico-renzheng"></i>
                        {{formData.school_name}}
                    </span>
                    <div class="workplace">{{formData.workplace}} 周边</div>
                </div>
                
                <div class="userService clearfix">
                    <i>我的服务：</i>
                    <span v-for="item in sceneList" v-if="item | sceneCur sceneArr">{{item.scene_name}}</span>
                </div>
                
                <div class="block">
                    <header>介绍服务</header>
                    <div class="main">
                        {{formData.detail}}
                    </div>
                </div>
                
                <div class="block">
                    <header>工作时间</header>
                    <div class="main">
                        <time-conf :timer="formData.timeConf" :is-radio="true"></time-conf>
                    </div>
                </div>
                
                <div class="block" v-if="formData.orderAppraise">
                    <header>客户评价</header>
                    <div class="main">
                        <div class="appraiseContent">
                            {{formData.orderAppraise.content}}
                        </div>
                        <div class="appraiseCount">
                            <div class="ui-floatCenter">
                                <div class="user ui-sl-floatCenter clearfix">
                                    <div class="img ui-floatCenter-item">
                                        <img :src="formData.orderAppraise.head_img_url" />
                                    </div>
                                    <div class="nameWrap ui-floatCenter-item">
                                        <div class="name">{{formData.orderAppraise.from_name}}</div>
                                        <div class="time">{{formData.orderAppraise.create_time}}</div>
                                    </div>
                                </div>
                            </div>
                            <span class="btn" v-link="{ name: 'sceneAppraise', query:{user_id: formData.user_id} }">
                                查看{{formData.orderAppraise.appraise_count}}条评价
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <span 
            class="ui-btn ui-btn-big"
            v-link="{ name: 'sceneInviteOrder', query:query}"
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
            sceneList: indexData.sceneList,
            query: {}
        }
    },
    route:{
        data (transition){
            let self  = this,
                query = transition.to.query;
            
            $.ajax({
                url: '/soytime/server/stuInfo',
                type: 'POST',
                data:'scene_id'+query.scene_id+"&user_id="+query.user_id,
                dataType: 'json',
                success: ((data)=>{
                    self.formData = data.result;
                    self.title    = data.result.usernick;
                    self.sceneArr = data.result.sceneIds.split('-');
                    self.query = {
                        scene_name: query.scene_name,
                        photo_url: data.result.photo_url,
                        head_img_url: data.result.head_img_url,
                        usernick: data.result.usernick
                    }
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
