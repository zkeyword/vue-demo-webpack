<style lang="less">
    @import '../less/lib/mixins.less';
    .timeConf{
        table{
            width:100%;
            .rem(margin-top, 20);
            td{
                text-align:center;
                border:1px solid #b2b2b2;
                .rem(border-width, 2);
                .rem(padding, 6);
                .iconWrap{
                    .rem(height, 34);
                    .rem(width, 38);
                }
                .icon-xuanzhong{
                    background:url(../img/xuanzhong.svg) no-repeat;
                    .rem(background-size, 38, 34);
                    .rem(height, 34);
                    .rem(width, 38);
                }
            }
        }
    }
</style>

<template>
    <div class="timeConf">
        <table>
            <tr>
                <td>星期</td>
                <td>一</td>
                <td>二</td>
                <td>三</td>
                <td>四</td>
                <td>五</td>
                <td>六</td>
                <td>日</td>
            </tr>
            <tr v-for="item of 3">
                <td v-for="subItem of 8" @click="setAccount( subItem +''+ (item+1) )">
                    <span v-if="item == 0 && subItem == 0">上午</span>
                    <span v-if="item == 1 && subItem == 0">下午</span>
                    <span v-if="item == 2 && subItem == 0">晚上</span>
                    <span class="icon iconWrap" v-if="subItem != 0">
                        <i class="icon icon-xuanzhong" v-if="item | timerCur subItem timerArr"></i>
                    </span>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    import utils from '../lib/utils';
    export default {
        replace:true,
        props: ['timer'],
        data(){
            return {
                timerArr: []  
            }  
        },
        // ready(){
        //     let self = this;

        //     self.$nextTick(function () {
        //         if( !self.timer ) return;
        //         self.timerArr = self.timer.split('-');
        //     })
        // },
        watch:{
            timer(){
                let self = this;
                self.timerArr = self.timer.split('-');
            }
        },
        methods: {
			setAccount(id){
				let self = this;
                if( utils.indexOf( self.timerArr, id ) > -1 ){
                    self.timerArr = utils.remove( self.timerArr, id );
                }else{
                    self.timerArr.push(id);
                }
                self.timer = self.timerArr.join('-');
			}
        }
    }
</script>