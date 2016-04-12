<style lang="less">
    @import '../less/lib/mixins.less';
    .page-home{
        background:#fff;
        
        .systemMsg{
            border-bottom:1px solid #dedede;
            position:relative;
            .rem(height, 80);
            .rem(line-height, 80);
            .rem(font-size, 24);
            .rem(padding, 0, 20, 0, 70);
            .rem(border-bottom-width, 2);
        }
        
        .ico-xiaolaba{
            position:absolute;
            .rem(width,40);
            .rem(height,40);
            .rem(top, 20);
            .rem(left, 20);
            .rem(font-size, 40);
            color:#ff946e;
        }
           
        /* 场景 */
        .sceneWrap{
            .rem(padding, 40, 20, 0);
        }
        
        .sceneItem{
            width:50%;
            float:left;
            .rem(padding, 0, 10, 16);
            .rem(height, 180);
            
            a{
                background:#54c5ff;
                display:inline-block;
                width:100%;
                height:100%;
                color:#fff;
                position:relative;
                .rem(padding,48,0,48,120);
                .border-radius(8);
            }
            &.red a{
                background:#ff946e;
            }
            
            span{
                display:block;
                &.first{
                    .rem(font-size, 30);
                }
                &.last{
                    .rem(font-size, 20);
                }
            }
        }

        .sceneIcon{
            .rem(background-size, 80, 80) !important;
            .rem(width,80);
            .rem(height,80);
            .rem(top, 50);
            .rem(left, 20);
            position:absolute;
        }
        .icon-home1{
            background:url(../img/home1.svg) no-repeat;
        }
        .icon-home2{
            background:url(../img/home2.svg) no-repeat;
        }
        .icon-home3{
            //background:url(../img/home3.svg) no-repeat;
        }
        .icon-home4{
            background:url(../img/home4.svg) no-repeat;
        }
        .icon-home5{
            background:url(../img/home5.svg) no-repeat;
        }
        .icon-home6{
            background:url(../img/home6.svg) no-repeat;
        }
        .icon-home7{
            //background:url(../img/home7.svg) no-repeat;
        }
    }
</style>

<template>
    <div class="page-home content showFooter">
        <!--<vn-swiper :slides="slides"></vn-swiper>-->
        <swiper :list="list"></swiper>
        <div class="systemMsg">
            <i class="ico ico-xiaolaba"></i>
            <marquee direction="left" scrollamount="3">
                {{systemMsg}}
            </marquee>
        </div>
        <div class="sceneWrap">
            <div class="sceneItem" :class="{'red': index % 4 == 2 || index % 4 == 1 }" v-for="(index, scene) in sceneList">
                <a external v-link="{ name: 'scene', query:{scene_id: scene.scene_id, scene_name: scene.scene_name} }">
                   <i class="icon sceneIcon icon-home{{scene.id}}"></i>
                   <span class="first">{{scene.scene_name}}</span>
                   <span class="last">{{scene.scene_detail}}</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            list: indexData.slides,
            systemMsg: indexData.systemMsg,
            sceneList: indexData.sceneList
        };
    },
    ready(){
        //$(".swiper-container").swiper();
    },
    components:{
        //'vnSwiper': require('../components/swiper.vue'),
        'swiper': require('../components/swiper/index'),
    }
}
</script>
