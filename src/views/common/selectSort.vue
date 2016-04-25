<style lang="less">

</style>

<template>
    <div class="page-selectCity page-selectSort" transition="page" >

        <div class="content">
            <ul class="list">
                <li @click="goScene(1)">评价最高</li>
                <li @click="goScene(2)">距离最近</li>
            </ul>
        </div>

    </div>
</template>

<script>
    export default {
        data (){
        return {
            formData: {}
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
        goScene(sort){
            let self = this;
            self.formData.sort = sort;
            self.$route.router.go({'name':'scene', query: self.formData});
        }
    }
    }
</script>