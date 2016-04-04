<style lang="less">
    
</style>

<template>
    <div class="clearfix">
        <div class="pull-left">生日</div>
        <div class="pull-right">
            <input type="text" id="datetime-picker" v-model="birthday" />
        </div>
    </div>
</template>

<script>
    export default {
        replace:true,
        props: ['unit'],
        ready(){
            
        },
        watch:{
            unit(){

            }
        }
    }
</script>