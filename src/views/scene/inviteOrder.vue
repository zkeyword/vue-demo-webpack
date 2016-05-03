<style lang="less">
@import '../../less/lib/mixins.less';
.page-scene-inviteOrder{

    .userWrap{
        width:100%;

        .name{
            text-align:center;
            .rem(font-size, 38);
            .rem(padding, 10, 0);
            color:#333333;
        }

        .radius{
            .rem(width, 150);
            .rem(height, 150);

            margin:0 auto;
            position:relative;
            background:#fff;
            overflow:hidden;
            .border-radius(150);
            img{
                height:100%;
                width:100%;
                .border-radius(150);
            }
        }
    }
    
    .block{
        background:#fff;
        border:1px solid #dedede;
        .rem(border-width, 2);
        .border-radius(8);
        .rem(padding, 10);
        .rem(margin-bottom, 20);
        .rem(font-size, 30);

        input{
            border:0 none;
            float:right;
            text-align: right;
            .rem(height, 44);
            .rem(line-height, 44);
        }

        textarea{
            border: 0 none;
            width:100%;
            float: left;
            .rem(height, 150);
        }

        .item{
            border-bottom:1px solid #dedede;
            .rem(border-bottom-width, 2);
            .rem(padding-bottom, 10);
            .rem(margin-bottom, 10);
        }

        .half{
            width:50%;
            float:left;
            input{
                width:50%;
            }
            .time{
                .rem(padding, 0, 10, 0, 0);
                float:right;
            }
        }

        .unit{
            span{
                .rem(width, 44);
                .border-radius(44);
                .rem(font-size, 24);
                .rem(margin, 0, 0, 0, 10);
                background:#b2b2b2;
                text-align: center;
                color:#fff;
                &.cur{
                    background: #ff946e;
                }
            }
        }

        span{
            display: inline-block;
            .rem(height, 44);
            .rem(line-height, 44);
        }

        .ico-jiantouyou{color:#b2b2b2}

        .timeWrap{
            span{
                float: left;
            }
            input{
            .rem(width, 100);
                float:left;
                text-align:center
            }
            i{
                float:left;
            }
            .ico{
                float:left;
                .rem(height, 44);
                .rem(line-height, 44);
                .rem(padding-left, 10);
                .rem(font-size, 40);
            }
        }

    }
}
</style>

<template>
    <div class="page-scene-inviteOrder page-current">
        <header-bar :title="title" :back="true" target="scene"></header-bar>
        <div class="content showHeader showFooter">

            <div class="userWrap">
                <div class="btn">
                    <div class="radius">
                        <img :src="formData.head_img_url" v-if="!formData.photo_url" />
                        <img :src="formData.photo_url" v-else />
                    </div>
                </div>
                <div class="name">{{formData.usernick}}</div>
            </div>

            <div class="block clearfix">
                <span class="pull-left">任务类型</span>
                <span class="pull-right">{{formData.scene_name}}</span>
            </div>

            <div class="block clearfix">
                <div class="item clearfix">
                    <div class="half">
                        <span>开始时间</span>
                        <input type="text" id="start" v-model="formData.start_time" mobiscroll-datetime="settings">
                    </div>
                    <div class="half">
                        <span>结束时间</span>
                        <input type="text" id="end" v-model="formData.end_time" mobiscroll-datetime="settings">
                    </div>
                </div>
                <div class="item clearfix timeWrap" v-for="period in tempPeriodArr">
                    <span>时段：</span>
                    <input type="text" value="{{period[0]}}" class="period_start" mobiscroll-datetime="settings" placeholder="请选择">
                    <i>-</i>
                    <input type="text" value="{{period[1]}}" class="period_end" mobiscroll-datetime="settings" placeholder="请选择">
                    <i class="ico ico-close" @click="removePeriod($index)" v-if="$index"></i>
                </div>
                <div @click="addPeriod">
                    <i class="ico ico-anonymous"></i>添加时间段
                </div>
            </div>

            <div class="block clearfix">
                <textarea placeholder="请详细填写你的需求任务"></textarea>
            </div>

            <div class="block clearfix">
                <div class="item clearfix">
                    <div class="half">
                        <span>报酬</span>
                        <input type="text" placeholder="输入金额">
                    </div>
                    <div class="half unit">
                        <span v-for="unit in unitTextArr"
                              :class="{'cur': unit == formData.unit}"
                              @click="setUnit(unit)"
                        >
                            {{unit}}
                        </span>
                    </div>
                </div>
                <div class="clearfix payWay" @click="showActionsheet">
                    <span>支付方式</span>
                    <span class="pull-right" v-if="formData.pay_way">{{payTextArr[formData.pay_way-2]}}</span>
                    <span class="pull-right ico ico-jiantouyou" v-else></span>
                </div>
            </div>

            <div class="block clearfix">
                <div class="item clearfix">
                    <span>公司地址</span>
                    <input type="text" placeholder="请填写详细地址" v-model="formData.comp_addr" @click="setAddress(0)">
                </div>
                <div class="clearfix">
                    <span>服务位置</span>
                    <input type="text" placeholder="请输入准确位置" v-model="formData.workplace" @click="setAddress(1)">
                </div>
            </div>
        </div>

        <span
            class="ui-btn ui-btn-big"
            @click="save"
        >
            下单
        </span>

    </div>

	<alert :show.sync="showAlert" title="">提交失败!</alert>

</template>

<script>
    import utils from '../../lib/utils';
    export default {
        data(){
			return {
				indexData: indexData,
				title: '预约',
				formData: {
					scene_name: '',
					photo_url: '',
					head_img_url: '',
					usernick: '',
					nickname:'',
					school_name: '',
					school_id:'',
					sex:'男',
					height:'',
					scene_id:'',
					start_time:'',
					end_time:'',
					period_times:'',
					detail:'',
					salary:'',
					unit:'时',
					number:'',
					pay_way:'',
					welfares:'',
					comp_addr:'',
					comp_longitude:'',
					comp_latitude:'',
					workplace:'',
					work_longitude:'',
					work_latitude:'',
					auto_select:'1',
					form: 'inviteOrder'
				},
				unitTextArr:['时','日','周','月','次'],
				payTextArr:['现金支付','线上支付'],
				isShow: false,
                showAlert: false,
				actionsheet: {
					menu2: '现金支付',
					menu3: '线上支付'
				},
				tempPeriodArr: []
			}
		},
		route:{
			data (transition){
				let self  = this,
					query = transition.to.query

				$.extend(self.formData, query);
			}
		},
		ready(){
			let self = this;

			self.$store.state.getScrollerTime('#start', 0);
			self.$store.state.getScrollerTime('#end', 0);
			self.splitPeriod();
            self.addPeriod();
		},
		watch:{
			tempPeriodArr(){
				let self = this;
				self.$store.state.getScrollerTime('.period_start', 1);
				self.$store.state.getScrollerTime('.period_end', 1);
				self.joinPeriod();
			}
		},
		methods:{
			setUnit(unit){
				let self = this;
				self.formData.unit = unit;
			},
			setPayWay(key){
				let self = this;
				self.isShow = false;
				switch (key){
					case 'menu1':
						self.formData.pay_way = 1
						break;
					case 'menu2':
						self.formData.pay_way = 2
						break;
					case 'menu3':
						self.formData.pay_way = 3
						break;
				}
			},
			showActionsheet(){
				this.isShow = true;
			},
			splitPeriod(){
				let self   = this,
					temArr = [];

				temArr = self.formData.period_times ? self.formData.period_times.split(',') : [];

				for(let i = 0, len = temArr.length; i<len; i++){
					temArr[i] = temArr[i].split('-');
				}

				self.tempPeriodArr = temArr;
			},
			joinPeriod(){
				let self  = this,
					len   = self.tempPeriodArr.length,
					tmp   = [],
					start = $('.period_start'),
					end   = $('.period_end');

				for(let i = 0; i<len; i++){
					let startVal = start.eq(i).val(),
						endVal   = end.eq(i).val();
					if(startVal && endVal){
						tmp[i] = startVal + '-' + endVal;
					}
				}

				self.formData.period_times = tmp.join(',')
			},
			addPeriod(){
				let self = this;
				self.tempPeriodArr.push([]);
			},
			removePeriod(i){
				let self = this;
				self.tempPeriodArr.splice(i, 1);
			},
			switch(){
				let self = this;
				if( self.formData.auto_select == 1 ){
					self.formData.auto_select = 0;
				}else{
					self.formData.auto_select = 1;
				}
			},
			setAddress(type){
				let self = this;
				self.formData.type     = type;
				self.formData.pageType = 1;
				self.$route.router.go({name: 'sceneAddress', query: self.formData});
			},
			save(){
				let self = this;
				
				if( !self.formData.start_time ){
					self.showAlert = true;
					self.alertText = '开始时间不能为空!';
					return;
				}

				if( !self.formData.end_time ){
					self.showAlert = true;
					self.alertText = '开始时间不能为空!';
					return;
				}

				if( (new Date(self.formData.start_time)).valueOf() >= (new Date(self.formData.end_time)).valueOf() ){
					self.showAlert = true;
					self.alertText = '开始时间不能小于等于结束时间!';
					return;
				}
				
				self.joinPeriod();

				let tempPeriodArr  = self.formData.period_times.split(',');

				for(let i = 0, len = tempPeriodArr.length; i<len; i++){
					let item = tempPeriodArr[i],
						arr  = item.split('-');
					if( !arr[0] || !arr[1] ){
						self.showAlert = true;
						self.alertText = '时间段不能为空!';
						return;
					}
					console.log( (new Date('2016-01-01 '+arr[0])).valueOf() , (new Date('2016-01-01 '+arr[1])).valueOf() )
					if( (new Date('2016-01-01 '+arr[0])).valueOf() >= (new Date('2016-01-01 '+arr[1])).valueOf() ){
						self.showAlert = true;
						self.alertText = '开始时间段要小于结束时间段!';
						return;
					}
				}
				
				if(!self.formData.detail || self.formData.detail.replace(" ","").length <10){
					self.alertText = '请描述任务详情，长度不少于10字';
					self.showAlert = true;
					return;
				}

				let a=/^[0-9]*(\.[0-9]{1,2})?$/;
				if(self.formData.salary == '' || !a.test(self.formData.salary)){
					self.alertText = '金额错误';
					self.showAlert = true;
					return;
				}
				
				if(self.formData.pay_way == ''){
					self.alertText = '请选择支付方式';
					self.showAlert = true;
					return;
				}
				
				// 位置
				if(self.formData.comp_addr == ''){
					self.alertText = '公司地址不能为空';
					self.showAlert = true;
					return;
				}
				
				if(self.formData.workplace == ''){
					self.alertText = '服务地址不能为空';
					self.showAlert = true;
					return;
				}

				$.ajax({
					url: "/soytime/order/inviteOrder",
					type:'POST',
					dataType: 'json',
					data:self.formData,
					success: (data)=>{
                        if( !data.success ){
                            self.showAlert = true;
                        }else{
                            //self.$route.router.go({name: 'sceneOrderSuccess', query: {order_id: data.result.order_id}});
                            self.$route.router.go({name: 'userWorkPublish', query: {}});
                        }
					}
				});
			}
		},
		components: {
			'headerBar': require('../../components/header.vue'),
			'actionsheet': require('../../components/actionsheet'),
            'alert': require('../../components/alert')
		}
    }
</script>
