<style lang="less">
    @import '../../../less/lib/mixins.less';
    .page-user-work-acceptAppraise{
        .tagWrap{
            .rem(margin, 30, 0);
        }
        .tag{
            float:left;
            width:30%;
            position:relative;
            .rem(padding-left, 70);


            &:nth-child(2){
                margin: 0 5%;
             }

            .ico{
                .rem(font-size, 60);
                position: absolute;
                top:0;
                left:0;
            }
            .ico-xiaolian{
                color:#eb4f38
            }
            .ico-cry{
                color:#5e5e5e
            }
            .ico-kulian{
                color:#b2b2b2
            }
            span{
                background: #b2b2b2;
                display: inline-block;
                width:100%;
                text-align: center;
                color:#fff;
                .rem(height, 60);
                .rem(line-height, 60);
                .border-radius(8);
                .cur{
                    background: #ff946e;
                }
            }
        }
        textarea{
            width: 100%;
            .rem(height, 300);
            border:1px solid #dedede;
            .rem(border-width, 2);
            .border-radius(8);
            .rem(padding, 20);
        }
    }
</style>

<template>
    <div class="page-user-work-acceptAppraise">
        <header-bar :title="title" :back="true"></header-bar>

        <div class="content showHeader">
            <div class="tagWrap clearfix">
                <div class="tag" @click="setType(1)">
                    <i class="ico ico-xiaolian"></i>
                    <span :class="{'cur': formData.type == 1}">好评</span>
                </div>
                <div class="tag" @click="setType(2)">
                    <i class="ico ico-cry"></i>
                    <span :class="{'cur': formData.type == 2}">中评</span>
                </div>
                <div class="tag" @click="setType(3)">
                    <i class="ico ico-kulian"></i>
                    <span :class="{'cur': formData.type == 3}">差评</span>
                </div>
            </div>
            <textarea placeholder="请输入您要评价的内容" v-model="formData.content"></textarea>
        </div>
        <div class="ui-btn ui-btn-big" @click="save">提交</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '评价',
                formData: {
                    appraise_type: '',
                    order_id:'',
                    type:1,
                    to_id:'',
                    content:''
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
        methods:{
            setType(type){
                this.formData.type = type;
            },
            save(){
                $.ajax({
                    url: "/soytime/appraise/appraiseOrder",
                    type:'POST',
                    dataType: 'json',
                    data: self.formData,
                    success: ((data)=>{
                        self.formData = data.result;
                    })
                });
            }
        },
        components: {
            'headerBar': require('../../../components/header.vue')
        }
    }
</script>