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
	<loading :show="isShowloading" :text="loadingText"></loading>
</template>

<script>
    export default {
        data() {
            return {
                title: '公交路线',
                formData: {},
                isShow: true,
                lng:null,
                lat:null,
                loadingText: '正在加载路线,请稍后!',
           		isShowloading: false,
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
            let self        = this,
                map         = new AMap.Map('amapWrap', {
                    resizeEnable: true,
                    zoom:14
                });
				
				self.isShowloading = true;
                
			let timeloc = setInterval(function(){
				if(!self.lat || !self.lng){
					//调用浏览器定位服务
		            AMap.service(["AMap.Geolocation"], function() {
		            	var geolocation = new AMap.Geolocation({
		                     enableHighAccuracy: true,//是否使用高精度定位，默认:true
		                     timeout: 10000,          //超过10秒后停止定位，默认：无穷大
		                     //buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
		                     //zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
		                     buttonPosition:'RB'
		                 });
		                 //map.addControl(geolocation);
		                 geolocation.getCurrentPosition();
		                 AMap.event.addListener(geolocation, 'complete', function(data){
		                 	self.lng = data.position.getLng();
		                 	self.lat = data.position.getLat();
		                 });//返回定位信息
		                 AMap.event.addListener(geolocation, 'error', function(data){
		                 	clearInterval(timeloc);
		                 }); 
		            });
				}else{
					self.isShowloading = false;
					AMap.service(["AMap.Transfer"], function() {
		                let transOptions = {
		                        map: map,
		                        city: returnCitySN.cname,	//此处显示用户当前位置
		                        panel: 'panel',
		                        //cityd:'乌鲁木齐',
		                        policy: AMap.TransferPolicy.LEAST_TIME
		                    },
		                    transfer    = new AMap.Transfer(transOptions),
		                    myloaction        = new AMap.LngLat(self.lng, self.lat),
		                    work        = new AMap.LngLat(self.formData.work_longitude, self.formData.work_latitude);
		                //根据起、终点坐标查询公交换乘路线
		                transfer.search(myloaction, work);
		            });
		            clearInterval(timeloc);
				}
			},2500);
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
            'headerBar': require('../../../components/header.vue'),
			'loading': require('../../../components/loading')
        }
    }
</script>