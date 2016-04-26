<style lang="less">
@import '../../less/lib/mixins.less';
.page-scene-appraise{
    .filter{
        border-bottom:1px solid #dedede;
        .rem(border-bottom-width, 2);
        .rem(padding-bottom, 20);
        .rem(margin-bottom, 20);
        
        span{
            display:inline-block;
            background:#b2b2b2;
            color:#fff;
            .rem(padding, 0, 10);
            .rem(height, 50);
            .rem(line-height, 50);
            .border-radius(8);
            .rem(font-size, 24);
            
            &.cur{
                background:#ff946e;
            }
        }
    }
    
    .block{
        background:#fff;
        border:1px solid #dedede;
        .rem(border-width, 2);
        .border-radius(8);
        .rem(padding, 20, 30);
        .rem(margin-bottom, 20);
        .rem(font-size, 30);
        
        .user{
            border-bottom:1px solid #dedede;
            .rem(border-bottom-width, 2);
            .img{
                float:left;
                .rem(width, 70);
                .rem(height, 70);
                .border-radius(70);
                img{
                    .border-radius(70);
                    width:100%;
                }
            }
            .nameWrap{
                float:left;
                .rem(padding-left, 20);
                .time{
                    .rem(font-size, 20);
                    color:#b2b2b2;
                }
                .name{
                    
                }
            }
            .type{
                float:right;
                text-align:center;
                .ico{
                    .rem(font-size, 40);
                    &.ico-xiaolian{
                        color:#eb503a
                    }
                    &.ico-cry{
                        color:#5e5e5e
                    }
                    &.ico-kulian{
                        color:#b2b2b2
                    }
                }
                div{
                    .rem(font-size, 24);
                }
            }
        }
        .main{
            .rem(padding-top, 10);
        }
    }
}
</style>

<template>
    <div transition="page" class="page-scene-appraise">
        <header-bar :title="title" :back="true"></header-bar>
        <div class="content showHeader">
			<div id="wrapper">
				<div id="scroller" v-infinite-scroll="loadMore()" infinite-scroll-disabled="busy" infinite-scroll-distance="40">
					<div class="filter">
						<span @click="setType(0)" :class="{'cur': formData.type == 0}">全部({{count.all}})</span>
						<span @click="setType(1)" :class="{'cur': formData.type == 1}">好评({{count.good}})</span>
						<span @click="setType(2)" :class="{'cur': formData.type == 2}">中评({{count.cen}})</span>
						<span @click="setType(3)" :class="{'cur': formData.type == 3}">差评({{count.pool}})</span>
					</div>
					<div class="block" v-for="item in dataList">
						<div class="user clearfix">
							<div class="img">
								<img :src="item.head_img_url" />
							</div>
							<div class="nameWrap">
								<div class="name">{{item.from_name}}</div>
								<div class="time">{{item.create_time}}</div>
							</div>
							<div class="type">
								<i class="ico {{typeIconArr[item.type-1]}}"></i>
								<div>{{typeArr[item.type-1]}}</div>
							</div>
						</div>
						<div class="main">
							{{item.content}}
						</div>
					</div>
					<div class="lodding" v-show="busy && !noData"></div>
				</div>
			</div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title: '评价',
			noData: false,
			busy: false,
            dataList: [],
            formData: {
				currentPage: 1,
				to_id: '',
				type:0
			},
			count : {
				all: 0,
				good: 0,
				cen: 0,
				pool: 0
			},
            typeArr: ['好评', '中评', '差评'],
            typeIconArr: ['ico-xiaolian','ico-cry','ico-kulian']
        }
    },
    route:{
        data (transition){
            let self  = this,
                query = transition.to.query;
                
            $.extend(self.formData, query);
			
			self.getCount();

        },
        deactivate(){
			let self = this;
			self.formData.currentPage = 1;
        }
    },
    methods:{
		getCount(){
			let self = this;
			$.ajax({
                url: "/soytime/appraise/staAppraise",
                type:'POST',
                dataType: 'json',
                data: self.formData,
                success: (data)=>{
                    self.count = data.result;
                }
            });
		},
        setType(type){
            let self = this;
            
            self.formData.type = type;
			self.formData.currentPage = 1;
			self.noData = false;
			self.dataList = [];
            if( !self.busy ) self.loadMore();
        },
        loadMore(){
            let self = this;
			if( self.noData ) return;
            $.ajax({
                url: "/soytime/appraise/list",
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
						self.noData = true;
                        return;
					}else if( len < 10 ){
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
        'headerBar': require('../../components/header.vue')
    }
}
</script>
