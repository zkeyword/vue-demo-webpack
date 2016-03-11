<style lang="less">
@import '../../../less/lib/mixins.less';
.page-authStep4{
    text-align:center;
    
    h2{
        .rem(font-size, 60);
    }
    
    p{
        color:#5e5e5e;
        .rem(font-size, 30)
    }
}
</style>

<template>
    <div class="page-authStep4">
        <div class="inside">
            <h2>认证中...</h2>
            <div>
                <p>酱油已收到您的认证信息！</p>
                将在一个工作日内帮您完成认证。</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {

        }
    }
</script>
