<style lang="less">
@import '../../less/lib/mixins.less';
.page-scene-appraise{
    .filter{
        border-bottom:1px solid #dedede;
        .rem(border-bottom-width, 2);
        .rem(padding-bottom, 20);
        .rem(margin-bottom, 20);
        
        span{
            display:inline-block;
            background:#b2b2b2;
            color:#fff;
            .rem(padding, 0, 10);
            .rem(height, 50);
            .rem(line-height, 50);
            .border-radius(8);
            .rem(font-size, 24);
            
            &.cur{
                background:#ff946e;
            }
        }
    }
    
    .block{
        background:#fff;
        border:1px solid #dedede;
        .rem(border-width, 2);
        .border-radius(8);
        .rem(padding, 20, 30);
        .rem(margin-bottom, 20);
        .rem(font-size, 30);
        
        .user{
            border-bottom:1px solid #dedede;
            .rem(border-bottom-width, 2);
            .img{
                float:left;
                .rem(width, 70);
                .rem(height, 70);
                .border-radius(70);
                img{
                    .border-radius(70);
                    width:100%;
                }
            }
            .nameWrap{
                float:left;
                .rem(padding-left, 20);
                .time{
                    .rem(font-size, 20);
                    color:#b2b2b2;
                }
                .name{
                    
                }
            }
            .type{
                float:right;
                text-align:center;
                .ico{
                    .rem(font-size, 40);
                    &.ico-xiaolian{
                        color:#eb503a
                    }
                    &.ico-cry{
                        color:#5e5e5e
                    }
                    &.ico-kulian{
                        color:#b2b2b2
                    }
                }
                div{
                    .rem(font-size, 24);
                }
            }
        }
        .main{
            .rem(padding-top, 10);
        }
    }
}
</style>

<template>
    <div transition="page" class="page-scene-appraise page-current">
        <header-bar :title="title" :back="true"></header-bar>
        <div class="content showHeader">
            <div class="filter">
                <span @click="setType(0)" :class="{'cur': type == 0}">全部({{formData.count.allCount}})</span>
                <span @click="setType(1)" :class="{'cur': type == 1}">好评({{formData.count.goodCount}})</span>
                <span @click="setType(2)" :class="{'cur': type == 2}">中评({{formData.count.cenCount}})</span>
                <span @click="setType(3)" :class="{'cur': type == 3}">差评({{formData.count.poolCount}})</span>
            </div>
            <div class="block" v-for="item in formData.appraises">
                <div class="user clearfix">
                    <div class="img">
                        <img :src="item.head_img_url" />
                    </div>
                    <div class="nameWrap">
                        <div class="name">{{item.from_name}}</div>
                        <div class="time">{{item.create_time}}</div>
                    </div>
                    <div class="type">
                        <i class="ico {{typeIconArr[item.type-1]}}"></i>
                        <div>{{typeArr[item.type-1]}}</div>
                    </div>
                </div>
                <div class="main">
                    {{item.content}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title: '评价',
            formData: {},
            type:0,
            typeArr: ['好评', '中评', '差评'],
            typeIconArr: ['ico-xiaolian','ico-cry','ico-kulian'],
            toId: null,
            currentPage: 1
        }
    },
    route:{
        data (transition){
            let self  = this,
                query = transition.to.query;
                
            self.toId = query.to_id;
            self.getList();
        }  
    },
    methods:{
        setType(type){
            let self = this;
            
            self.type = type;
            self.getList();
        },
        getList(){
            let self = this;
            $.ajax({
                url: "/soytime/appraise/list",
                type:'POST',
                dataType: 'json',
                data:{
                    to_id: self.toId,
                    currentPage: self.currentPage,
                    type: self.type
                },
                success: (data)=>{
                    self.formData = data.result
                }
            });
        }
    },
    components: {
        'headerBar': require('../../components/header.vue')
    }
}
</script>
