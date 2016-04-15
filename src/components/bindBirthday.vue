<style lang="less">
    #datetime-picker{
        border:0 none;
        text-align:right;
    }
</style>

<template>
    <div class="clearfix">
        <div class="pull-left">生日</div>
        <div class="pull-right">
            <input type="text" id="datetime-picker" v-model="birthday"  mobiscroll-datetime="settings" />
        </div>
    </div>
</template>

<script>
    export default {
        replace:true,
        props: ['birthday'],
        ready(){
            
        },
        watch:{
            birthday(){
                let self   = this,
                    tmpArr = self.birthday.split('-');
                    
                tmpArr.push('');
                tmpArr.push('');
                 
                $("#datetime-picker").datetimePicker({
                    value: tmpArr,
                    dateFormat: 'yyyy-mm-dd'
                });
            }
        }
    }
</script>