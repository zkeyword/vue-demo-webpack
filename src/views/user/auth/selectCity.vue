<template>
    <div id="area" transition="page" >

        <div class="bar">
            <div class="searchbar">
                <a class="searchbar-cancel">取消</a>
                <div class="search-input">
                    <label class="icon icon-search" for="search"></label>
                    <input type="search" id='search' v-model="keyword" placeholder='输入关键字...'/>
                </div>
            </div>
        </div>

        <div class="content">
            <ul v-if="!tmpData.length">
                <li v-for="area in areaList">
                    <a v-link="{ path: '/auth?city_id='+ area.city_id +'&city_name='+ area.city_name}">
                        {{area.city_name}}
                    </a>
                </li>
            </ul>
            <ul v-else="tmpData.length">
                <li v-for="area in tmpData">
                    <a v-link="{ path: '/auth?city_id='+ area.city_id +'&city_name='+ area.city_name}">
                        {{area.city_name}}
                    </a>
                </li>
            </ul>
        </div>
    
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

    </div>

</template>

<script>
    let tmpData       = [];
    indexData.keyword = '';
    indexData.tmpData = [];

    module.exports = {
        data (){
            return indexData;
        },
        destroy (){
            this.keyword = null;
            console.log(111)
        },
        watch: {
            keyword (){
                this.tmpData = this.filteData( this.keyword );
            }
        },
        methods: {
            filteData (keyword) {
                let allData = indexData.areaList,
                    len     = allData.length,
                    data    = [];

                for(let i = 0; i<len; i++){
                    let item = allData[i];
                    let str  = item.first_name + item.city_name + item.short_name + 'ç' + item.first_name;
                    if( str.indexOf(keyword) !== -1 ){
                        data.push(item);
                    }
                }

                return data;
            }
        }
    }
</script>

<style lang="less">
#area{
    height:100%;
    ul{
        margin:0;padding: 0;
    }
    li{
        list-style:none;
    }
    .content{box-sizing: border-box;padding:2.5rem 0.5rem 0.5rem;}
    #abc{
        position:absolute;
        bottom:0.2rem;
        right:0.2rem;
        line-height: 0.8rem;
        font-size: 0.5rem;
    }
}
</style>








