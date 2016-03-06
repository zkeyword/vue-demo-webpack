<style>
    .body {
        background: #fff;
    }
</style>

<template>
    <div id="home" class="content">
        <div class="swiper-container" data-space-between="10" data-pagination=".swiper-pagination">
            <div class="swiper-wrapper">
                <div v-for="slide in slides" class="swiper-slide"><img :src="{{slide.img}}" alt="" style="width: 100%"></div>
            </div>
            <div class="swiper-pagination"></div>
        </div>

        <div v-for="type in sceneList">
            <a external v-link="{ name: 'user', params: { id: type.scene_id } }">
                {{type.scene_name}}
            </a>
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
