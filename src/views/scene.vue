<style lang="less">
@import '../less/lib/mixins.less';

#header {
	position: absolute;
	z-index: 2;
	top: 0;
	left: 0;
	width: 100%;
	height: 45px;
	line-height: 45px;
	background: #CD235C;
	padding: 0;
	color: #eee;
	font-size: 20px;
	text-align: center;
	font-weight: bold;
}

#footer {
	position: absolute;
	z-index: 2;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 48px;
	background: #444;
	padding: 0;
	border-top: 1px solid #444;
}

#wrapper {
	position: absolute;
	z-index: 1;
	top: 45px;
	bottom: 48px;
	left: 0;
	width: 100%;
	background: #ccc;
	overflow: hidden;
}

#scroller {
	position: absolute;
	z-index: 1;
	-webkit-tap-highlight-color: rgba(0,0,0,0);
	width: 100%;
	-webkit-transform: translateZ(0);
	-moz-transform: translateZ(0);
	-ms-transform: translateZ(0);
	-o-transform: translateZ(0);
	transform: translateZ(0);
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	-webkit-text-size-adjust: none;
	-moz-text-size-adjust: none;
	-ms-text-size-adjust: none;
	-o-text-size-adjust: none;
	text-size-adjust: none;
}

#scroller ul {
	list-style: none;
	padding: 0;
	margin: 0;
	width: 100%;
	text-align: left;
	position: relative;
}

#scroller li {
	padding: 0 10px;
	height: 40px;
	line-height: 40px;
	border-bottom: 1px solid #ccc;
	border-top: 1px solid #fff;
	background-color: #fafafa;
	font-size: 16px;
}
    
</style>

<template>
    <div id="header">iScroll</div>

<div id="wrapper">
	<div id="scroller">
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
					<div class="img" v-for="subItem in item.skillImgs">
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
	</div>
</div>

<div id="footer"></div>
</template>

<script>
import IScroll from 'iscroll/build/iscroll'

export default {
    data(){
        return {
            title: null,
            filterType: 0,
            isShowFilter: false,
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
        },
        deactivate(){
			let self = this;
			self.formData.currentPage = 1;
        }  
    },
	ready(){
		let self = this;
		self.loadMore(function(){
			var myScroll = new IScroll('#wrapper');
			myScroll.refresh();
			myScroll.on('scrollEnd', function(){
				//console.log( this.directionY, this.y )
				if( this.directionY ){
					loadMore();
				}
			});
			document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
		});
	},
    methods:{
        showFilter(type){
            let self = this;
            self.filterType   = type;
            self.isShowFilter = true;
        },
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
        loadMore(callback){
            let self = this;
			self.busy = true;
            $.ajax({
                url: "/soytime/server/list",
                type:'POST',
                data:self.formData,
                dataType: 'json',
                success: ((data)=>{
                    let arr = data.result,
                        len = arr.length;
                    for(let i = 0; i<len; i++){
                        self.dataList.push(arr[i]);
                    }
					self.formData.currentPage ++;
					self.busy = false;
					callback && callback();
                })
            });
        }
    },
    components: {
        'headerBar': require('../components/header.vue'),
        'pullRefresh': require('../components/pullRefresh.vue')
    }
}
</script>
