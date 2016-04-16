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

        section{
            .rem(padding, 20);
            .rem(font-size, 30);
        }

        .item{
            position:relative;
            background:#fff;
            .border-radius(8);
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
                border-bottom:1px solid #dedede;
                .rem(border-bottom-width, 2);
                .rem(height, 80);
                .rem(line-height, 80);
                text-align:center;
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
                top:0;
                right:0;
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
                    .rem(font-size, 24);
                }
            }
            
            .address{
                color: #b2b2b2;
                .rem(font-size, 30);
                text-align: right;
            }

            footer{
                border-top:1px solid #dedede;
                .rem(border-top-width, 2);
                .rem(padding, 0, 20);
                .rem(font-size, 30);
            }

            .userList{
                li{
                    position: relative;
                    border-top:1px solid #dedede;
                    .rem(border-top-width, 2);
                    .rem(height, 80);
                    .rem(line-height, 80);
                    .ico-xuan{
                        color:#11cd6e;
                    }
                    .commit{
                        .rem(top, 14);
                        .rem(right, 14);
                    }
                }
            }

    }
</style>

<template>
    <div class="page-user-work-publish">
        <header-bar :title="title"></header-bar>
        <ul class="filter clearfix">
            <li @click="getList(1)">
                <span :class="{'cur':tag == 1}">最近订单</span>
            </li>
            <li @click="getList(2)">
                <span :class="{'cur':tag == 2}">历史订单</span>
            </li>
            <li @click="getList(3)">
                <span :class="{'cur':tag == 3}">排序</span>
            </li>
        </ul>
        
        <div class="content showHeader showTab">
            <div class="item order">
                <span class="tag">563</span>
                <header class="clearfix" v-link="{ name: 'userWorkPublishDetail', query:{} }">
                    2016-2-22 12:30
                    <div class="status">{{ statusText[item.status] }}</div>
                </header>
                <section>
                    <div>
                        <div class="commit clearfix">
                            <i class="ico ico-dianhua3"></i>
                            <span>评价</span>
                        </div>
                        <div>指定接单人：案发的说法</div>
                        <div>afasdfadfadfadfaf </div>
                        <div class="address">工作地点：厦门思明区</div>
                    </div>
                </section>
                <footer>
                    <div class="textWrap">
                        <div>报名人数：3人    已选2人，剩余1人可选</div>
                        <div>报名者，请获取一个人的联系方式</div>
                    </div>
                    <ul class="userList">
                        <li class="clearfix">
                            <div class="nameWrap">
                                <i class="ico ico-xuan"></i>
                                <span class="name">afdsfa</span>
                            </div>
                            <div class="commit">
                                <i class="ico ico-dianhua3"></i>
                                <span>评价</span>
                            </div>
                        </li>
                    </ul>

                </footer>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	data() {
		return {
			title: '发单任务',
            indexData: indexData,
			userInfo: {},
			formData: {},
			currentPage: 0,
			tag: 1,
            statusText:['报名中','报名结束','报名成功','被拒绝','过期']
		}
	},
	route: {
		data (transition){
			let self     = this,
				query    = transition.to.query;
				
			$.extend(self.formData, query);


		}
	},
	methods:{
		getList(tag){
			let self = this;
            self.tag = tag;
			$.ajax({
				url: "/soytime/order/demandList",
				type:'POST',
				dataType: 'json',
				data: {
					tag: self.tag,
					currentPage: self.currentPage
				},
				success: ((data)=>{
					self.formData = data.result;
				})
			});
		}
	},
	components: {
		'headerBar': require('../../../components/header.vue')
	}
}
</script>