<style lang="less">
    @import '../less/lib/mixins.less';
    .sceneType{
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
                .rem(height, 58);
                .rem(line-height, 58);
                &.cur{
                    background:#ff946e
                }
            }
        }
    }
</style>

<template>
    <ul class="sceneType clearfix">
        <li v-for="item in sceneList" @click="setScene(item.scene_id)">

            <span class="cur" v-if="item | sceneCur sceneArr">
                {{item.scene_name}}
            </span>
            <span v-else>
                {{item.scene_name}}
            </span>
            
        </li>
    </ul>
</template>

<script>
    import utils from '../lib/utils';
    export default {
        replace:true,
        props: ['sceneList', 'sceneIds'],
        data(){
            return {
                sceneArr: []  
            }  
        },
        // ready(){
        //     let self = this;
            
        //     self.$nextTick(function () {
        //         if( !self.sceneIds ) return;
        //         self.sceneArr = self.sceneIds.split('-');
        //     })
        // },
        watch:{
            sceneIds(){
                let self = this;
                self.sceneArr = self.sceneIds.split('-');
            }
        },
        methods: {
			setScene(id){
                let self = this;
                if( utils.indexOf( self.sceneArr, id ) > -1 ){
                    self.sceneArr = utils.remove( self.sceneArr, id );
                }else{
                    self.sceneArr.push(id);
                }
                self.sceneIds = self.sceneArr.join('-');
			}
        }
    }
</script>