<style lang="less">
@import '../less/lib/mixins.less';
.page-scene{
    
    .scenefilter{
        position: absolute;
        left: 0;
        top: 2.2rem;
        z-index: 10;
        height: 2.2rem;
        background:#fff;
        width:100%;
        border-bottom:2px solid #b2b2b2;
        .rem(border-bottom-width, 2);
        
        li{
            width:33.333%;
            float:left;
            text-align:center;
            line-height:1.4rem;
            margin:0.4rem 0;
            .rem(font-size, 30);
            &:first-child{
                 border-right:2px solid #b2b2b2;
                .rem(border-right-width, 2);
            }
            &:last-child{
                 border-left:2px solid #b2b2b2;
                .rem(border-left-width, 2);
            }
            .icon{
                .rem(margin-left, 10);
            }
        }
    }
    
    .scenefilterList{
        position:absolute;
        top:4.4rem;
        z-index: 11;
        height:100%;
        width:100%;
        
        .content{
            width:100%;
            height:100%;
            padding-bottom:4.4rem;
            background:#fff;
        }
    }

    .item{
        background:#fff;
        .border-radius(8);
        
        header{
            border-bottom:2px solid #dedede;
            .rem(border-bottom-width, 2);
            .rem(padding, 20);
            .rem(font-size, 30);
            
            .photoWrap{
                .rem(margin-right, 20);
                .rem(width, 90);
                .rem(height, 90);
                .border-radius(90);
                img{
                    width:100%;
                    height:100%;
                    .border-radius(120);
                }
            }
            
            .pull-right{
                .rem(margin-top, 30);
            }
        }
        
        .main{
            .rem(padding, 20);
        }
        
        .userScore{
            border-top:2px solid #dedede;
            .rem(border-top-width, 2);
        }
    }
}
    
</style>

<template>
    <div transition="page" class="page-scene page-current">
        <header-bar :title="title" :back="true"></header-bar>
        <ul class="scenefilter clearfix">
            <li @click="showFilter(1)">
                <span>学校<i class="icon icon-down" :class="{'icon-up':filterType == 1}"></i></span>
            </li>
            <li @click="showFilter(2)">
                <span>性别<i class="icon icon-down" :class="{'icon-up':filterType == 2}"></i></span>
            </li>
            <li @click="showFilter(3)">
                <span>排序<i class="icon icon-down" :class="{'icon-up':filterType == 3}"></i></span>
            </li>
        </ul>
        <div class="scenefilterList" v-show="isShowFilter">
            <div class="content">
                <ul>
                    <li @click="filter"><i class="icon icon-yixuan"></i>asdfasdf</li>
                </ul>
            </div>
        </div>
        <div class="content showHeader showTab showFooter">
            <div class="item">
                <header class="clearfix" v-link="{name: 'sceneDetail'}">
                    <div class="pull-left photoWrap">
                        <img :src="{{userInfo.photo}}">
                    </div>
                    <div class="pull-left nameWrap">
                        <div class="name"><i class="icon icon-xingbienan2"></i>名字</div>
                        <div class="auth clearfix">
                            厦门大学
                        </div>
                    </div>
                    <i class="icon icon-jiantouyou pull-right"></i>
                </header>
                <div class="main">
                    <div class="text">Hello,大家好，本人擅长英语和语文，尤其是其理解和写作方面。英语过6级沟通能力好，有耐心。</div>
                    <div class="img"></div>
                </div>
                <ul class="userScore clearfix">
                    <li>
                        <i class="icon icon-xiaolian pull-left"></i>
                        <span class="pull-left">好评</span>
                        <em class="pull-left">1</em>
                    </li>
                    <li>
                        <i class="icon icon-cry pull-left"></i>
                        <span class="pull-left">中评</span>
                        <em class="pull-left">1</em>
                    </li>
                    <li>
                        <i class="icon icon-kulian pull-left"></i>
                        <span class="pull-left">差评</span>
                        <em class="pull-left">1</em>
                    </li>
                </ul>
            </div>
        </div>
        <span 
                class="ui-btn ui-btn-big"
            >
            一键预约
        </span>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title: null,
            filterType: 0,
            isShowFilter: false
        }
    },
    route:{
        data (transition){
            let self  = this,
                query = transition.to.query;
                
            self.title = query.scene_name;
        },
        deactivate(){
            this.filterType = 0;
        }  
    },
    ready: function () {
        
    },
    methods:{
        showFilter(type){
            let self = this;
            self.filterType = type;
            self.isShowFilter = true;
        },
        filter(){
            let self = this;
            self.isShowFilter = false;
        }
    },
    components: {
        'headerBar': require('../components/header.vue')
    }
}
</script>
