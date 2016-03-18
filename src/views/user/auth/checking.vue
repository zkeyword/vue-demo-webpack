<style lang="less">
@import '../../../less/lib/mixins.less';
.page-checking{
    background:#54c5ff;
    text-align:center;
    height:100%;
    
    h2{
        .rem(padding, 120, 30);
        .rem(font-size, 60);
        .rem(padding-bottom, 60);
		margin:0;
    }
    
    p{
        color:#fff;
        .rem(font-size, 30);
        margin:0;
    }
}
</style>

<template>
    <div class="page-checking">
        <h2>等待是</h2>
        <div>
            <p>酱油已收到您的认证信息！</p>
            <p>将在一个工作日内帮您完成认证。</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {

        }
    }
</script>
