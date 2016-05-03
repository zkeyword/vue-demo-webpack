<style lang="less">
    @import '../../../less/lib/mixins.less';
    .page-user-work-publishDetail{
        .rem(font-size, 30);

        .header{
            background:#fff;
            .border-radius(8);
            .rem(margin, 0, 0, 30);
            header{
                text-align:center;
                border-bottom:1px solid #dedede;
                .rem(border-bottom-width, 2);
                .rem(height, 80);
                .rem(line-height, 80);
                .rem(font-size, 30);
                .rem(margin, 0, 20);
            }
            section{
                font-style: normal;
                position: relative;
                .rem(padding, 20);
                i{color:#b2b2b2;font-style: normal}
                .money{
                    position: absolute;
                    .rem(top, 16);
                    .rem(right, 20);
                    span{
                        color: #ff946e;
                    }
                }
            }
            footer{
                border-top:1px solid #dedede;
                .rem(border-top-width, 2);
                .rem(padding, 20);
                background:#fff;
            }
        }

        .item{
            .rem(margin, 0, 0, 30);
            background:#fff;
            .border-radius(8);
            header{
                border-bottom:2px solid #dedede;
                .rem(border-bottom-width, 2);
                .rem(padding, 20);
                .rem(font-size, 30);

                .photoWrap{
                    .rem(margin-right, 20);
                    .rem(width, 90);
                    .rem(height, 90);
                    .border-radius(90);
                    img{
                        width:100%;
                        height:100%;
                        .border-radius(120);
                    }
                }

                .school{
                    .rem(font-size, 24);
                    color:#5e5e5e;
                }

                .ico-dianhua{
                    color: #b2b2b2;
                    .rem(margin-top, 10);
                    .rem(font-size, 80);
                    &.cur{
                        color: #11cd6e;
                    }
                }
            }

            section{
                border-bottom:1px solid #dedede;
                .rem(border-bottom-width, 2);
                .rem(padding, 20);
            }

            footer{
                .rem(height, 50);
                .rem(line-height, 50);
                span{
                    display: inline-block;
                    text-align: center;
                }
                .no{
                    width: 50%;
                    float: left;
                    color: #5e5e5e;
                    .rem(border-bottom-left-radius, 8);
                }
                .yes{
                    width: 50%;
                    float: left;
                    background: #11cd6e;
                    color: #fff;
                    .rem(border-bottom-right-radius, 8);
                }
                .pass{
                    width: 100%;
                    background:#54c5ff;
                    color: #fff;
                    .border-radius(8, bottom);
                    &.disable{
                         background: #b2b2b2;
                     }
                }
            }
        }
    }
</style>

<template>
    <div class="page-user-work-publishDetail">
        <header-bar :title="title" :back="true"></header-bar>

        <div class="content showHeader">
            <div class="header clearfix">
                <header>{{formData.scene_name}}</header>
                <section>
                    <ul>
                        <li class="clearfix">
                            <span class="label">公司地址：</span>
                            <span class="field">{{formData.workplace}}</span>
                        </li>
                        <li class="clearfix">
                            <span class="label">工作任务：</span>
                            <span class="field">{{formData.scene_name}}</span>
                        </li>
                        <li class="clearfix">
                            <span class="label">需要人数：</span>
                            <span class="field">{{formData.number}}人<i>(指定{{formData.stu_name}})</i><span>
                        </li>
                        <li class="clearfix">
                            <span class="label">工作时间：</span>
                            <span class="field">{{formData.start_time}}-{{formData.end_time}}</span>
                        </li>
                        <li class="clearfix">
                            <span class="label">时间段：</span>
                            <span class="field">{{formData.period_times}}</span>
                        </li>
                    </ul>
                    <div class="money"><span>{{formData.salary}}元</span>/{{formData.unit}}</div>
                </section>
                <footer>
                    <div>工作内容：</div>
                    <div>{{formData.detail}}</div>
                </footer>
            </div>
            <div class="item clearfix" v-for="item in tmpData">
                 <header class="clearfix">
                    <div class="pull-left photoWrap">
                        <img :src="item.head_img_url" />
                    </div>
                    <div class="pull-left nameWrap">
                        <div class="name">
                            <i class="icon"
                               :class="{'icon-xingbienan2': item.sex == 1, 'icon-xingbienv2': item.sex == 2}"
                            ></i>
                            {{item.usernick}}
                        </div>
                        <div class="school clearfix">{{item.school_name}}</div>
                    </div>
                    <i class="ico ico-dianhua pull-right" v-if="!item.mobile" ></i>
                    <a class="ico ico-dianhua pull-right cur" v-if="item.mobile" href="tel:item.mobile"></a>
                </header>
                <section>{{item.skill_detail}}</section>
                <footer class="clearfix">
                    <span class="no" v-if="item.status == 1 && item.is_checked == 0" @click="refuseStu($index)">拒绝</span>
                    <span class="yes" v-if="item.status == 1 && item.is_checked == 0" @click="getStuMobile($index)">约TA</span>
                    <span class="pass" v-if="item.status == 1 && item.is_checked == 1">已约</span>
                    <span class="pass disable" v-if="item.status == 1 && item.is_checked == 2">已拒绝</span>
                    <span class="pass disable" v-if="item.status == 2">学生已拒绝</span>
                </footer>
            </div>
        </div>
    </div>
    <alert :show.sync="showAlert" title="">{{alertText}}</alert>
	<confirm :show.sync="isShowConfirm" @on-confirm="confirm" title="">
        {{confirmText}}
    </confirm>
</template>

<script>
    export default {
        data() {
            return {
                title: '订单详细',
                formData: {},
				tmpData: [],
                showAlert: false,
				isShowConfirm: false,
                alertText: '',
				confirmText:'',
				type: null,
				index: null
            }
        },
        route: {
            data (transition){
                let self     = this,
                    query    = transition.to.query;

                $.extend(self.formData, query);

                $.ajax({
                    url: "/soytime/order/demandDetail",
                    type:'POST',
                    dataType: 'json',
                    data: {
                        order_id: self.formData.order_id
                    },
                    success: ((data)=>{
                        self.formData = data.result;
						if(self.formData.orderResponse) self.tmpData.push( self.formData.orderResponse );
						if(self.formData.orderResponses) self.tmpData = self.tmpData.concat( self.formData.orderResponses );
                    })
                });
            },
            deactivate(){
                let self = this;
                self.formData = {};
                self.tmpData  = [];
            }
        },
        methods:{
			confirm(){
				let self          = this,
					index         = self.index,
					orderResponse = self.tmpData[index];
				
				if( self.type == 1 ){
					$.ajax({
						url: "/soytime/order/getStuMobile",
						type:'POST',
						dataType: 'json',
						data:'order_id='+orderResponse.order_id+'&stu_id='+orderResponse.stu_id,
						success: (data)=>{
							if( !data.success ){
								self.showAlert = true;
								self.alertText = data.msg;
							}else{
								self.tmpData[index].is_checked = 1;
								self.tmpData[index].mobile = data.result;
							}
						}
					});
				}else{
					$.ajax({
						url: "/soytime/order/refuseStu",
						type:'POST',
						dataType: 'json',
						data:'order_id='+orderResponse.order_id+'&stu_id='+orderResponse.stu_id,
						success: (data)=>{
							if( !data.success ){
								alert(data.msg);
							}else{
								self.tmpData[index].is_checked = 2;
							}
						}
					});
				}
				self.isShowConfirm = false;
			},
			getStuMobile(index){
				let self           = this;
				self.index         = index;
				self.confirmText   = "确认约TA";
				self.isShowConfirm = true;
				self.type          = 1;
				console.log(self.index)
			},
			refuseStu(index){
				let self           = this;
				self.index         = index;
				self.confirmText   = "确认拒绝TA";
				self.isShowConfirm = true;
				self.type          = 2;
			}
        },
        components: {
            'headerBar': require('../../../components/header.vue'),
            'alert': require('../../../components/alert'),
			'confirm': require('../../../components/confirm')
        }
    }
</script>