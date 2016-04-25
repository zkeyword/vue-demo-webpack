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
            .rem(width,80);
            .rem(height,80);
            .rem(top, 50);
            .rem(left, 20);
            .rem(font-size, 80);
            position:absolute;
        }
    }
</style>

<template>
    <div class="page-home page-current">
        <div class="content showFooter">
            <swiper :list="list"></swiper>
            <div class="systemMsg">
                <i class="ico ico-xiaolaba"></i>
                <marquee direction="left" scrollamount="3">
                    {{systemMsg}}
                </marquee>
            </div>
            <div class="sceneWrap">
                <div class="sceneItem" :class="{'red': index % 4 == 2 || index % 4 == 1 }" v-for="(index, scene) in sceneList">
                    <a external v-link="{ name: 'scene', query:{scene_id: scene.scene_id, scene_name: scene.scene_name, city_id: cityId} }">
                       <i class="ico sceneIcon {{icoArr[scene.id]}}"></i>
                       <span class="first">{{scene.scene_name}}</span>
                       <span class="last">{{scene.scene_detail}}</span>
                    </a>
                </div>
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
            sceneList: indexData.sceneList,
			cityId: '',
            icoArr: ['ico-ditu', 'ico-university', 'ico-save', 'ico-traffic', 'ico-traffic', 'ico-women', 'ico-service', 'ico-wudao']
        };
    },
	route:{
        data (transition){
            let self  = this,
                query = transition.to.query;
			
			self.cityId = returnCitySN.cid;
        }
    },
    components:{
        'swiper': require('../components/swiper/index'),
    }
}
</script>
