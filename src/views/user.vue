<style lang="less">
    @import '../less/lib/mixins.less';
    .page-user{
        .userHeader{
            background:#fff;
            .userWrap{
                .rem(width, 420);
                .pull-left{
                    .rem(width, 120);
                    .rem(height, 120);
                    .border-radius(120);
					img{
					    width:100%;
						height:100%;
					    .border-radius(120);
					}
                }
                .pull-right{
                    .rem(width, 280);
                    .name{
                        .rem(font-size, 30);
                    }
                    .auth{
                        color:#b2b2b2;
                        .rem(font-size, 24);
                        .rem(height, 32);
                        .rem(line-height, 32);
                        .rem(padding-top, 20);
                    }
                }
            }
            
            .userScore{
                li{
                    float:left
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
                    <div class="pull-left">
                        <img src="{{userInfo.photo}}">
                    </div>
                    <div class="pull-right">
                        <div class="name">名字</div>
                        <div class="auth">
                            <i class="icon icon-anquanbaozhang"></i>
                            <a external v-link="{name: 'auth'}">未认证，点此认证！</a>
                        </div>
                    </div>
                </div>
                <ul class="userScore clearfix">
                    <li><i class="icon icon-anquanbaozhang"></i>好评</li>
                    <li><i class="icon icon-anquanbaozhang"></i>中评</li>
                    <li><i class="icon icon-anquanbaozhang"></i>差评</li>
                    <li><i class="icon icon-anquanbaozhang"></i>收藏</li>
                </ul>
            </div>

            <div class="list-block">
                <ul>
                    <li class="item-content item-link">
                        <a external v-link="{name: 'userMoney'}">
                            <div class="item-media"><i class="icon icon-f7"></i></div>
                            <div class="item-inner">
                                <div class="item-title">我的余额</div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="list-block">
                <ul>
                    <li class="item-content item-link">
                        <a external v-link="{name: 'userSetting'}">
                            <div class="item-media"><i class="icon icon-f7"></i></div>
                            <div class="item-inner">
                                <div class="item-title">设置</div>
                            </div>
                        </a>
                    </li>
                    <li class="item-content item-link">
                        <a external v-link="{name: 'userWorkServer'}">
                            <div class="item-media"><i class="icon icon-f7"></i></div>
                            <div class="item-inner">
                                <div class="item-title">发布服务</div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="list-block">
                <ul>
                    <li class="item-content item-link">
                        <a external v-link="{name: 'userWorkPublish'}">
                            <div class="item-media"><i class="icon icon-f7"></i></div>
                            <div class="item-inner">
                                <div class="item-title">发单任务</div>
                            </div>
                        </a>
                    </li>
                    <li class="item-content item-link">
                        <a external v-link="{name: 'userWorkAccept'}">
                            <div class="item-media"><i class="icon icon-f7"></i></div>
                            <div class="item-inner">
                                <div class="item-title">接单任务</div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="list-block">
                <ul>
                    <li class="item-content item-link">
                        <a external v-link="{name: 'service'}">
                            <div class="item-media"><i class="icon icon-f7"></i></div>
                            <div class="item-inner">
                                <div class="item-title">在线客服</div>
                            </div>
                        </a>
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
			formData: {}
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
			
			console.log(this.$store.state.namexx, this)
			//console.log( store.state );
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