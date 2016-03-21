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
                .rem(width, 420);
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
                    .rem(width, 280);
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
                        <img :src="{{userInfo.head_img_url}}">
                    </div>
                    <div class="pull-right nameWrap">
                        <div class="name">{{userInfo.nickname}}</div>
                        <div 
                            class="auth clearfix"
                            v-link="{name: 'auth'}" 
                            v-if="userInfo.sutdent_auth == 0 || userInfo.sutdent_auth == 3"
                        >
                            <i class="icon icon-anquanbaozhang pull-left"></i>
                            <span class="pull-left" v-if="userInfo.sutdent_auth == 0">未认证，点此认证！</span>
                            <span class="pull-left" v-if="userInfo.sutdent_auth == 3">认证失败，点此重新认证！</span>
                        </div>
                        <div
                            class="auth clearfix"
                            v-if="userInfo.sutdent_auth == 1"
                        >
                            <i class="icon icon-anquanbaozhang2 pull-left"></i>
                            <span class="pull-left">认证成功</span>
                        </div>
                        <div
                            class="auth clearfix"
                            v-if="userInfo.sutdent_auth == 2"
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
                        <em class="pull-left">{{userCount.goodCount}}</em>
                    </li>
                    <li>
                        <i class="icon icon-cry pull-left"></i>
                        <span class="pull-left">中评</span>
                        <em class="pull-left">{{userCount.cenCount}}</em>
                    </li>
                    <li>
                        <i class="icon icon-kulian pull-left"></i>
                        <span class="pull-left">差评</span>
                        <em class="pull-left">{{userCount.poolCount}}</em>
                    </li>
                    <li>
                        <i class="icon icon-aixin pull-left"></i>
                        <span class="pull-left">收藏</span>
                        <em class="pull-left">{{userCount.collectCount}}</em>
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
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
	data() {
		return {
			title: '我的',
			userInfo: {},
			formData: {},
            userCount: {}
		}
	},
	vuex:{
		getters: {
			todos(){
				console.log(11)
			}
		}
		/*
		getters: {
			todos: state => state.todo.todos
		},
		actions: {
			addTodo,
			toggleAll,
			clearCompleted
		}
		*/
	},
	route: {
		data (transition){
			let self     = this,
				query    = transition.to.query;
				
			$.extend(self.formData, query);
			
			$.ajax({
				url: "/soytime/user/info",
				type:'GET',
				dataType: 'json',
				data: self.formData,
				success: ((data)=>{
					self.userInfo = data.result;
				})
			});
            
			$.ajax({
				url: "/soytime/appraise/toCount",
				type:'GET',
				dataType: 'json',
				data: self.formData,
				success: ((data)=>{
					self.userCount = data.result;
				})
			});
			
			//console.log(this.$store.state.namexx, this)
			console.log( this.todos );
		}
	},
	ready (){
		//setTimeout(() => {
		//   this.$route.router.go({ name: 'list'});
		//},2000);
	},
	components: {
		'headerBar': require('../components/header.vue')
	}
}
</script>