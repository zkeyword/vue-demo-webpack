<style lang="less">
@import '../less/lib/mixins.less';
.actions-modal.actions-top{
    
}
</style>

<template>
    <div class="actions-modal actions-top">
        
    </div>
    <div class="modal-overlay modal-overlay-visible"></div>
</template>

<script>
    export default {
        replace:true,
        props: ['isShow'],
        ready: function () {
            //console.log(this.isShow)
        }
    }
</script>