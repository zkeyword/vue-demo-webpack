<style lang="less">
    
    
</style>

<template>
    <div transition="page" class="page page-scene page-current">
        <header-bar :title="title" :back="true"></header-bar>
        <div class="content showHeader">
            
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title: null
        }
    },
    route:{
        data (transition){
            let self  = this,
                query = transition.to.query;
                
            self.title = query.scene_name;
        }  
    },
    ready: function () {
        
    },
    components: {
        'headerBar': require('../components/header.vue')
    }
}
</script>
