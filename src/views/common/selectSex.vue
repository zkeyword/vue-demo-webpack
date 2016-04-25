<style lang="less">

</style>

<template>
    <div class="page-selectCity page-selectSex" transition="page" >

        <div class="content">
            <ul class="list">
				<li>男</li>
				<li>女</li>
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
            }
        }
    },
    route: {
        data (transition){
            let self  = this,
                query = transition.to.query;
                
            $.extend(self.formData, query);
        }
    },
    methods: {
        goAuth(item){
            let self = this;
            self.formData.school_id   = item.school_id;
            self.formData.school_name = item.school_name;

            if( self.formData.form == 'onekeyOrder' ){
                self.$route.router.go({'name':'sceneOneKeyOrder', query: self.formData });
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