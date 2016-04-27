<style lang="less">
@import '../../less/lib/mixins.less';
.page-selectCity{
    height:100%;
    background:#fff;
    .bar{
        background:#fff;
        /*
        &:after{
            background:none;
        }
        */
    }
    .list{
        li{
            border-bottom:1px solid #dedede;
            .rem(font-size, 24);
            .rem(height, 68);
            .rem(line-height, 68);
            .rem(padding, 0, 26);
            .rem(border-bottom-width, 2);
        }
    }
    #abc{
        position:absolute;
        bottom:0.2rem;
        right:0.2rem;
        line-height: 0.8rem;
        font-size: 0.5rem;
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
            <ul class="list" v-if="!tmpData.length">
				<li v-for="item in indexData.areaList" @click="goAuth(item)">
                    <i class="ico ico-yixuan"></i>{{item.city_name}}
                </li>
            </ul>
            <ul class="list" v-else="tmpData.length">
                <li v-for="item in tmpData" @click="goAuth(item)">
                    <i class="ico ico-yixuan"></i>{{item.city_name}}
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
/*
<ul id="abc">
            <li>A</li>
            <li>B</li>
            <li>C</li>
            <li>D</li>
            <li>E</li>
            <li>F</li>
            <li>G</li>
            <li>H</li>
            <li>I</li>
            <li>J</li>
            <li>K</li>
            <li>L</li>
            <li>M</li>
            <li>N</li>
            <li>O</li>
            <li>P</li>
            <li>Q</li>
            <li>R</li>
            <li>S</li>
            <li>T</li>
            <li>U</li>
            <li>V</li>
            <li>W</li>
            <li>X</li>
            <li>Y</li>
            <li>Z</li>
        </ul>

*/

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








