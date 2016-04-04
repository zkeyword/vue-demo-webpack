<style lang="less">
@import '../../less/lib/mixins.less';
.page-msg-message{
    .time{
        text-align:center;
        span{
            background:#b2b2b2;
            color:#fff;
            .border-radius(8);
            .rem(padding, 2, 10);
            .rem(font-size, 20);
        }
    }
    .main{
        position:relative;
        .rem(padding, 0, 120);
        .textWrap{
            float:left;
            .rem(font-size, 24);
            .text{
                background:#fff;
                position:relative;
                .border-radius(8);
                .rem(padding, 4, 10);
                
                i{
                    position:absolute;
                    .rem(top, 10);
                    .rem(left, -20);
                    .arrow(#fff, left, 10);
                }
            }
        }
        &.isMe{
            .photoWrap{
                left:auto;
                right:0;
            }
            .textWrap{
                float:right;
                .name{
                    text-align:right;
                }
                i{
                    position:absolute;
                    left:auto;
                    .rem(top, 10);
                    .rem(right, -20);
                    .arrow(#fff, right, 10);
                }
            }
        }
    }
        .photoWrap{
            position:absolute;
            top:0;
            left:0;
            .rem(width, 90);
            .rem(height, 90);
            .border-radius(90);
            img{
                width:100%;
                height:100%;
                .border-radius(120);
            }
        }
        
    .formWrap{
        background:#fff;
        height: 2.4rem;
        line-height: 2.4rem;
        position:absolute;
        bottom:0;
        left:0;
        width:100%;
        .rem(padding, 0, 20);
        .rem(font-size, 24);
        
        input{
            border:1px solid #ddd;
            .border-radius(8);
            .rem(border-width, 2);
            .rem(height, 60);
            .rem(line-height, 60);
            .rem(padding, 0, 10);
            width: 80%;
        }
        
        span{
            display:inline-block;
            width: 18%;
            text-align:center;
            background:#ff946e;
            color:#fff;
            .rem(height, 60);
            .rem(line-height, 60);
            .border-radius(8);
        }
    }
}
</style>

<template>
    <div class="page-msg-message" transition="page">
        <header-bar :title="title" :back="true"></header-bar>
        <div class="content showHeader showFooter">
        
            <div class="item clearfix" v-for="item in formData">
                <div class="time" v-if="item.create_time"><span>{{item.create_time}}</span></div>
                <div class="main" :class="{isMe: item.isMe == 1}">
                    <div class="photoWrap">
                        <img :src="item.head_img_url">
                    </div>
                    <div class="textWrap">
                        <div class="name">{{item.nick_name}}</div>
                        <div class="text">
                            {{item.content}}
                            <i></i>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
        <div class="formWrap">
            <input v-model="content" placeholder="留言或回复内容"/>
            <span @click="send">发送</span>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return {
            title: '留言',
            id: null,
            formData: []
        }
    },
    route: {
        data (transition){
            let self     = this,
                query    = transition.to.query;
                
            self.id = query.id;
            
            $.ajax({
                url: "/soytime/msg/msnList",
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
        send(){
            let self = this;
            $.ajax({
                url: "/soytime/msg/msnList",
                type:'POST',
                data:{
                    id: self.id,
                    content: self.content
                },
                dataType: 'json',
                success: ((data)=>{
                    self.formData.push(data.result);
                })
            });
        }
    },
    components: {
        'headerBar': require('../../components/header.vue')
    }
}
</script>