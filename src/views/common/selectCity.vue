<style lang="less">
@import '../../less/lib/mixins.less';
.page-selectCity{
    height:100%;
    background:#fff;
    .bar{
        background:#fff;
    }
    .list{
        li{
            border-bottom:1px solid #dedede;
            .rem(font-size, 30);
            .rem(height, 68);
            .rem(line-height, 68);
            .rem(padding, 0, 26);
            .rem(border-bottom-width, 2);

            span{
                display: inline-block;
                .rem(height, 68);
                .rem(line-height, 68);
            }
            .ico{
                display: inline-block;
                .rem(height, 68);
                .rem(line-height, 68);
                .rem(width, 40);
                text-align:center;

                &.ico-yixuan2{
                     color: #b2b2b2;
                    .rem(font-size, 40);
                 }
                &.ico-yixuan{
                     color: #11cd6e;
                    .rem(font-size, 44);
                 }
            }
         }
    }
}
</style>

<template>
    <div class="page-selectCity" transition="page" >

        <div class="bar">
            <div class="searchbar">
                <a class="searchbar-cancel">取消</a>
                <div class="search-input">
                    <label class="icon icon-search" for="search"></label>
                    <input type="text" id='search' v-model="keyword" placeholder='输入关键字...'/>
                </div>
            </div>
        </div>

        <div class="content showHeader">
            <ul class="list">
				<li class="item clearfix" v-for="item in tmpData" @click="goAuth(item)">
                    <span class="pull-left">{{item.city_name}}</span>
                    <i class="pull-right ico"
                       :class="{'ico-yixuan': item.city_id == formData.city_id, 'ico-yixuan2': item.city_id != formData.city_id}"
                    ></i>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
export default {
    data(){
        return {
            keyword: '',
            tmpData: [],
            indexData: indexData,
            formData: {
                city_id: null,
                city_name: null
            }
        };
    },
    route: {
        data (transition){
            let self    = this,
                query   = transition.to.query;
                
            $.extend(self.formData, query);

            self.tmpData = self.indexData.areaList;
        }
    },
    watch: {
        keyword (){
            let self = this;
            self.tmpData = self.filteData( self.keyword );
        }
    },
    methods: {
        goAuth(item){
            let self = this;
            self.formData.city_id   = item.city_id;
            self.formData.city_name = item.city_name;
			
			self.$store.state.setCookie('cityId', item.city_id, 99999);
			
			if( self.formData.form == 'home' ){
                self.$route.router.go({name:'home', query: self.formData});
            }else{
                self.$route.router.go({name:'auth', query: self.formData});
            }
        },
        filteData (keyword) {
            let self    = this,
                allData = self.indexData.areaList,
                len     = allData.length,
                data    = [];

            for(let i = 0; i<len; i++){
                let item = allData[i],
                    reg  = new RegExp(keyword),
                    str  = item.first_name + item.city_name + item.short_name + 'ç' + item.first_name;

                if( reg.test(str) ){
                    data.push(item);
                }
            }

            return data;
        }
    }
}
</script>








