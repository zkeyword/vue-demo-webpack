<style lang="less">
@import '../../../less/lib/mixins.less';
.page-success{
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
    <div class="page-success">
        <h2>开心是</h2>
        <div>
            <p>恭喜您！</p>
            <p>成功通过认证，可以开始穿衣服了！亲</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {

    }
}
</script>
