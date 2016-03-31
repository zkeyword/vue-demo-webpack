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
        
        li{
            border-bottom:2px solid #dedede;
            .rem(border-bottom-width, 2);
            .rem(padding, 15, 0);
        }
        
        footer{
            color:#b2b2b2;
            text-align:center;
            .rem(padding, 30);
            .rem(font-size, 24);            
        }
    }
}
</style>

<template>
    <div class="page-user page-user-money" transition="page">
        <header-bar :title="title" back="true"></header-bar>
        <div class="content showHeaderNopading">
            <div class="moneyHeader">
                <header>
                    <span><i>账户余额</i>121212.00</span>
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
                    <li class="clearfix" v-for="tradeRecord in formData.tradeRecord">
                        {{tradeRecord.type}}
                        {{tradeRecord.amount}}
                        {{tradeRecord.status}}
                        {{tradeRecord.create_time}}
                    </li>
                </ul>
                <footer @click="geMore">点击更多...</footer>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	data() {
		return {
			title: '我的余额',
			userInfo: {},
            currentPage: 0,
			formData: {
                balance: 0,
                tradeRecord: []
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
                    $.extend(self.formData, data);
                },
                error: ()=>{
                    $.toast('网络不给力，请重新尝试！');
                }
            });
            
            self.getTradeRecord();
			
		}
	},
    methods:{
        getTradeRecord(){
            let self = this;
            $.ajax({
                url: "/soytime/account/tradeRecord",
                type:'POST',
                data:{
                    currentPage:self.currentPage
                },
                dataType: 'json',
                success: (data)=>{
                    $.extend(self.formData, data);
                },
                error: ()=>{
                    $.toast('网络不给力，请重新尝试！');
                }
            });
        },
        getMore(){
            self.currentPage ++;
            self.getTradeRecord();
        }
    },
	components: {
        'headerBar': require('../../components/header.vue'),
	}
}
</script>









