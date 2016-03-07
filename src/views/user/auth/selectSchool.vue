<style lang="less">

</style>

<template>
    <div id="area" class="page-selectCity page-selectSchool" transition="page" >

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
				<li v-for="item in schoolList" @click="goAuth(item)">
                    {{item.school_name}}
                </li>
            </ul>
            <ul v-else="tmpData.length">
				<li v-for="item in tmpData" @click="goAuth(item)">
                    {{item.school_name}}
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
    module.exports = {
        data (){
            return {
				keyword:'',
				tmpData: [],
				schoolList: null,
				indexData: indexData,
				formData: {
					city_id: null,
					city_name: null,
					school_id: null,
					school_name: null
				}
			}
        },
        watch: {
            keyword (){
                this.tmpData = this.filteData( this.keyword );
            }
        },
        route: {
            data (transition){
                let self  = this,
					query = transition.from.query;
                self.formData.city_id   = query.city_id ? query.city_id : null;
                self.formData.city_name = query.city_name ? query.city_name : null;
            }
        },
        ready(){
            let self = this;
            $.ajax({
                url: "/soytime/data/loadSchool",
                type:'POST',
                dataType: 'json',
                data: self.formData,
                success: ((data)=>{
                    self.schoolList = data.result;
                })
            });
        },
        methods: {
			goAuth(item){
				let self = this;
				self.formData.school_id   = item.school_id;
				self.formData.school_name = item.school_name;
				self.$route.router.go('/auth?' + $.param( self.formData ) );
			},
            filteData (keyword) {
                let self    = this,
					allData = self.indexData.schoolList,
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