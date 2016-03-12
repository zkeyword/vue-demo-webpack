<style lang="less">
    @import '../less/lib/mixins.less';
    .page-home{
        /* 幻灯片 */
        .swiper-container{
            padding:0;
        }
        .swiper-pagination-bullet{
            background:#fff;
            opacity:0.4;
            &.swiper-pagination-bullet-active {
                opacity: .6;
            }
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
        
        .icon{
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
    <div class="page-home content">
        <div class="swiper-container" data-space-between="10" data-pagination=".swiper-pagination">
            <div class="swiper-wrapper">
                <div v-for="slide in slides" class="swiper-slide">
                    <a href="{{slide.url}}"><img :src="slide.img" alt="" style="width: 100%"></a>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <div class="sceneWrap">
            <div class="sceneItem" :class="{'red': index % 4 == 2 || index % 4 == 1 }" v-for="(index, scene) in sceneList">
                <a external v-link="{ name: 'user', params: { id: scene.scene_id } }">
                   <i class="icon icon-home{{scene.id}}"></i>
                   <span class="first">{{scene.scene_name}}</span>
                   <span class="last">{{scene.scene_detail}}</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    module.exports = {
        data: function(){
            return indexData;
        },
        ready: function () {
            $(".swiper-container").swiper();
        }
    }
</script>
