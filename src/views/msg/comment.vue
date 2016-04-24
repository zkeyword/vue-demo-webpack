<style lang="less">
@import '../../less/lib/mixins.less';
.page-msg-comment{
    .rem(font-size, 30);
    .userWrap{
        .photoWrap{
            margin:0 auto;
            .rem(margin-top, 20);
            .rem(width, 140);
            .rem(height, 140);
            .border-radius(140);
            img{
                width:100%;
                height:100%;
                .border-radius(140);
            }
        }
        .name{
            text-align: center;
            .rem(margin, 20, 0);
        }
    }

    .orderContent{
        .header{
            color:#b2b2b2;
        }
        .main{
            background: #fff;
            .rem(padding, 20);
            .border-radius(8);
        }
    }

    .commentContent{
        position:relative;
        .rem(margin-top, 20);
        .typeWrap{
            position: absolute;
            top:0;
            left:0;
            .rem(width, 80);
            text-align:center;
            .ico{
                .rem(font-size, 80);
            }
            .ico-xiaolian{
                color:#eb503a;
            }
            .ico-cry{
                color:#5e5e5e;
            }
            .ico-kulian{
                color:#b2b2b2;
            }
        }
        .main{
            .rem(margin-left, 120);
            background: #fff;
            .rem(padding, 20);
            .border-radius(8);
            position: relative;
            border:1px solid #f4f4f4;
            .rem(border-width, 2);
            .arrow{
                position: absolute;
                .rem(top, 30);
                .rem(left, -16);
                .rem(height, 32);
                .rem(width, 32);
                border-left: 1px solid #f4f4f4;
                border-bottom: 2px solid #f4f4f4;
                .rem(border-left-width, 2);
                .rem(border-bottom-width, 2);
                display: inline-block;
                transform: rotate(45deg);
                -webkit-transform: rotate(45deg);
                -moz-transform: rotate(45deg);
                background: #fff;
            }
        }
    }

}
</style>

<template>
    <div class="page-msg-comment" transition="page">
        <header-bar :title="title" :back="true"></header-bar>
        <div class="content showHeader">
            <div class="userWrap">
                <div class="photoWrap">
                    <img :src="formData.head_img_url">
                </div>
                <div class="name">{{formData.nick_name}}</div>
            </div>
            <div class="orderContent">
                <div class="header">订单需求说明</div>
                <div class="main">{{formData.order_content}}</div>
            </div>
            <div class="commentContent clearfix">
                <div class="typeWrap">
                    <i class="ico {{typeCls[formData.type-1]}}"></i>
                    <div>{{typeTex[formData.type-1]}}</div>
                </div>
                <div class="main">
                    <i class="arrow"></i>
                    {{formData.content}}
                </div>
            </div>
        </div>
        <span
            class="ui-btn ui-btn-big"
        >
            互评
        </span>
    </div>
</template>


<script>
export default {
    data(){
        return {
            title: '收到的评论',
            formData:{},
            typeTex:['好评','中评','差评'],
            typeCls:['ico-xiaolian','ico-cry','ico-kulian']
        }
    },
    route: {
        data (transition){
            let self     = this,
                query    = transition.to.query;

            $.extend(self.formData, query);

            $.ajax({
                url: "/soytime/msg/appraiseDetail",
                type:'POST',
                dataType: 'json',
                success: ((data)=>{
                    self.formData = data.result;
                })
            });
        }
    },
    ready(){

    },
    methods:{
    },
    components: {
        'headerBar': require('../../components/header.vue')
    }
}
</script>