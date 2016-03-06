<template>
    <div transition="page" class="page page-current">
        <header class="bar bar-nav">
            <a class="icon icon-left pull-left"></a>
            <h1 class="title">认证</h1>
        </header>
        <div id="amapWrap" class="content"></div>
    </div>
</template>
<script>
    export default  {
        ready(){

            if( !window.AMap ){
                setTimeout(()=>{
                    location.reload(); 
                }, 3000);
                return;
            }
            
            let map = new AMap.Map('amapWrap', {
                resizeEnable: true,
                zoom:11
            }),
            geolocation = null,
            marker      = null;
            
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
                map.on('touchend', function(e) {
                    let position = [e.lnglat.getLng(), e.lnglat.getLat()];
                    if( marker ){
                        marker.setPosition( position );
                    }else{
                        marker = new AMap.Marker({
                            icon: "http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
                            position: position
                        });
                        marker.setMap(map); 
                    }

                });
            }else{
                setTimeout(()=>{
                    location.reload(); 
                }, 3000);
            }
        }
    }
</script>

<style lang="less">

</style>








