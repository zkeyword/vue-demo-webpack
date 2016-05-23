<style lang="less">
    @import '../../../less/lib/mixins.less';
    .page-user-work-accept{
		.rem(font-size, 30);
        .item{
            position: relative;
            background:#fff;
            .border-radius(8);
            .rem(margin-bottom, 20);
            .rem(padding, 20);
        }
            header{
                border-bottom:2px solid #dedede;
                .rem(border-bottom-width, 2);
                .rem(padding-bottom, 10);
                .rem(margin-bottom, 10);
            }
                .photoWrap{
                    position: absolute;
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
                .textWrap{
                    .rem(padding-left, 110);
                    .header{
                        .rem(padding-bottom, 10)
                    }
                        .time{
                            color:#b2b2b2
                        }
                }

            .info{
                .salary{
                    color: #ff946e;
                }
                span{
                    color: #b2b2b2;
                }
                .btn{
                    border:2px solid #2fd380;
                    .rem(border-width, 2);
                    .border-radius(8);
                    color:#2fd380;
                    font-style:normal;
                    .rem(font-size, 30);
                    .rem(padding, 0, 10);
                    &.disable{
                        color:#b2b2b2;
                        border-color: #b2b2b2;
                    }
                }
            }
    }
</style>

<template>
    <div class="page-user-work-accept">
        <header-bar :title="title" :back="true"></header-bar>

        <div class="content showHeader">
            <div id="wrapper">
				<div id="scroller" v-infinite-scroll="loadMore()" infinite-scroll-disabled="busy" infinite-scroll-distance="40">
					<div class="item" v-for="item in dataList">
						<header class="clearfix" v-link="{name: 'userWorkAcceptDetail', query: {'order_id': item.order_id}}">
							<div class="photoWrap">
								<img :src="item.head_img_url">
							</div>
							<div class="textWrap">
								<div class="header clearfix">
									<span class="name">{{item.scene_name}}</span>
									<span class="time pull-right">{{item.create_time}}</span>
								</div>
								<div class="text">{{item.detail}}</div>
							</div>
						</header>
						<div class="info">
							<div class="salary clearfix">
								<div class="pull-left">报酬: {{item.salary}}元/{{item.unit}}</div>
								<div class="pull-right">
									<i class="btn" 
										v-link="{ name: 'userWorkAppraise', query:{appraise_type:'1', order_id:item.order_id, to_id: item.to_id} }" v-if="item.is_appraise"
									>评价</i>
									<i class="btn disable" 
										v-link="{ name: 'userWorkAppraise', query:{appraise_type:'1', order_id:item.order_id, to_id: item.to_id} }"
										v-if="!item.is_appraise"
									>已评价</i>
								</div>
							</div>
							<div>
								时间: <span>{{item.start_time}} {{item.end_time}} {{item.period_times}}</span>
							</div>
							<div>
								服务位置: <span>{{item.workplace}}</span>
							</div>
						</div>
					</div>
                    <div class="lodding" v-show="busy && !noData"></div>
				</div>
			</div>
        </div>
		
		<toast :show.sync="isShowToast" :time="1000">{{toastText}}</toast>
		
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '发单任务',
                noData: false,
				busy: false,
				dataList: [],
				isShowToast: false,
				toastText: '没有数据了！',
                formData:{
					currentPage: 1
				},
                appraiseText:['评价','已评价']
            }
        },
        route: {
            data (transition){
                let self     = this,
                    query    = transition.to.query;

                $.extend(self.formData, query);
				
				if( !self.busy ) self.loadMore();
            },
			deactivate(){
				let self = this;
				self.formData.currentPage = 1;
			}
        },
        methods:{
            loadMore(){
                let self = this;
                if( self.noData ) return;
                $.ajax({
                    url: "/soytime/order/receiveList",
                    type:'POST',
                    data: self.formData,
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
            }
        },
        components: {
            'headerBar': require('../../../components/header.vue'),
			'toast': require('../../../components/toast')
        }
    }
</script>