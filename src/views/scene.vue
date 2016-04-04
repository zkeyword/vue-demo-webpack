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
        .rem(margin-bottom, 20);
        
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
            
            .school{
                .rem(font-size, 24);
                color:#5e5e5e;
            }
            
            .pull-right{
                .rem(margin-top, 30);
            }
        }
        
        .main{
            .rem(padding, 20);
            
            .text{
                .rem(font-size, 30);
                color:#5e5e5e;
            }
            
            .img{
                width:30%;
                float:left;
                
                &:nth-child(2){
                    margin:0 5%;    
                }
                
                img{
                    width:100%;
                }
            }
        }
        
        .userScore{
            border-top:2px solid #dedede;
            .rem(border-top-width, 2);
            .rem(font-size, 24);
            color:#8e8e8e;
            li{
               width:33.33%;
               float:left;
               text-align:center;
               .rem(padding, 10, 0);
            }
                em{
                    font-style:normal;
                    display:inline-block;
                    .rem(padding, 0, 5);
                }
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
            <div class="item" v-for="item in formData">
                <header class="clearfix" v-link="{name: 'sceneDetail', query: {'user_id': item.user_id}}">
                    <div class="pull-left photoWrap">
                        <img :src="item.head_img_url">
                    </div>
                    <div class="pull-left nameWrap">
                        <div class="name">
                            <i class="icon" 
                                :class="{'icon-xingbienan2': item.sex == 1, 'icon-xingbienv2': item.sex == 2}"
                            ></i>
                            {{item.usernick}}
                        </div>
                        <div class="school clearfix">
                            {{item.school_name}}
                        </div>
                    </div>
                    <i class="icon icon-jiantouyou pull-right"></i>
                </header>
                <div class="main">
                    <div class="text">{{item.detail}}</div>
                    <div class="imgWrap clearfix">
                        <div class="img" v-for="subItem in item.skillImgs">
                            <img :src="subItem.img_url">
                        </div>
                    </div>
                </div>
                <ul class="userScore clearfix">
                    <li>
                        <i class="icon icon-aixin-copy"></i>
                        <em>{{item.collectCount}}</em>
                    </li>
                    <li>
                        <i class="icon icon-liuyan"></i>
                        <em>{{item.appraiseCount}}</em>
                    </li>
                    <li>
                        <i class="icon icon-yanjing"></i>
                        <em>{{item.viewCount}}</em>
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
            isShowFilter: false,
            formData: {},
            data:{
                /*
                currentPage		整数				当前页码
                scene_id    	字符串			学生服务编号
                city_id			整形				当前城市编号
                school_id		整形				学校编号，默认不限（无需传值）
                sex				整形				性别， 默认为不限，无需传值（1：男，2：女）
                sort			整形				排序，默认排序，无需传值（1：评价最高，2：距离最近）
                */
            }
        }
    },
    route:{
        data (transition){
            let self  = this,
                query = transition.to.query;
                
            self.title = query.scene_name;
            
            $.ajax({
                url: "/soytime/scene/list",
                type:'POST',
                data:self.data,
                dataType: 'json',
                success: ((data)=>{
                    self.formData = data.result;
                })
            });
            
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
