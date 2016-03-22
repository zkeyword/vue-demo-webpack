<style lang="less">
@import '../../less/lib/mixins.less';
.page-user-setting{
    
}
</style>

<template>
    <div class="page-user page-user-setting">
        <header-bar :title="title" back="true"></header-bar>
        <div class="content showHeader showFooter">
            
            头像
            姓名
            性别
            身高
            出生日期
            邮箱
            订单接送提醒
            
            <div class="params">
                <bind-mobile :mobile.sync="formData.mobile"></bind-mobile>
            </div>
            
            <time-conf :timer.sync="formData.timeConf"></time-conf>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '设置',
                formData: {
                    timeConf: null,
                    mobile: null //components bug？
                }
            }
        },
		route: {
			data (transition){
				let self     = this,
                    query    = transition.to.query;
                    
                $.extend(self.formData, query);
                
                console.log( 1, self.formData.city_id )
			}
		},
        ready (){
            let self     = this;
            console.log( 2, self.formData )
        },
        methods:{
            
        },
        components: {
            'headerBar': require('../../components/header.vue'),
            'timeConf': require('../../components/timeConf.vue'),
            'bindMobile': require('../../components/bindMobile.vue')
        }
    }
</script>