<style lang="less">

</style>

<template>
<div>
    <header class="bar bar-nav">
        <h1 class="title">我的</h1>
    </header>
	<a external v-link="{ name: 'userEdit', params: { userId: 123 } }">edit</a>


    <div class="card-header">
        <img src="">
        名字

        未认证，点此认证！
        
        好评   1
        中评
        差评   1
        收藏
    </div>

    <div class="list-block">
        <ul>
            <li class="item-content item-link">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                    <div class="item-title">我的余额</div>
                </div>
            </li>
        </ul>
    </div>
    <div class="list-block">
        <ul>
            <li class="item-content item-link">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                    <div class="item-title">设置</div>
                </div>
            </li>
            <li class="item-content item-link">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                    <div class="item-title">发布服务</div>
                </div>
            </li>
        </ul>
    </div>
    <div class="list-block">
        <ul>
            <li class="item-content item-link">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                    <div class="item-title">发单任务</div>
                </div>
            </li>
            <li class="item-content item-link">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                    <div class="item-title">接单任务</div>
                </div>
            </li>
        </ul>
    </div>
    <div class="list-block">
        <ul>
            <li class="item-content item-link">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                    <div class="item-title">在线客服</div>
                </div>
            </li>
        </ul>
    </div>
	<router-view></router-view>
</div>
</template>

<script>
    export default {
        ready (){
            //setTimeout(() => {
            //   this.$route.router.go({ name: 'list'});
            //},2000);
        }
    }
</script>

<style lang="less">
    .index2{
        width: 100%;
        background-color: #fff;
        margin-top: 40%;
    }
</style>








