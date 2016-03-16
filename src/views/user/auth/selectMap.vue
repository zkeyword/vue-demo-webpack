<style lang="less">
@import '../../../less/lib/mixins.less';
.page-selectMap{
    .amap-toolbar{
        bottom:180px !important;
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
        display:table;
        background:#54C5FF;
        
        span{
            display: table-cell;
            vertical-align: middle;
            padding:10px;
            .rem(padding, 10);
            .rem(font-size, 24);
        }
        
        .mapText{
            width:80%;
        }
        .mapBtn{
            width:20%;
            text-align:center;
        }
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
        <header-bar :title="title" :back="true"></header-bar>
        <div id="amapWrap" class="content"></div>
		<div id="panel"></div>
    </div>
</template>
<script>
export default  {
    data(){
        return {
            title:'地图选点',
            formData: {
                latitude: '',
                longitude: '',
                workplace: '',
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
            geocoder    = null,
            marker      = null,
            placeSearch = null,
            toAds       = (lnglatXY)=>{
                geocoder.getAddress(lnglatXY, function(status, result) {
                    if (status === 'complete' && result.info === 'OK') {
                        let ads   = result.regeocode.formattedAddress,
                            panel = $('#panel').html('<span class="mapText">'+ ads +'</span><span class="mapBtn">确定</span>');
                                    
                        panel.on('click', '.mapBtn', function(e){
                            self.formData.workplace = ads;
                            self.formData.latitude  = lnglatXY[0];
                            self.formData.longitude = lnglatXY[1];
                            self.$route.router.go('/auth/step3?' + $.param( self.formData ) );
                            return false;
                        });
                    }
                });  
            };
        
        map.plugin(["AMap.ToolBar"], function() {
            map.addControl(new AMap.ToolBar());
        });

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
                showCircle: false,        //定位成功后用圆圈表示定位精度范围，默认：true
                panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
                zoomToAccuracy:false      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            });
            map.addControl(geolocation);
        });
        
        map.plugin('AMap.Geocoder', ()=>{
                geocoder = new AMap.Geocoder({
                radius: 1000,
                extensions: "all"
            });
        });
        
        /* 确保两个地图插件都有调用到 */
        if( geolocation && geocoder ){
            /* 定位 */
            geolocation.getCurrentPosition();
            
            /* 定位完成后回调 */
            AMap.event.addListener(geolocation, 'complete', (data)=>{
                toAds( [data.position.getLng(), data.position.getLat()] );
                map.on('click', function(e) {
                    let position  = [e.lnglat.getLng(), e.lnglat.getLat()];
                        
                    if( marker ){
                        marker.setPosition(position);
                        toAds(position);
                    }else{
                        marker = new AMap.Marker({
                            icon: "http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
                            position: position
                        });
                        marker.setMap(map);
                        toAds(position);
                    }
                });
            });
        }else{
            setTimeout(()=>{
                location.reload(); 
            }, 15000);
        }
    },
    components: {
        'headerBar': require('../../../components/header.vue')
    }
}
</script>