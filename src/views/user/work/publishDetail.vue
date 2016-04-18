<style lang="less">
    @import '../../../less/lib/mixins.less';
    .page-user-work-publish{


    }
</style>

<template>
    <div class="page-user-work-publish">
        <header-bar :title="title"></header-bar>

        <div class="content showHeader">
            <div class="">
                <header>麻花科技</header>
                <section>
                    公司地址：软件园31号
                    工作任务：家教
                    需要人数：2人(报名3人，剩余1 人可约）
                    工作时间：03/02 10:00-12:00 ,18:00-20:00
                    工作内容：
                    辅导孩子完成家庭作业，并且进行课外辅导！让孩子在理解能力跟读题能力有所提高！
                </section>
            </div>
            <div class="item">
                <header class="clearfix" v-link="{name: 'sceneDetail', query: {'user_id': item.user_id, 'scene_name': scene_name, 'scene_id': scene_id}}">
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
                <section>
                    辅导孩子完成家庭作业，并且进行课外辅导！让孩子在理解能力跟读题能力有所提高！
                </section>
                <footer class="clearfix">
                    <span>拒绝</span>
                    <span>约TA</span>
                    <span>已约</span>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
        return {
            title: '订单详细',
            formData: {}
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
        getList(tag){
            let self = this;
            self.tag = tag;
            $.ajax({
                url: "/soytime/order/demandList",
                type:'POST',
                dataType: 'json',
                data: {
                    tag: self.tag,
                    currentPage: self.currentPage
                },
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