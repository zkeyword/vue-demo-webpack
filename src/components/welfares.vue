<style lang="less">
    @import '../less/lib/mixins.less';
    .welfareType{
        li{
            float:left;
            color:#fff;
            text-align:center;
            overflow:hidden;
            .rem(width, 122);
            .rem(height, 58);
            .rem(line-height, 58);
            .rem(margin, 16, 8, 0);
            .rem(font-size, 24);
            .border-radius(8);
            span{
                display:block;
                background:#b2b2b2;
                .rem(width, 122);
                .rem(height, 58) !important;
                .rem(line-height, 58) !important;
                &.cur{
                     background:#ff946e;
                 }
            }
        }
    }
</style>

<template>
    <ul class="welfareType clearfix">
        <li v-for="item in welfares" @click="setwelfare(item.welfare_id)">

            <span class="cur" v-if="item | welfareCur welfareArr">
                {{item.welfare_name}}
            </span>
            <span v-else>
                {{item.welfare_name}}
            </span>

        </li>
    </ul>
</template>

<script>
    import utils from '../lib/utils';
    export default {
            replace:true,
            props: ['welfares', 'welfareIds', 'isRadio'],
            data(){
            return {
                welfareArr: []
            }
        },
        watch:{
            welfareIds(){
                let self = this;
                self.welfareArr = self.welfareIds.split('-');
            }
        },
        methods: {
            setwelfare(id){
                let self = this;
                if( !self.isRadio ){
                    if( utils.indexOf( self.welfareArr, id ) > -1 ){
                        self.welfareArr = utils.remove( self.welfareArr, id );
                    }else{
                        self.welfareArr.push(id);
                    }
                    self.welfareIds = self.welfareArr.join('-');
                }else{
                    self.welfareArr = [];
                    self.welfareArr.push(id);
                    self.welfareIds = id;
                }
            }
        }
    }
</script>