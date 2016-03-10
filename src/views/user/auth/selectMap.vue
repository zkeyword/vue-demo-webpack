<style lang="less">
.page-selectMap{
    .amap-toolbar{
        bottom:180px !important;
    }
    .mapBtn{
        color:#fff;
        position:absolute;
        right:15px;
        top:10px;
        background:#54C5FF;
        padding:5px 20px;
        z-index:500;
    }
    #panel {
        position: fixed;
        background-color: white;
        max-height: 90%;
        overflow-y: auto;
        left: 0;
        bottom: 0;
        width: 100%;
        border-bottom: solid 1px silver;
        z-index:200;
    }
    .poi-more{
        display:none !important;
        width:0 !important;
        height:0 !important;
    }
    .poi-addr{
        padding-right:100px
    }
    .amap_lib_placeSearch_page{
        display:none;
        padding:0 !important;
        margin:0 !important;
    }

    .amap-geo{
        position: absolute;
        left: 0;
        bottom: 90px;
    }
}
</style>

<template>
    <div transition="page" class="page page-selectMap page-current">
        <header class="bar bar-nav">
            <a class="icon icon-left pull-left"></a>
            <h1 class="title">认证</h1>
        </header>
        <div id="amapWrap" class="content"></div>
		<div id="panel"></div>
    </div>
</template>
<script>
    export default  {
		data(){
			return {
                formData: {
					latitude: '',
					workplace: '',
					position: [],
					city_id: '',
					school_id: ''
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
				}),
				geolocation = null,
				marker      = null,
				placeSearch = null;
			
			map.plugin(["AMap.ToolBar"], function() {
				map.addControl(new AMap.ToolBar());
			});
			
			/*
			
			let position = [118.171543,24.470477]
			
			AMap.service(["AMap.PlaceSearch"], function() {
								placeSearch = new AMap.PlaceSearch({ //构造地点查询类
									pageSize: 1,
									pageIndex: 1,
									map: map,
									panel: "panel"
								})
								placeSearch.searchNearBy('', position, 500, function(status, result) {
									let panel = $('#panel'),
										box   = $('.poibox').append('<span class="mapBtn">确定</span>'),
										ads   = box.find('.poi-addr').html();
										
									panel.on('click', '.mapBtn', function(e){
										self.formData.ads      = ads.replace(/地址：/, '');
										self.formData.position = position.join(',');
										self.$route.router.go('/auth/step3?' + $.param( self.formData ) );
										return false;
									});
								});
							});
							
			return;
			
			*/
            
			
            map.plugin('AMap.Geolocation', function () {
                geolocation = new AMap.Geolocation({
                    enableHighAccuracy: true,//是否使用高精度定位，默认:true
                    timeout: 10000,          //超过10秒后停止定位，默认：无穷大
                    maximumAge: 0,           //定位结果缓存0毫秒，默认：0
                    convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
                    showButton: true,        //显示定位按钮，默认：true
                    buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
                    buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                    showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
                    showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
                    panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
                    zoomToAccuracy:false      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                });
                map.addControl(geolocation);
            });
            
            if( geolocation ){
                geolocation.getCurrentPosition();
                map.on('click', function(e) {
                    let position  = [e.lnglat.getLng(), e.lnglat.getLat()],
						getSearch = function(){
							AMap.service(["AMap.PlaceSearch"], function() {
								placeSearch = new AMap.PlaceSearch({ //构造地点查询类
									pageSize: 1,
									pageIndex: 1,
									map: map,
									panel: "panel"
								})
								placeSearch.searchNearBy('', position, 500, function(status, result) {
									let panel = $('#panel'),
										box   = $('.poibox').append('<span class="mapBtn">确定</span>'),
										ads   = box.find('.poi-addr').html();
										
									panel.on('click', '.mapBtn', function(e){
										self.formData.workplace = ads.replace(/地址：/, '');
										self.formData.longitude = position[0];
										self.formData.latitude  = position[1];
										self.$route.router.go('/auth/step3?' + $.param( self.formData ) );
										return false;
									});
								});
							});
						}
						
                    if( marker ){
                        marker.setPosition( position );
						placeSearch.clear();
						getSearch();
                    }else{
                        marker = new AMap.Marker({
                            icon: "http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
                            position: position
                        });
                        marker.setMap(map);
						getSearch();
                    }
                });
            }else{
                setTimeout(()=>{
                    location.reload(); 
                }, 15000);
            }
        }
    }
</script>