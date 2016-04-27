<style lang="less">
    @import '../../../less/lib/mixins.less';
    .page-user-work-server{
        .content{
            padding-left:0;
            padding-right:0;
        }
        
            .userHeader{
                .rem(max-height, 350);
                overflow:hidden;
                position:relative;
                
                img{
                    width:100%;
                }
                
                .userWrap{
                    position:absolute;
                    left:0;
                    width:100%;
                    .rem(top, 70);
                    
                    .btn{
                        .rem(width, 150);
                        .rem(height, 150);
                        margin:0 auto;
                        position:relative;
                        text-align:center;
                        
                        .radius{
                            width:100%;
                            height:100%;
                            background:#fff;
                            position:absolute;
                            .border-radius(150);
                            .opacity(0.5);
                            top:0;
                            left:0;
                            z-index: 1;
                        }
                        .ico{
                            text-align:center;
                            position:absolute;
                            .rem(font-size, 50);
                            .rem(line-height,150);
                            .rem(width, 150);
                            .rem(height, 150);
                        }
                        .text{
                            .rem(padding, 100, 0, 0);
                            .rem(font-size, 24);
                            position: relative;
                            z-index: 2;
                            color: #fff;
                        }
                    }
                    
                    .name{
                        text-align:center;
                        .rem(font-size, 50);
                        color:#fff;
                    }
                }
            }
            
            .block{
                background:#fff;
                .rem(padding, 26, 16);
                .rem(margin, 0, 26, 20);
                position:relative;
                
                .header{
                    .rem(font-size, 30);
                }
                
                textarea{
                    width:100%;
                    border:0 none;
                    .rem(font-size, 30);
                }

                .serverImgs{
                    .rem(height, 120);
                    .rem(line-height, 120);
                    .rem(width, 120);
                    float: left;
                    .rem(margin-right, 10);

                    img{
                        width:100%;
                        float:left;
                    }

                    .btnWrap{
                        color:#b2b2b2;
                        background: #dedede;
                        text-align:center;
                        .ico{
                            .rem(font-size, 40);
                        }
                     }
                }

                .mapWrap{
                    .map{
                        background:url(../../../img/mapImg.png) no-repeat;
                        .rem(background-size, 750, 118);
                        .rem(height, 118);
                        .border-radius(8);
                        position: relative;
                        color:#333;
                        .rem(margin-right, 140);
                        .ico{
                            display: inline-block;
                            color:#54c5ff;
                            .rem(width, 70);
                            .rem(font-size, 40);
                            text-align: center;
                            .rem(height, 118);
                            .rem(line-height, 118);
                            position: absolute;
                            top:0;
                            left:0;
                        }
                        div{
                            .rem(height, 118);
                            .rem(padding, 10, 10, 10, 70);
                            vertical-align: middle;
                            display: table-cell;
                            overflow: hidden;
                            .rem(font-size, 24);
                        }
                    }

                    .icoWrap{
                        display: table;
                        position: absolute;
                        .rem(top, 30);
                        .rem(right, 16);
                        .rem(width, 120);
                        .rem(height, 150);
                        border-left:1px solid #dedede;
                        .rem(padding, 30, 0, 30, 20);
                        .rem(border-left-width, 2);
                        text-align: center;
                        .rem(font-size, 24);
                        div{
                            display: table-row;
                        }
                        .ico{
                            display: table-row;
                            .rem(font-size, 60);
                            color:#11cd6e;
                        }
                    }
                }
            }
    }
</style>

<template>
    <div class="page-user-work-server">
        <header-bar :title="title" back="true"></header-bar>
        
        <div class="content showHeaderNopading showFooter">

            <div class="userHeader">
                <img src="/dist/defaultImg/serverDefault.jpg" v-if="!formData.photo_url" />
                <img :src="formData.photo_url" v-else />
                <div class="userWrap">
                    <div class="btn">
                        <div class="radius"></div>
                        <div class="ico ico-anonymous"></div>
                        <div class="text">添加照片</div>
                    </div>
                    <div class="name">{{formData.usernick}}</div>
                </div>
            </div>
        
            <div class="block">
                <div class="header">请选择工作类别(可多选)</div>
                <scene-type 
                    :scene-list="indexData.sceneList"
                    :scene-ids.sync="formData.sceneIds"
                ></scene-type>
            </div>
            
            <div class="block">
                <div class="header">个人描述</div>
                <textarea placeholder="请填写您的服务描述！">{{formData.detail}}</textarea>
            </div>
            
            <div class="block">
                <div class="header">上传照片</div>
                <ul class="clearfix">
                    <li class="serverImgs" v-for="item in formData.skillImgs">
                        <img :src="item.img_url" />
                    </li>
                    <li class="serverImgs btn" v-if="formData.skillImgs.length <= 3">
                        <div class="btnWrap">
                            <i class="ico ico-anonymous"></i>
                        </div>
                    </li>
                </ul>
            </div>
            
            <div class="block">
                <div class="header">工作区域(选择)</div>
                <div class="mapWrap">
                    <div class="map">
                        <i class="ico ico-zuobiao"></i>
                        <div>{{formData.workplace}}</div>
                    </div>
                    <div class="icoWrap" @click="getLocate">
                        <i class="ico ico-locate"></i>
                        <div>我的位置</div>
                    </div>
                </div>
            </div>
            
            <div class="block">
                <div class="header">工作时间</div>
                <time-conf :timer.sync="formData.timeConf"></time-conf>
            </div>
        </div>
        
        <span 
            class="ui-btn ui-btn-big"
            @click="save"
        >
            发布
        </span>

        <toast :show.sync="isShowToast" :time="1000">{{toastText}}</toast>
        <loading :show="isShowloading" :text="loadingText"></loading>
        
    </div>
</template>

<script>
export default {
	data() {
		return {
			title: '发布服务',
            isShowToast: false,
            toastText: '提交失败,请重试！',
            isShowloading: false,
            loadingText: '提交中,请稍后!',
            indexData: indexData,
			userInfo: {},
			formData: {}
		}
	},
    ready(){
        let self = this;
        $.ajax({
            url: "/soytime/server/myInfo",
            type:'POST',
            dataType: 'json',
            success: ((data)=>{
                self.formData = data.result;
            })
        });
    },
    methods:{
        getLocate(){
            let self = this;
            self.isShowloading = true;
            AMap.service(["AMap.Geolocation"], function() {

                var geolocation = new AMap.Geolocation({
                    enableHighAccuracy: true,//是否使用高精度定位，默认:true
                    timeout: 10000,          //超过10秒后停止定位，默认：无穷大
                    buttonPosition:'RB'
                });

                geolocation.getCurrentPosition();

                AMap.event.addListener(geolocation, 'complete', (data)=>{
                    AMap.service(["AMap.Geocoder"], function() { //加载地理编码
                        let geocoder  = new AMap.Geocoder({
                                radius: 1000,
                                extensions: "all"
                            }),
                            longitude = data.position.getLng(),
                            latitude  = data.position.getLat();

                        geocoder.getAddress([longitude, latitude], function(status, result) {
                            if (status === 'complete' && result.info === 'OK') {
                                self.formData.longitude = longitude;
                                self.formData.latitude  = latitude;
                                self.formData.workplace = result.regeocode.formattedAddress;
                                self.isShowloading      = false;
                            }
                        });
                    });
                });

                AMap.event.addListener(geolocation, 'error', (data)=>{
                    self.isShowToast = true;
                });
            });
        },
        save(){
            let self = this;

            $.ajax({
                url: "/soytime/server/saveInfo",
                type:'POST',
                dataType: 'json',
                data:self.formData,
                success: (data)=>{

                }
            });
        }
    },
	components: {
		'headerBar': require('../../../components/header.vue'),
        'timeConf': require('../../../components/timeConf.vue'),
        'sceneType': require('../../../components/sceneType.vue'),
        'toast': require('../../../components/toast'),
        'loading': require('../../../components/loading')

    }
}
</script>