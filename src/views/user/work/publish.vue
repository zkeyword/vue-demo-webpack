<style lang="less">
    @import '../../../less/lib/mixins.less';
    .page-user-work-publish{
        .filter{
            position: absolute;
            left: 0;
            top: 2.2rem;
            z-index: 10;
            height: 2.2rem;
            background:#fff;
            width:100%;
            border-bottom:2px solid #b2b2b2;
            .rem(border-bottom-width, 2);

            li{
                width:33.333%;
                float:left;
                text-align:center;
                line-height:1.4rem;
                margin:0.4rem 0;
                .rem(font-size, 30);
                &:first-child{
                     border-right:2px solid #b2b2b2;
                    .rem(border-right-width, 2);
                }
                &:last-child{
                     border-left:2px solid #b2b2b2;
                    .rem(border-left-width, 2);
                }
                .icon{
                    .rem(margin-left, 10);
                }
                span{
                    &.cur{
                         color:#54c5ff
                         //border-bottom:1px solid #54c5ff;
                        //.rem(border-bottom-width, 2);
                     }
                }
            }
        }



        .item{
            position:relative;
            background:#fff;
            .border-radius(8);
            .rem(margin-bottom, 30);
            position:relative;

            section{
                .rem(padding, 20);
                .rem(font-size, 30);
                position:relative;
            }


            .tag{
                position:absolute;
                .rem(top, -10);
                .rem(left, -20);
                background:#11cd6e;
                color:#fff;
                transform:rotate(-30deg);
                -webkit-transform:rotate(-30deg);
                .border-radius(8);
                .rem(padding, 10, 20);
                .rem(font-size, 24);

                &.over{
                     background:#b2b2b2
                 }
            }

            header{
                text-align:center;
                border-bottom:1px solid #dedede;
                .rem(border-bottom-width, 2);
                .rem(height, 80);
                .rem(line-height, 80);
                .rem(font-size, 30);
                .status{
                    position: absolute;
                    top:0;
                    .rem(right, 20);
                    .rem(height, 80);
                    .rem(line-height, 80);
                }
            }

            .commit{
                position: absolute;
                .rem(top, 20);
                .rem(right, 20);
                .ico{
                    float: left;
                    .rem(font-size, 50);
                    color: #54c5ff;
                    .rem(margin-right, 10)
                }
                span{
                    float: left;
                    display: inline-block;
                    color: #11cd6e;
                    border:1px solid #11cd6e;
                    .rem(border-width, 2);
                    .border-radius(8);
                    .rem(height, 50);
                    .rem(line-height, 50);
                    .rem(padding, 0, 20);
                    .rem(font-size, 28);
                }
            }

            .address, .number{
                color: #b2b2b2;
                .rem(font-size, 30);
                text-align: right;
            }

            footer{
                border-top:1px solid #dedede;
                .rem(border-top-width, 2);
                .rem(padding, 0, 20);
                .rem(font-size, 30);

                .textWrap{
                    .rem(padding, 10, 0);
                    div{
                        .rem(padding, 5, 0);
                    }
                    .mark{
                        color:#b2b2b2;
                    }
                }
            }

            .userList{
                li{
                    position: relative;
                    border-top:1px solid #dedede;
                    .rem(border-top-width, 2);
                    .rem(height, 80);
                    .rem(line-height, 80);
                    .ico-xuan{
                        color:#b2b2b2;
                        &.cur{
                             color:#11cd6e;
                        }
                    }
                    .commit{
                        .rem(top, 14);
                        .rem(right, 14);
                    }
                }
            }
        }
    }
</style>

<template>
    <div class="page-user-work-publish">
        <header-bar :title="title" :back="true"></header-bar>

        <ul class="filter clearfix">
            <li @click="setTag(1)">
                <span :class="{'cur':formData.tag == 1}">最近订单</span>
            </li>
            <li @click="setTag(2)">
                <span :class="{'cur':formData.tag == 2}">历史订单</span>
            </li>
            <li @click="setTag(3)">
                <span :class="{'cur':formData.tag == 3}">待评价</span>
            </li>
        </ul>

        <div class="content showHeader showTab">
            <div id="wrapper">
				<div id="scroller" v-infinite-scroll="loadMore()" infinite-scroll-disabled="busy" infinite-scroll-distance="40">
					<div class="item" v-for="(index,item) in dataList">
						<span class="tag">{{item.scene_name}}</span>
						<header class="clearfix" v-link="{ name: 'userWorkPublishDetail', query:item }">
							{{item.create_time}}
							<div class="status">{{ statusText[item.status] }}</div>
						</header>
						<section class="clearfix">
							<div v-if="item.orderRespon">
								<div class="commit clearfix">
									<a href="tel:{{item.orderRespon.mobile}}" class="ico ico-dianhua3"></a>
									<span v-if="item.orderRespon.is_appraise" 
										v-link="{ name: 'userWorkAppraise', query:{appraise_type:'2', order_id:item.order_id, to_id: item.stu_id} }"
									>评价</span>
								</div>
								<div>指定接单人：{{item.orderRespon.nickname}}</div>
							</div>
							<div>{{item.detail}} </div>
							<div class="number">预定人数：{{item.number}}人</div>
							<div class="address">工作地点：{{item.workplace}}</div>
						</section>
						<footer v-if="item.orderResponses">
							<div class="textWrap">
								<div>报名人数：{{resultResponse.responseCount}}人&nbsp;&nbsp;已选{{resultResponse.selectedCount}}人，剩余{{resultResponse.restCount}}人可选</div>
								<div class="mark">报名者，请获取一个人的联系方式</div>
							</div>
							<ul class="userList">
								<li class="clearfix" v-for="(subIndex,subItem) in item.orderResponses">
									<div class="nameWrap" @click="getMobile(item, subItem, index, subIndex)">
										<i class="ico ico-xuan" :class="{'cur': subItem.is_checked == 1}"></i>
										<span class="name">{{subItem.nickname}}</span>
									</div>
									<div class="commit">
										<a v-if="subItem.is_checked == 1" href="tel:{{subItem.mobile}}" class="ico ico-dianhua3"></a>
										<span 
											v-link="{ name: 'userWorkAppraise', query:{appraise_type:'2', order_id:item.order_id, to_id: subItem.stu_id} }"
										>评价</span>
									</div>
								</li>
							</ul>
						</footer>
					</div>
                    <div class="lodding" v-show="busy && !noData"></div>
				</div>
            </div>
        </div>
		
		<toast :show.sync="isShowToast" :time="1000">{{toastText}}</toast>
		
    </div>
    <confirm :show.sync="isShowConfirm" @on-confirm="confirm">
        <div class="page-scene-orderSuccess-formWrap">
            是否要获取{{confirmName}}的联系方式？
        </div>
    </confirm>
</template>

<script>
export default {
	data() {
		return {
			title: '发单任务',
            indexData: indexData,
			userInfo: {},
            noData: false,
			busy: false,
            dataList: [],
			isShowToast: false,
			toastText: '没有数据了！',
			formData: {
				currentPage: 0,
				tag: 1,
			},
            isShowConfirm: false,
            confirmData:{},
            statusText:['报名中','报名结束','报名成功','被拒绝','过期']
		}
	},
	route: {
		data (transition){
			let self     = this,
				query    = transition.to.query;

			$.extend(self.formData, query);
		},
        deactivate(){
			let self = this;
			self.formData.currentPage = 1;
        }
	},
	methods:{
        setTag(tag){
			let self = this;
            self.formData.tag = tag;
			self.formData.currentPage = 1;
			self.dataList = [];
			self.noData = false
			self.busy = false;
			self.loadMore();
		},
        loadMore(){
            let self = this;
            if( self.noData ) return;
            $.ajax({
                url: "/soytime/order/demandList",
                type:'POST',
                data:self.formData,
                dataType: 'json',
                beforeSend:(()=>{
                    self.busy = true;
                }),
                success: ((data)=>{
                    let arr = data.result,
                        len = arr.length;

                    self.busy = false;

                    if( !len || !data.success ){
						self.isShowToast = true;
						self.noData = true;
                        return;
					}else if( len < 10 ){
						self.isShowToast = true;
                        self.noData = true;
                    }

                    for(let i = 0; i<len; i++){
                        self.dataList.push(arr[i]);
                    }

                    self.formData.currentPage ++;
                })
            });
        },

        confirm(){
            let self = this;
            self.isShowConfirm = false;
            $.ajax({
                url: "/soytime/order/getStuMobile",
                type:'POST',
                data:{
                    type: self.confirmData.order_type,
                    order_id: self.confirmData.order_id,
                    stu_id: self.confirmData.stu_id
                },
                dataType: 'json',
                success: ((data)=>{
                    //self.dataList[self.confirmData.index].resultResponse.restCount = data.remainCount;
                    let orderResponses = self.dataList[self.confirmData.index].orderResponses[self.confirmData.subIndex];
                    orderResponses.mobile = data.result.mobile;
                    orderResponses.is_checked = 1;
                })
            });
        },
        getMobile(item, subItem, index, subIndex){
            let self = this;
            self.isShowConfirm = true;
            self.confirmName   = subItem.nickname;
            self.confirmData   = {
                item: item,
                subItem: subItem,
                index: index,
                subIndex: subIndex
            }
        }
	},
	components: {
		'headerBar': require('../../../components/header.vue'),
        'confirm': require('../../../components/confirm'),
		'toast': require('../../../components/toast')
	}
}
</script>