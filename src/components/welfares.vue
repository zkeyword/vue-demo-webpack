<style lang="less">
    @import '../less/lib/mixins.less';
    .welfaresType{
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
                    background:#ff946e
                }
            }
        }
    }
</style>

<template>
    <ul class="welfaresType clearfix">
        <li v-for="item in welfaresList" @click="setwelfares(item.welfares_id)">

            <span class="cur" v-if="item | welfaresCur welfaresArr">
                {{item.welfares_name}}
            </span>
            <span v-else>
                {{item.welfares_name}}
            </span>
            
        </li>
    </ul>
</template>

<script>
    import utils from '../lib/utils';
    export default {
        replace:true,
        props: ['welfaresList', 'welfaresIds', 'isRadio'],
        data(){
            return {
                welfaresArr: []  
            }  
        },
        // ready(){
        //     let self = this;
            
        //     self.$nextTick(function () {
        //         if( !self.welfaresIds ) return;
        //         self.welfaresArr = self.welfaresIds.split('-');
        //     })
        // },
        watch:{
            welfaresIds(){
                let self = this;
				self.welfaresIds = self.welfaresIds + '';
                self.welfaresArr = self.welfaresIds.split('-');
            }
        },
        methods: {
			setwelfares(id){
                let self = this;
                if( !self.isRadio ){
                    if( utils.indexOf( self.welfaresArr, id ) > -1 ){
                        self.welfaresArr = utils.remove( self.welfaresArr, id );
                    }else{
                        self.welfaresArr.push(id);
                    }
                    self.welfaresIds = self.welfaresArr.join('-');
                }else{
                    self.welfaresArr = [];
                    self.welfaresArr.push(id);
                    self.welfaresIds = id;
                }
			}
        }
    }
</script>