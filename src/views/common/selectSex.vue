<style lang="less">

</style>

<template>
    <div class="page-selectCity page-selectSex" transition="page" >

        <div class="content">
            <ul class="list">
				<li @click="goScene('')">
                    <span class="pull-left">不限</span>
                    <i class="pull-right ico"
                       :class="{'ico-yixuan': formData.sex == '', 'ico-yixuan2': formData.sex != ''}"
                    ></i>
                </li>
				<li @click="goScene(1)">
                    <span class="pull-left">男</span>
                    <i class="pull-right ico"
                       :class="{'ico-yixuan': formData.sex == 1, 'ico-yixuan2': formData.sex != 1}"
                    ></i>
                </li>
				<li @click="goScene(2)">
                    <span class="pull-left">女</span>
                    <i class="pull-right ico"
                       :class="{'ico-yixuan': formData.sex == 2, 'ico-yixuan2': formData.sex != 2}"
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
                sex: ''
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
        goScene(sex){
            let self = this;
            self.formData.sex = sex;
            self.$route.router.go({'name':'scene', query: self.formData});
        }
    }
}
</script>