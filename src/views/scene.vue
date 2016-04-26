<style lang="less">
@import '../less/lib/mixins.less';
.page-scene{

    height:100%;
    
    .scenefilter{
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
        }
    }
    
    .scenefilterList{
        position:absolute;
        top:4.4rem;
        z-index: 11;
        height:100%;
        width:100%;
        
        .content{
            width:100%;
            height:100%;
            padding-bottom:4.4rem;
            background:#fff;
        }
    }

    .item{
        background:#fff;
        .border-radius(8);
        .rem(margin-bottom, 20);
        
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
            
            .pull-right{
                .rem(margin-top, 30);
            }
        }
        
        .main{
            .rem(padding, 20);
            
            .text{
                .rem(font-size, 30);
                color:#5e5e5e;
            }
            
            .img{
                width:30%;
                float:left;
                
                &:nth-child(2){
                    margin:0 5%;    
                }
                
                img{
                    width:100%;
                }
            }
        }
        
        .userScore{
            border-top:2px solid #dedede;
            .rem(border-top-width, 2);
            .rem(font-size, 24);
            color:#8e8e8e;
            li{
               width:33.33%;
               float:left;
               text-align:center;
               .rem(padding, 10, 0);
            }
                em{
                    font-style:normal;
                    display:inline-block;
                    .rem(padding, 0, 5);
                }
        }
    }
}
    
</style>

<template>
    <div transition="page" class="page-scene pullRreshwrap">
        <header-bar :title="title" :back="true" target="home"></header-bar>
        <ul class="scenefilter clearfix">
            <li @click="filterSchool">
                <span>学校<i class="icon icon-down" :class="{'icon-up':formData.school_id}"></i></span>
            </li>
            <li @click="filterSex">
                <span>性别<i class="icon icon-down" :class="{'icon-up':formData.sex}"></i></span>
            </li>
            <li @click="filterSort">
                <span>排序<i class="icon icon-down" :class="{'icon-up':formData.sort}"></i></span>
            </li>
        </ul>

        <div class="content showHeader showTab showFooter">
			<div id="wrapper">
				<div id="scroller" v-infinite-scroll="loadMore()" infinite-scroll-disabled="busy" infinite-scroll-distance="40">
					<div class="item clearfix" v-for="item in dataList">
						<header class="clearfix" v-link="{name: 'sceneDetail', query: {'user_id': item.user_id, 'scene_name': formData.scene_name, 'scene_id': formData.scene_id}}">
							<div class="pull-left photoWrap">
								<img :src="item.head_img_url">
							</div>
							<div class="pull-left nameWrap">
								<div class="name">
									<i class="icon"
									   :class="{'icon-xingbienan2': item.sex == 1, 'icon-xingbienv2': item.sex == 2}"
									></i>
									{{item.nickname}}
								</div>
								<div class="school clearfix">
									{{item.school_name}}
								</div>
							</div>
							<i class="icon icon-jiantouyou pull-right"></i>
						</header>
						<div class="main">
							<div class="text">{{item.detail}}</div>
							<div class="imgWrap clearfix">
								<div class="img" v-for="subItem in item.serverImgs">
									<img :src="subItem.img_url">
								</div>
							</div>
						</div>
						<ul class="userScore clearfix">
							<li>
								<i class="icon icon-aixin-copy"></i>
								<em>{{item.collectCount}}</em>
							</li>
							<li>
								<i class="icon icon-liuyan"></i>
								<em>{{item.appraiseCount}}</em>
							</li>
							<li>
								<i class="icon icon-yanjing"></i>
								<em>{{item.viewCount}}</em>
							</li>
						</ul>
					</div>
					<div class="lodding" v-show="busy && !noData"></div>
				</div>
			</div>
        </div>

        <span
            class="ui-btn ui-btn-big"
            v-link="{name:'sceneOneKeyOrder', query:formData}"
        >
            一键预约
        </span>

    </div>
</template>

<script>
export default {
    data(){
        return {
            title: null,
            busy: false,
			noData: false,
            dataList: [],
            formData:{
				scene_name: '',
				scene_id: '',
                currentPage: 1,
                school_id: '',
                sex: '',
                sort: '',
                form: 'scene'
            }
        }
    },
    route:{
        data (transition){
            let self  = this,
                query = transition.to.query;

			$.extend(self.formData, query);
			
			self.title = query.scene_name;

			if( !self.busy ) self.loadMore();
        },
        deactivate(){
			let self = this;
			self.formData.currentPage = 1;
			self.formData.school_id   = '';
			self.formData.sex         = '';
			self.formData.sort        = '';
        }
    },
    methods:{
        filterSort(){
            let self = this;
            self.$route.router.go({'name':'selectSort', query: self.formData });
        },
		filterSchool(){
            let self = this;
            self.$route.router.go({'name':'selectSchool', query: self.formData });
        },
		filterSex(){
            let self = this;
            self.$route.router.go({'name':'selectSex', query: self.formData });
        },
        loadMore(){
            let self = this;
			if( !self.noData ) self.busy = true;
            $.ajax({
                url: "/soytime/server/list",
                type:'POST',
                data:self.formData,
                dataType: 'json',
                success: ((data)=>{
                    let arr = data.result,
                        len = arr.length;
					if( !len ){
						self.noData = true;
						self.busy = false;
						return;
					}
                    for(let i = 0; i<len; i++){
                        self.dataList.push(arr[i]);
                    }
					self.formData.currentPage ++;
					self.busy = false;
                })
            });
        }
    },
    components: {
        'headerBar': require('../components/header.vue')
    }
}
</script>
