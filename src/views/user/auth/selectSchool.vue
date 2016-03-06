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
                <li v-for="item in schoolList">
                    <a v-link="{ path: '/auth?city_id='+ city.city_id 
                        +'&city_name=' + city.city_name 
                        +'&school_id=' + item.school_id
                        +'&school_name=' + item.school_name
                    }">
                        {{item.school_name}}
                    </a>
                </li>
            </ul>
            <ul v-else="tmpData.length">
                <li v-for="item in tmpData">
                    <a v-link="{ path: '/auth?city_id='+ city.city_id 
                        +'&city_name=' + city.city_name 
                        +'&school_id=' + item.school_id
                        +'&school_name=' + item.school_name
                    }">
                        {{item.school_name}}
                    </a>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
    let tmpData          = [];
    indexData.keyword    = '';
    indexData.tmpData    = [];
    indexData.city       = {
        city_id: null,
        city_name: null
    }
    indexData.schoolList = null;

    module.exports = {
        data (){
            return indexData;
        },
        watch: {
            keyword (){
                this.tmpData = this.filteData( this.keyword );
            }
        },
        route: {
            data (transition){
                let query = transition.from.query;
                this.city.city_id   = query.city_id ? query.city_id : null;
                this.city.city_name = query.city_name ? query.city_name : null;
            }
        },
        ready(){
            let self = this;
            $.ajax({
                url: "/soytime/data/loadSchool",
                type:'POST',
                dataType: 'json',
                data: self.city,
                success: ((data)=>{
                    indexData.schoolList = data.result;
                })
            });
        },
        methods: {
            filteData (keyword) {
                let allData = indexData.schoolList,
                    len     = allData.length,
                    data    = [];

                for(let i = 0; i<len; i++){
                    let item = allData[i];
                    let str  = item.school_id + item.school_name;
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

</style>








