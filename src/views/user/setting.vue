<style lang="less">

</style>

<template>
    <div class="page-user page-user-setting">
        <header-bar :title="title" back="true"></header-bar>
        
        <div class="content showHeader showFooter">

            <div @click="showMoblie">
                手机
            </div>
            
            <pop-moblie v-if="isShowPopMoblie"></pop-moblie>
            
        </div>
    </div>
	<script type="text/html" id="moblieWrap">
		手机：<input type="text" />
		验证码：<input type="text" />
		
		获取验证码
	</script>
</template>

<script>
    export default {
        data() {
            return {
                title: '设置',
                isShowPopMoblie: false,
                formData: {}
            }
        },
		route: {
			data (transition){
				
			}
		},
        ready (){
            //setTimeout(() => {
            //   this.$route.router.go({ name: 'list'});
            //},2000);
        },
        methods:{
            showMoblie(){
                $.modal({
					text : $('#moblieWrap').html(),
					buttons : [
						{
							text : '取消',
							onClick : function () {
								$.alert('You clicked second button!')
							}
						},{
							text : '确定',
							close: false,
							onClick : function () {
								$.closeModal()
							}
						}
					]
				});
            }
        },
        components: {
            'headerBar': require('../../components/header.vue'),
            'timeConf': require('../../components/timeConf.vue'),
            'popMoblie': require('../../components/popMoblie.vue')
        }
    }
</script>