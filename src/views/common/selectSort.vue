<style lang="less">

</style>

<template>
    <div class="page-selectCity page-selectSort" transition="page" >

        <div class="content">
            <ul class="list">
                <li @click="goScene('')">
                    <span class="pull-left">不限</span>
                    <i class="pull-right ico"
                       :class="{'ico-yixuan': formData.sort == '', 'ico-yixuan2': formData.sort != ''}"
                    ></i>
                </li>
                <li @click="goScene(1)">
                    <span class="pull-left">评价最高</span>
                    <i class="pull-right ico"
                       :class="{'ico-yixuan': formData.sort == 1, 'ico-yixuan2': formData.sort != 1}"
                    ></i>
                </li>
                <li @click="goScene(2)">
                    <span class="pull-left">距离最近</span>
                    <i class="pull-right ico"
                       :class="{'ico-yixuan': formData.sort == 2, 'ico-yixuan2': formData.sort != 2}"
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
            formData: {
                sort: ''
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
        goScene(sort){
            let self = this;
            self.formData.sort = sort;
            self.$route.router.go({'name':'scene', query: self.formData});
        }
    }
}
</script>