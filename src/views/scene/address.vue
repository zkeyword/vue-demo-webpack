<style lang="less">
    @import '../../less/lib/mixins.less';
    .page-scene-address{
        .rem(font-size, 30);
        .header{
            position:relative;
            .rem(padding-right, 200);
            input{
                .rem(height, 80);
                .rem(line-height, 80);
                .rem(padding, 10);
                .border-radius(8);
                border:1px solid #dedede;
                .rem(border-width, 2);
                width:100%;
            }
            .btn{
                position: absolute;
                top:0;
                right:0;
                .rem(height, 80);
                .rem(line-height, 80);
                .rem(width, 180);
                text-align: center;
                background: #11cd6e;
                color:#fff;
                .border-radius(8);
            }
        }
        .main{
            .tit{
                .rem(padding, 10, 0);
            }
        }
            .item{
                .rem(margin-bottom, 20);
                .rem(padding, 20);
                .border-radius(8);
                background:#fff;

                .pull-left{
                    .rem(height, 40);
                    .rem(line-height, 40);
                }

                .pull-right{
                    color:#b2b2b2;
                    .rem(height, 40);
                    .rem(line-height, 40);
                    span{
                        float: left;
                    }
                    .ico{
                        .rem(font-size, 40);
						&.ico-shanchu{
							.rem(margin-left, 20);
						}
                    }
                }
            }
    }
</style>

<template>
    <div transition="page" class="page-scene-address page-current">
        <header-bar :title="title" :back="true"></header-bar>
        <div class="content showHeader">
            <div class="header">
                <input type="text" v-model="addressText" placeholder="如：厦门市思明区中山路">
                <span class="btn" @click="addAddress">新增位置</span>
            </div>
            <div class="main">
                <div class="tit">历史位置:</div>
                <div class="item clearfix" v-for="item in addressData">
                    <span class="pull-left">{{item.address}}</span>
                    <div class="pull-right">
                        <span @click="setAddress($index)">
                            <span class="ico ico-yixuan"></span>
                            <span>选择地址</span>
                        </span>
                        <span class="ico ico-shanchu" @click="removeAddress($index)"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <confirm :show.sync="isShowConfirm" @on-confirm="confirm">
        确认删除该地址?
    </confirm>
	<loading :show="isShowloading" :text="loadingText"></loading>
    <toast :show.sync="isShowToast" :time="1000">{{toastText}}</toast>
</template>

<script>
    export default {
        data(){
            return {
                title: '位置',
                formData: {},
                addressData: [],
                isShowConfirm: false,
                removeIndex: null,
                addressText: null,
                isShowToast: false,
                toastText: '',
				isShowloading: false,
				loadingText: '提交中,请稍后!'
            }
        },
        route:{
            data (transition){
                let self  = this,
                    query = transition.to.query;

                $.extend(self.formData, query);

                $.ajax({
                    url: "/soytime/address/list",
                    type:'POST',
                    dataType: 'json',
                    success: ((data)=>{
                        self.addressData = data.result;
                    })
                });
            }
        },
        methods:{
            addAddress(){
            	
            	let self = this,
            	map  = new AMap.Map("container", {
                    resizeEnable: true
                });
            	
                if(self.addressText == null){
                	return;
                }
                self.addressText = self.addressText.replace(" ", "")
                if(self.addressText.length<6){
                	self.isShowToast = true;
					self.toastText   = '请输入详细地址哦';
                	return;
                }
            	
				self.isShowloading = true;
                map.plugin('AMap.Geocoder', function () {
                    let geocoder = new AMap.Geocoder({
                        radius: 1000
                    });
                    geocoder.getLocation(self.addressText, function(status, result) {
                        if (status === 'complete' && result.info === 'OK') {
                            let data = result.geocodes[0].location;
                            $.ajax({
                                url: "/soytime/address/add",
                                type:'POST',
                                dataType: 'json',
                                data:{
                                    address: self.addressText,
                                    longitude: data.lng,
                                    latitude: data.lat
                                },
                                success: ((data)=>{
                                    self.addressData.unshift(data.result);
                                    self.addressText = null;
									self.isShowloading = false;
                                }),
								error: ((data)=>{
									self.isShowToast = true;
									self.toastText   = '定位失败';
									self.isShowloading = false;
								})
                            });
                        }
                    });
                });
            },
            setAddress(index){
                let self = this,
                    data = self.addressData[index];
                if( self.formData.type == 0 ){
                    self.formData.comp_addr      = data.address;
                    self.formData.comp_longitude = data.longitude;
                    self.formData.comp_latitude  = data.latitude;
                }else{
                    self.formData.workplace      = data.address;
                    self.formData.work_longitude = data.longitude;
                    self.formData.work_latitude  = data.latitude;
                }
                // 0 是一键下单
                if( self.formData.pageType == 0 ){
                    self.$route.router.go({name: 'sceneOneKeyOrder', query: self.formData});
                }else{
                    self.$route.router.go({name: 'sceneInviteOrder', query: self.formData});
                }
            },
            removeAddress(index){
                let self = this;
                self.isShowConfirm = true;
                self.removeIndex   = index;
            },
            confirm(){
                let self = this;

                $.ajax({
                    url: "/soytime/address/del",
                    type:'POST',
                    dataType: 'json',
                    data:{
                        id: self.addressData[self.removeIndex].id
                    },
                    success: ((data)=>{
                        self.addressData.splice(self.removeIndex, 1);
                        self.isShowConfirm = false;
                    })
                });
            }
        },
        components: {
            'headerBar': require('../../components/header.vue'),
            'confirm': require('../../components/confirm'),
            'toast': require('../../components/toast'),
            'loading': require('../../components/loading')
        }
    }
</script>
