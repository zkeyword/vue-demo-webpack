<style lang="less">

</style>

<template>
    <div id="area" class="page-selectCity page-selectSchool" transition="page">

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
				<li @click="goAuth(defaultData)" v-if="formData.form == 'scene'">
					<span class="pull-left">不限</span>
					<i class="pull-right ico"
                       :class="{'ico-yixuan': '' == formData.school_id, 'ico-yixuan2': '' != formData.school_id}"
                    ></i>
				</li>
				<li v-for="item in schoolList" @click="goAuth(item)">
                    <span class="pull-left">{{item.school_name}}</span>
                    <i class="pull-right ico"
                       :class="{'ico-yixuan': item.school_id == formData.school_id, 'ico-yixuan2': item.school_id != formData.school_id}"
                    ></i>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    data (){
        return {
            keyword:'',
            tmpData: [],
            schoolList: null,
            formData: {
                city_id: null,
                city_name: null,
                school_id: null,
                school_name: null
            },
			defaultData:{
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
                query = transition.to.query;
                
            $.extend(self.formData, query);
            
            $.ajax({
                url: "/soytime/data/loadSchool",
                type:'POST',
                dataType: 'json',
                data: self.formData,
                success: ((data)=>{
                    self.schoolList = data.result;
                    self.tmpData    = data.result;
                })
            });
            
            transition.next();
        }
    },
    methods: {
        goAuth(item){
            let self = this;
            self.formData.school_id   = item.school_id;
            self.formData.school_name = item.school_name;

            if( self.formData.form == 'onekeyOrder' ){
                self.$route.router.go({'name':'sceneOneKeyOrder', query: self.formData });
            }else if( self.formData.form == 'inviteOrder' ){
                self.$route.router.go({'name':'sceneInviteOrder', query: self.formData });
            }else if( self.formData.form == 'scene' ){
                self.$route.router.go({'name':'scene', query: self.formData});
            }else{
                self.$route.router.go({'name':'auth', query: self.formData});
            }
        },
        filteData (keyword) {
            let self    = this,
                allData = self.schoolList,
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