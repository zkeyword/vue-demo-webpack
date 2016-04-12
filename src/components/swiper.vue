<style lang="less">
    @import '../less/lib/mixins.less';
    /* 幻灯片 */
    .swiper-container{
        padding:0;
        .rem(height, 384);
    }
    .swiper-pagination-bullet{
        background:#fff;
        opacity:0.4;
        &.swiper-pagination-bullet-active {
            opacity: .6;
        }
    }
</style>

<template>
    <div class="swiper-container" data-space-between="10" data-pagination=".swiper-pagination">
        <div class="swiper-wrapper">
            <div v-for="slide in slides" class="swiper-slide">
                <a :href="{{slide.url}}"><img :src="slide.img" alt="" style="width: 100%"></a>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
    export default {
        replace:true,
        props: ['slides']
    }
</script>