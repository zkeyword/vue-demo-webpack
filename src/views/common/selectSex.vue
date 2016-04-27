<style lang="less">

</style>

<template>
    <div class="page-selectCity page-selectSex" transition="page" >

        <div class="content">
            <ul class="list">
				<li @click="goScene('')"><i class="ico ico-yixuan"></i>不限</li>
				<li @click="goScene(1)"><i class="ico ico-yixuan"></i>男</li>
				<li @click="goScene(2)"><i class="ico ico-yixuan"></i>女</li>
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
        goScene(sex){
            let self = this;
            self.formData.sex = sex;
            self.$route.router.go({'name':'scene', query: self.formData});
        }
    }
}
</script>