<style lang="less">
@import '../../less/lib/mixins.less';
.page-user-money{
    .moneyHeader{
        .rem(height, 400);
        background:url(../../img/moneyBg.jpg) no-repeat;
        background-size:100% 100%;
        position:relative;
        
        header{
            text-align:center;
            color:#fff;
            .rem(padding, 110, 0, 0);
            span{
                position:relative;
                .rem(font-size, 70);
            }
            i{
                position:absolute;
                left:0;
                font-style: normal;
                .rem(top, -30);
                .rem(font-size, 20);
            }
        }
        
        footer{
            position:absolute;
            bottom:0;
            left:0;
            width:100%;

            span{
                position:relative;
                z-index:1;
                float:left;
                width:50%;
                text-align:center;
                .rem(padding, 30);
                .rem(font-size, 34);
                .rem(margin, 20, 0);
                &:last-child{
                    border-left:1px solid #dedede;
                }
                &:first-child{
                    border-right:1px solid #dedede;
                }
            }
            
            div{
                background:#fff;
                position:absolute;
                left:0;
                top:0;
                height:100%;
                width:100%;
                .opacity(0.5);
                z-index:0;
            }
        }
    }
    .moneyList{
        background:#fff;
        
        header{
            background:#fafafa;
            border-bottom:2px solid #f1f1f1;
            .rem(border-bottom-width, 2);
            .rem(height, 64);
            .rem(line-height, 64);
            .rem(font-size, 30);
            .rem(padding, 0, 30);
        }
        
        ul{
            .rem(margin, 0, 30);
            color:#888;
        }
        
        .item{
            border-bottom:2px solid #dedede;
            .rem(border-bottom-width, 2);
            .rem(padding, 15, 0);
        }
    }
}
</style>

<template>
    <div class="page-user page-user-money" transition="page">
        <header-bar :title="title" back="true"></header-bar>
        <div class="content showHeaderNopading">
			<div id="wrapper">
				<div id="scroller" v-infinite-scroll="loadMore()" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
					<div class="moneyHeader">
						<header>
							<span><i>账户余额</i>{{formData.balance}}</span>
						</header>
						<footer class="clearfix">
							<div></div>
							<span>转入</span>
							<span>转出</span>
						</footer>
					</div>
					<div class="moneyList">
						<header>交易记录</header>
						<ul>
							<li class="item clearfix" v-for="tradeRecord in dataList">
								{{typeText[ tradeRecord.type - 1]}}
								{{tradeRecord.create_time}}
								{{tradeRecord.amount}}元
							</li>
						</ul>
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
			title: '我的余额',
			userInfo: {},
            currentPage: 1,
            typeText: ['充值','取现', '下单', '接单', '接单红包','分享红包', '转账'],
            noData: false,
			busy: false,
            dataList: [],
			isShowToast: false,
			toastText: '没有数据了！',
			formData: {
                balance: 0,
				currentPage: 1,
            }
		}
	},
	route: {
		data (transition){
			let self = this;
				
            $.ajax({
                url: "/soytime/account/balance",
                type:'POST',
                dataType: 'json',
                success: (data)=>{
                    $.extend(self.formData, data.result);
                }
            });
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
                url: "/soytime/account/tradeRecord",
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
        }
    },
	components: {
        'headerBar': require('../../components/header.vue'),
		'toast': require('../../components/toast')
	}
}
</script>









