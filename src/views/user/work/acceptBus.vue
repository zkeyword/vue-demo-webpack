<style lang="less">
    @import '../../../less/lib/mixins.less';
    .page-user-work-acceptBus{
        #panelWrap{
            position: fixed;
            max-height: 50%;
            overflow-y: auto;
            left: 0;
            bottom: 0;
            width: 100%;
            z-index:200;
        }
        #panelBg{
            background-color: #fff;
        }
        #panelBtn{
            .rem(height, 50);
            .rem(line-height, 50);
            .ico{
                width: 20%;
                margin:0 auto;
                .rem(height, 50);
                .rem(line-height, 50);
                .rem(font-size, 30);
                text-align: center;
                background:#fff;
                color:#b2b2b2;
                .rem(border-top-right-radius, 8);
                .rem(border-top-left-radius, 8);
            }
        }
    }
</style>

<template>
    <div class="page-user-work-acceptBus">
        <header-bar :title="title" :back="true"></header-bar>
        <div id="amapWrap" class="content"></div>
        <div id="panelWrap">
            <div id="panelBtn" @click="switch">
                <div class="ico" :class="{'ico-down':isShow, 'ico-up': !isShow}"></div>
            </div>
            <div id="panelBg" v-show="isShow">
                <div id="panel"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '公交路线',
                formData: {},
                isShow: true
            }
        },
        route: {
            data (transition){
                let self     = this,
                    query    = transition.to.query;

                $.extend(self.formData, query);
            }
        },
        ready(){

            if( !window.AMap ){
                setTimeout(()=>{
                    location.reload();
                }, 15000);
                return;
            }

            let self        = this,
                map         = new AMap.Map('amapWrap', {
                    resizeEnable: true,
                    zoom:14
                });

            AMap.service(["AMap.CitySearch"], function() { //加载地理编码
                //实例化城市查询类
                var citysearch = new AMap.CitySearch();
                //自动获取用户IP，返回当前城市
                citysearch.getLocalCity(function(status, result) {
                    if (status === 'complete' && result.info === 'OK') {
                        if (result && result.city && result.bounds) {
                            var cityinfo = result.city;
                            var citybounds = result.bounds;

                        }
                    }
                });
            });

            AMap.service(["AMap.Transfer"], function() {
                let transOptions = {
                        map: map,
                        city: returnCitySN.cname,	//此处显示用户当前位置
                        panel: 'panel',
                        //cityd:'乌鲁木齐',
                        policy: AMap.TransferPolicy.LEAST_TIME
                    },
                    transfer    = new AMap.Transfer(transOptions),
                    comp        = new AMap.LngLat(self.formData.comp_longitude, self.formData.comp_latitude),
                    work        = new AMap.LngLat(self.formData.work_longitude, self.formData.work_latitude);
                console.log( self.formData )
                //根据起、终点坐标查询公交换乘路线
                transfer.search(comp, work);
            });

        },
        methods:{
            switch(){
                if( this.isShow ){
                    this.isShow = false;
                }else{
                    this.isShow = true;
                }
            }
        },
        components: {
            'headerBar': require('../../../components/header.vue')
        }
    }
</script>