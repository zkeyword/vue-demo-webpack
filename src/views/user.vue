<style lang="less">
    @import '../less/lib/mixins.less';
    .page-user{
        .list-block{
            .rem(margin, 20, 0);
            ul{
                .border-radius(8);
            }
            .item-inner{
                .rem(margin-right, 20);
                .rem(font-size, 30);
            }
        }
        .userHeader{
            background:#fff;
            .border-radius(8);
            .rem(padding, 20);
            .userWrap{
                .photoWrap{
                    .rem(width, 120);
                    .rem(height, 120);
                    .border-radius(120);
					img{
					    width:100%;
						height:100%;
					    .border-radius(120);
					}
                }
                .nameWrap{
                    .rem(width, 320);
                    .rem(padding-left, 20);
                    .name{
                        .rem(font-size, 30);
                    }
                    .auth{
                        color:#b2b2b2;
                        .rem(font-size, 24);
                        .rem(height, 32);
                        .rem(line-height, 32);
                        .rem(margin-top, 20);
                    }
                }
            }
            
            .userScore{
                .rem(padding, 20, 0, 0);
                .rem(margin, 20, 0, 0);
                border-top:2px solid #dedede;
                .rem(border-top-width, 2);
                li{
                    float:left;
                    width:25%;
                    .rem(font-size, 30);
                    .rem(line-height, 30);
                    em{
                        font-style:normal;
                    }
                    span{
                        .rem(margin, 0, 8);
                    }
                    i{
                        
                    }
                }
            }
        }
    }
</style>

<template>
    <div class="page-user">
        <header-bar :title="title"></header-bar>
        
        <div class="content showHeader showFooter">
        
            <div class="userHeader clearfix">
                <div class="userWrap clearfix">
                    <div class="pull-left photoWrap">
                        <img :src="formData.head_img_url">
                    </div>
                    <div class="pull-left nameWrap">
                        <div class="name">{{formData.nickname}}</div>
                        <div 
                            class="auth clearfix"
                            v-link="{name: 'auth'}" 
                            v-if="formData.sutdent_auth == 0 || formData.sutdent_auth == 3"
                        >
                            <i class="icon icon-anquanbaozhang pull-left"></i>
                            <span class="pull-left" v-if="formData.sutdent_auth == 0">未认证，点此认证！</span>
                            <span class="pull-left" v-if="formData.sutdent_auth == 3">认证失败，点此重新认证！</span>
                        </div>
                        <div
                            class="auth clearfix"
                            v-if="formData.sutdent_auth == 1"
                        >
                            <i class="icon icon-anquanbaozhang2 pull-left"></i>
                            <span class="pull-left">认证成功</span>
                        </div>
                        <div
                            class="auth clearfix"
                            v-if="formData.sutdent_auth == 2"
                        >
                            <i class="icon icon-anquanbaozhang pull-left"></i>
                            <span class="pull-left">认证中，请耐心等待</span>
                        </div>
                    </div>
                </div>
                <ul class="userScore clearfix">
                    <li>
                        <i class="icon icon-xiaolian pull-left"></i>
                        <span class="pull-left">好评</span>
                        <em class="pull-left">{{formData.goodCount}}</em>
                    </li>
                    <li>
                        <i class="icon icon-cry pull-left"></i>
                        <span class="pull-left">中评</span>
                        <em class="pull-left">{{formData.cenCount}}</em>
                    </li>
                    <li>
                        <i class="icon icon-kulian pull-left"></i>
                        <span class="pull-left">差评</span>
                        <em class="pull-left">{{formData.poolCount}}</em>
                    </li>
                    <li>
                        <i class="icon icon-aixin pull-left"></i>
                        <span class="pull-left">收藏</span>
                        <em class="pull-left">{{formData.collectCount}}</em>
                    </li>
                </ul>
            </div>

            <div class="list-block">
                <ul>
                    <li class="item-content item-link" v-link="{name: 'userMoney'}">
                        <div class="item-inner">
                            <div class="item-title">我的余额</div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="list-block">
                <ul>
                    <li class="item-content item-link" v-link="{name: 'userSetting'}">
                        <div class="item-inner">
                            <div class="item-title">设置</div>
                        </div>
                    </li>
                    <li class="item-content item-link" v-link="{name: 'userWorkServer'}">
                        <div class="item-inner">
                            <div class="item-title">发布服务</div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="list-block">
                <ul>
                    <li class="item-content item-link" v-link="{name: 'userWorkPublish'}">
                        <div class="item-inner">
                            <div class="item-title">发单任务</div>
                        </div>
                    </li>
                    <li class="item-content item-link" v-link="{name: 'userWorkAccept'}">
                        <div class="item-inner">
                            <div class="item-title">接单任务</div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="list-block">
                <ul>
                    <li class="item-content item-link" v-link="{name: 'service'}">
                        <div class="item-inner">
                            <div class="item-title">在线客服</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	data() {
		return {
			title: '我的',
			formData: {}
		}
	},
	route: {
		data (transition){
			let self = this;
			
			$.ajax({
				url: "/soytime/account/myInfo",
				type:'POST',
				dataType: 'json',
				success: ((data)=>{
					self.formData = data.result;
				})
			});
            
		}
	},
	components: {
		'headerBar': require('../components/header.vue')
	}
}
</script>